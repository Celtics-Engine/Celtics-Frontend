import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {PageState} from "../../types/page-state";
import {Option} from "./Option";
import {MENU_OPTIONS} from "./menu-options";
import {animate, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss'],
  animations: [
    trigger('fadein', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class DropMenuComponent implements OnInit {
  menuOpts: Option[] = MENU_OPTIONS
  shown: boolean = true;

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
