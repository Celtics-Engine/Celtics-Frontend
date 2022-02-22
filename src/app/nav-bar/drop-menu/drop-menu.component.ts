import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {PageState} from "../../types/page-state";
import {Option} from "./Option";
import {MENU_OPTIONS} from "./menu-options";


@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {
  menuOpts: Option[] = MENU_OPTIONS
  shown: boolean = false;

  constructor(private websiteState: WebsiteStateService) {}

  ngOnInit(): void {
  }

  toggleMenu() {
    this.shown = !this.shown;
  }

  onClickOption(option: Option): void {
    this.websiteState.changeWebsiteState(option.state);
  }

}

//TODO: make buttons to jump between screens

