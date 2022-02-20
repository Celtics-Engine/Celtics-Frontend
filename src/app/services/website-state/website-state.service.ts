import {Injectable} from '@angular/core';
import {PageState} from "../../types/page-state";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsiteStateService {
  private websiteState = new BehaviorSubject<PageState>(PageState.SEARCH);

  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>("")

  websiteState$ = this.websiteState.asObservable()

  loggedIn$ = this.loggedIn.asObservable();
  username$ = this.username.asObservable();

  constructor() {}

  changeWebsiteState(state: PageState){
    this.websiteState.next(state)
  }
  loginState(state: boolean){
    this.loggedIn.next(state);
  }
  usernameState(state: string){
    this.username.next(state);
  }
}