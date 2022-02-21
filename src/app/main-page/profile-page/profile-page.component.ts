import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  private _user = "";
  private _count = 0;
  private _loggedIn = false;

  constructor(private websiteState: WebsiteStateService) {
    websiteState.loggedIn$.subscribe(state => {
      this._loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this._user = state;
    })
    // TODO: add method to count asset Contributions
    this._count = this.totalRows;
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

  ngOnInit(): void {

  }

  get totalRows(): number {
    return document.getElementsByName("row").length;
  }

  assets = [
    {name: "asset1", description: "Some description about this asset. This asset is really cool."},
    {name: "asset2", description: "Some description about this asset. This asset is really cool."},
    {name: "asset3", description: "Some description about this asset. This asset is really cool."},
    {name: "asset4", description: "Some description about this asset. This asset is really cool."},
    {name: "asset5", description: "Some description about this asset. This asset is really cool."},
    {name: "asset6", description: "Some description about this asset. This asset is really cool."},
    {name: "asset7", description: "Some description about this asset. This asset is really cool."},
    {name: "asset8", description: "Some description about this asset. This asset is really cool."},
    {name: "asset9", description: "Some description about this asset. This asset is really cool."},
    {name: "asset10", description: "Some description about this asset. This asset is really cool."},
    {name: "asset11", description: "Some description about this asset. This asset is really cool."},
    {name: "asset12", description: "Some description about this asset. This asset is really cool."},
    {name: "asset13", description: "Some description about this asset. This asset is really cool."},
    {name: "asset14", description: "Some description about this asset. This asset is really cool."},
    {name: "asset15", description: "Some description about this asset. This asset is really cool."},
    {name: "asset16", description: "Some description about this asset. This asset is really cool."}
  ];


}
