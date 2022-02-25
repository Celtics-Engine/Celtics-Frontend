import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../services/website-state/website-state.service";
import {PageState} from "../types/page-state";
import {Option} from "./Option";
import {MENU_OPTIONS} from "./menu-options";
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  menuOpts: Option[] = MENU_OPTIONS
  pageState = PageState;
  shown: boolean = true;
  loggedin: boolean = false;
  title: string = "Celtics-Engine";

  constructor(private websiteState: WebsiteStateService) {
    websiteState.loggedIn$.subscribe(state=>{
      this.loggedin = state;
      this.shown = false;
    })
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.shown = !this.shown;
  }

  onClickOption(option: Option): void {
    if(option.state == PageState.LOGOUT){
      Auth.signOut().catch(err=>{
        console.log(err);
      })
    } else {
      this.websiteState.changeWebsiteState(option.state);
    }
  }

}
