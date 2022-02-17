import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Auth } from 'aws-amplify';

// implement form builder validators

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loggedIn = false;

  // attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

  constructor(private fb : FormBuilder) {}

  profileForm = this.fb.group({
    userName : ["", [Validators.required, Validators.email]],
    password : ["", [Validators.required, Validators.minLength(8)]]
  })

  ngOnInit(): void {

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


  signup(): void {
    console.log("clicked")
    try {
      Auth.signUp({
        username : this.userName,
        password : this.password,
        attributes: {
          email : this.userName,
        }
      }).then((user) => {
         console.log(user.user.getUsername());
      });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  signIn(): void {
    try {
      Auth.signIn(this.userName, this.password).then((user) => {
        console.log(user.user.getUsername())
      })
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  get userName(): string {
    return this.profileForm.get("userName")?.value
  }

  get password(): string {
    return this.profileForm.get("password")?.value
  }


}
