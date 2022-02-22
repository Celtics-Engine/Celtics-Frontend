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

  user: Promise<any> = new Promise<any>(resolve => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        resolve(user);
        this.loggedIn = true;
        console.log(user);
      })
      .catch(err => {
        resolve(null);
        this.loggedIn = false;
        console.log(err);
      });
  });
  userName = this.getUserName()


  constructor(private websiteState: WebsiteStateService) {
    websiteState.loggedIn$.subscribe(state => {
      this.loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this.userName = state;
    })
  }

  ngOnInit(): void {

  }

  getUserName(): string {
    this.user.then(user => {
      this.userName = user.username;
    })
    return this.userName;
  }

}
