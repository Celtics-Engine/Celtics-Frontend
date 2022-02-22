import {Injectable} from '@angular/core';
import {PageState} from "../../types/page-state";
import {BehaviorSubject} from "rxjs";
import {Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class WebsiteStateService {
  private websiteState = new BehaviorSubject<PageState>(PageState.LOGIN);

  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>("")

  websiteState$ = this.websiteState.asObservable()

  loggedIn$ = this.loggedIn.asObservable();
  username$ = this.username.asObservable();

  constructor() {}

  changeWebsiteState(state: PageState){
    this.websiteState.next(state)
    Auth.currentAuthenticatedUser().then(user => {
      this.loginState(true);
      this.usernameState(user.getUsername());
    }).catch(err => {
      this.loginState(false);
      this.usernameState("");
      console.log(err)
    })
  }
  loginState(state: boolean){
    this.loggedIn.next(state);
  }
  usernameState(state: string){
    this.username.next(state);
  }
}
