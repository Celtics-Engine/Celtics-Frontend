import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {Auth} from 'aws-amplify';


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
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.loggedIn = true;
        console.log(user);
        return user;
      })
      .catch(err => {
        this.loggedIn = false;
        console.log(err);
        return err;
      });
    console.log(Auth.currentAuthenticatedUser())
  }



}
