import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js'
import {WebsiteStateService} from "../../../services/website-state/website-state.service";

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


  constructor(private fb : FormBuilder, private websiteState: WebsiteStateService) {
    websiteState.loggedIn$.subscribe(state => {
      this.loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this.user = state;
    })
  }

  profileForm = this.fb.group({
    userName : ["", [Validators.required, Validators.email]],
    password : ["", [Validators.required, Validators.minLength(8)]]
  })
  confirmationForm = this.fb.group({
    confirmation : ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
  })

  ngOnInit(): void {

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
       this.websiteState.loginState(false);
       console.log(user.user.getUsername());
    });

  }

  signIn(): void {
    Auth.signIn(this.userName, this.password).then((user) => {
      this.websiteState.loginState(true)
      console.log("SignIn Success")
    }).catch((err) => {
      if(err.code === "UserNotConfirmedException"){
        this.userConfirmationPage = true;
        this.websiteState.usernameState(this.userName)
        console.log("UserNotConfirmedException");
      }
      else{
        console.error(err);
      }
    })
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
