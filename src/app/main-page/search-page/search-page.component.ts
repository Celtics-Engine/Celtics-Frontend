import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService} from "../../API.service";
import {Assets} from "../../../models";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  private _loggedIn = false;
  private _user = "";
  private _date = "";
  private _version = 0;
  private _description = "";

  assets: Array<Assets> = [];

  constructor(private websiteState: WebsiteStateService, private api: APIService) {
    websiteState.loggedIn$.subscribe(state => {
      this._loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this._user = state;
    })
  }

  get name(): string {
    return this._user;
  }

  get date(): string {
    return this._date;
  }

  get version(): number {
    return this._version;
  }

  get description(): string {
    return this._description;
  }

  ngOnInit(): void {
    this.api.ListAssets({UserName: {eq: this._user}}).then(asset=>{
      asset.items.forEach(asset=>{
        if (asset == null || asset.owner != this._user)
          return;
        let temp = new Assets({
          Name: asset.Name == null ? "" : asset.Name,
          Description: asset.Description == null ? "" : asset.Description
        })
        this.assets.push(temp);
      })
    })
  }


}
