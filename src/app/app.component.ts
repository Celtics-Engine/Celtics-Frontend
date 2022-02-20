import {Component, OnInit} from '@angular/core';
import {Amplify, Auth, AuthModeStrategyType} from "aws-amplify";
import awsconfig from "../aws-exports";
import {WebsiteStateService} from "./services/website-state/website-state.service";
import {CognitoUser} from "amazon-cognito-identity-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Celtics-Frontend';

  constructor(private stateService: WebsiteStateService) {
    Amplify.configure({
      ...awsconfig,
      DataStore: {
        authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn();
  }

  isLoggedIn(): void {
    Auth.currentAuthenticatedUser().then((user) => {
      this.stateService.loginState(true);
      this.stateService.usernameState(user.getUsername())
      console.info("User Logged in")
    }).catch( err => {
      console.error(err)
    })
  }
}
