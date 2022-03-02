import {Injectable} from '@angular/core';
import {PageState} from "../../types/page-state";
import {BehaviorSubject} from "rxjs";
import {Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class WebsiteStateService {
  private websiteState = new BehaviorSubject<PageState>(PageState.SEARCH);

  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>("")
  private userId = new BehaviorSubject<string>("");

  websiteState$ = this.websiteState.asObservable()

  loggedIn$ = this.loggedIn.asObservable();
  username$ = this.username.asObservable();
  userId$ = this.userId.asObservable();

  changeWebsiteState(state: PageState){
    this.websiteState.next(state)
    Auth.currentAuthenticatedUser().then(user => {
      this.loginState(true);
      this.usernameState(user.getUsername());
    }).catch(err => {
      this.loginState(false);
      this.usernameState("");
      this.userIdState("");
      console.log(err)
    })
    Auth.currentUserCredentials().then(user=>{
      this.userIdState(user.identityId)
    })
  }
  loginState(state: boolean){
    this.loggedIn.next(state);
    if(!state)
      this.usernameState("");
  }
  usernameState(state: string){
    this.username.next(state);
  }
  userIdState(state: string){
    this.userId.next(state);
  }
}
