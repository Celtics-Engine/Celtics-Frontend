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

  search: string = "";


  assets: Array<Assets> = [];

  constructor(private websiteState: WebsiteStateService, private api: APIService) {
    websiteState.loggedIn$.subscribe(state => {
      this._loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this._user = state;
    })
  }



  ngOnInit(): void {
    this.api.ListAssets({Name: {contains: this.search}}).then(asset=>{
      asset.items.forEach(asset=>{
        if (asset == null)
          return;

        let temp = new Assets({
          Name: asset.Name ?? "",
          Description: asset.Description ?? "",
          Images: asset.Images ?? []
        })
        this.assets.push(temp);
      })
    })
  }


}
