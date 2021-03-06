import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";


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
  }
}
