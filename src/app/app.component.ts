import {Component, OnInit} from '@angular/core';
import {Amplify, Auth, Hub} from "aws-amplify";
import awsconfig from "../aws-exports";
import {WebsiteStateService} from "./services/website-state/website-state.service";
import {PageState} from "./types/page-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Celtics-Frontend';

  constructor(private websiteState: WebsiteStateService) {
    Amplify.configure(awsconfig);
  }

  ngOnInit(): void {
    this.isLoggedIn();

    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          this.websiteState.loginState(true);
          this.websiteState.usernameState(data.payload.data.getUsername())
          Auth.currentUserCredentials().then(user=>{
            this.websiteState.userIdState(user.identityId)
          })
          this.websiteState.changeWebsiteState(PageState.PROFILE);
          console.log('user signed in');
          break;
        case 'signUp':
          console.log('user signed up');
          break;
        case 'signOut':
          this.websiteState.changeWebsiteState(PageState.LOGIN);
          this.websiteState.loginState(false);
          console.log('user signed out');
          break;
        case 'signIn_failure':
          console.log('user sign in failed');
          break;
        case 'configured':
          console.log('the Auth module is configured');
      }
    });
  }

  isLoggedIn(): void {
    Auth.currentAuthenticatedUser().then((user) => {
      this.websiteState.loginState(true);
      this.websiteState.usernameState(user.getUsername())
      console.info("User Logged in")
    }).catch( err => {
      console.error(err)
    })

    Auth.currentUserCredentials().then(user=>{
      this.websiteState.userIdState(user.identityId)
    }).catch(err=>{

    })
  }

}
