import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js'

// implement form builder validators

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: string = "";

  loggedIn = false;
  userConfirmationPage = false;

  // attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

  constructor(private fb : FormBuilder) {}

  profileForm = this.fb.group({
    userName : ["", [Validators.required, Validators.email]],
    password : ["", [Validators.required, Validators.minLength(8)]]
  })
  confirmationForm = this.fb.group({
    confirmation : ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
  })
  ngOnInit(): void {
    this.isLoggedIn();
  }

  logoutUser(): void{
    if(!this.loggedIn)
      return;

    Auth.signOut().then((user) => {
      this.loggedIn = false;
      console.info("User signed out.")
    });
  }

  confirmUser(): void {
    Auth.confirmSignUp(this.user, this.confirmation).then((user) => {
      this.userConfirmationPage = false;
      console.info("User Confirmed");
    }).catch((err) => {
      console.error(err);
    });
  }

  signup(): void {
    Auth.signUp({
      username : this.userName,
      password : this.password,
      attributes: {
        email : this.userName,
      }
    }).then((user) => {
       this.userConfirmationPage = true
       this.user = user.user.getUsername();
       console.log(user.user.getUsername());
    });

  }

  signIn(): void {
    Auth.signIn(this.userName, this.password).then((user) => {
      this.loggedIn = true;
      console.log("SignIn Success")
    }).catch((err) => {
      if(err.code === "UserNotConfirmedException"){
        this.userConfirmationPage = true;
        this.user = this.userName;
        console.log("UserNotConfirmedException");
      }
      else{
        console.error(err);
      }
    })
  }

  isLoggedIn(): void {
    try {
      Auth.currentAuthenticatedUser().then(() => {
        this.loggedIn = true
      })
    } catch {
      this.loggedIn = false
    }
  }

  get userName(): string {
    return this.profileForm.get("userName")?.value
  }

  get password(): string {
    return this.profileForm.get("password")?.value
  }
  get confirmation(): string {
    return this.confirmationForm.get("confirmation")?.value
  }

}
