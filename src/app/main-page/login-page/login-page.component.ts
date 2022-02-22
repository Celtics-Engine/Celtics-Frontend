import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {Auth, Hub} from 'aws-amplify';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loggedIn = false;

  constructor(private websiteState: WebsiteStateService) {
    websiteState.loggedIn$.subscribe(state => {
      this.loggedIn = state;
    })
  }

  ngOnInit(): void {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          break;
        case 'signUp':
          console.log('user signed up');
          break;
        case 'signOut':
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
}
