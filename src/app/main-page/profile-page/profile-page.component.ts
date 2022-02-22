import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService} from "../../API.service";
import {Assets} from "../../../models";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  private _user = "";
  private _count = 0;
  private _loggedIn = false;
  assets: Array<Assets> = [];

  constructor(private websiteState: WebsiteStateService, private api: APIService) {
    websiteState.loggedIn$.subscribe(state => {
      this._loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this._user = state;
    })
    // TODO: add method to count asset Contributions
    this._count = this.totalRows;
  }

  ngOnInit(): void {
    //FIXME: This should be doing the search on the DB side not the client side.
    this.api.ListAssets({UserName: {eq: this.user}}).then(asset=>{
      console.log(asset.items)
      asset.items.forEach(asset=>{
        if (asset == null || asset.owner != this.user)
          return;
        let temp = new Assets({
          Name: asset.Name == null ? "" : asset.Name,
          Description: asset.Description == null ? "" : asset.Description
        })
        this.assets.push(temp);
      })
    })
  }

  get user(): string {
    return this._user;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get count(): number {
    return this._count;
  }



  get totalRows(): number {
    return document.getElementsByName("row").length;
  }



}
