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

  private _loggedIn = false;
  private _user = "";
  private _date = "";
  private _version = 0;
  private _description = "";

  // assets: Array<Assets> = [];

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
    // this.api.ListAssets({UserName: {eq: this._user}}).then(asset=>{
    //   asset.items.forEach(asset=>{
    //     if (asset == null || asset.owner != this._user)
    //       return;
    //     let temp = new Assets({
    //       Name: asset.Name == null ? "" : asset.Name,
    //       Description: asset.Description == null ? "" : asset.Description
    //     })
    //     this.assets.push(temp);
    //   })
    // })
  }

  assets = [
    {Name: "asset1", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset2", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset3", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset4", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset5", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset6", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset7", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset8", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset8", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset9", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset10", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset11", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},
    {Name: "asset12", createdAt:"2022-02-22T02:32:30.676Z", updatedAt:"2022-02-22T02:32:30.676Z", Description:"This is some description about and asset."},

  ]
}
