import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {PageState} from "../../types/page-state";


@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {

  shown: boolean = false;

  constructor(private websiteState: WebsiteStateService) { }

  ngOnInit(): void {
  }


  onClick(): void {
    this.shown = !this.shown;
    this.websiteState.changeWebsiteState(this.shown ? PageState.SEARCH : PageState.LOGIN);
  }
}
