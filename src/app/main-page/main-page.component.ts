import {Component, OnInit} from '@angular/core';
import {PageState} from "../types/page-state";
import {WebsiteStateService} from "../services/website-state/website-state.service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public PageState = PageState;
  public state: PageState = PageState.LOGIN;
  shown: boolean = false;

  constructor(private websiteState: WebsiteStateService) {
    websiteState.websiteState$.subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit(): void {
    console.log(PageState[this.state])

  }


}


