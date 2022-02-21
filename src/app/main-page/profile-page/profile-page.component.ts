import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";

// interface Asset {
//   name: string,
//   description: string;
// }

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
  }

  get user(): string {
    return this._user;
  }

  get count(): number {
    return this._count;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  ngOnInit(): void {

  }

  assets = [
    {name: "asset1", description: "Some description about this asset. This asset is really cool."},
    {name: "asset2", description: "Some description about this asset. This asset is really cool."},
    {name: "asset3", description: "Some description about this asset. This asset is really cool."},
    {name: "asset4", description: "Some description about this asset. This asset is really cool."},
    {name: "asset5", description: "Some description about this asset. This asset is really cool."}
  ];

  // loadTableData(data: [{Name: string, Description: string}])  {
  //   const tableBody = document.getElementById("tableData")
  //   let dataHtml = "";
  //
  //   for (let asset of data) {
  //     dataHtml += `<tr><td>${asset.Name}</td><td>${asset.Description}</td></tr>`;
  //   }
  //
  //   tableBody.innerHTML(dataHtml);
  // }
}
