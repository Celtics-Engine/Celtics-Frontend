import { Component, OnInit } from '@angular/core';
import {Assets} from "../../../models";
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService} from "../../API.service";

@Component({
  selector: 'app-asset-details-page',
  templateUrl: './asset-details-page.component.html',
  styleUrls: ['./asset-details-page.component.scss']
})
export class AssetDetailsPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
