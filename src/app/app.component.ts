import {Component, OnInit} from '@angular/core';

import {WebsiteStateService} from "./services/website-state/website-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Celtics-Frontend';

  constructor(private stateService: WebsiteStateService) {

  }

  ngOnInit(): void {
  }


}
