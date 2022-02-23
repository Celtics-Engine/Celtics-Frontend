import {Component, OnInit} from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService} from "../../API.service";
import {Assets} from "../../../models";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PageState} from "../../types/page-state";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  private _user = "";
  private _loggedIn = false;
  assets: Array<{
    __typename: "Assets";
    id: string;
    Name?: string | null;
    Description?: string | null;
    Images?: Array<string | null> | null;
    AssetFile?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    UserName?: string | null;
    UserId?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  }> = [];

  constructor(private websiteState: WebsiteStateService, private api: APIService, private router: Router, private route: ActivatedRoute) {
    websiteState.loggedIn$.subscribe(state => {
      this._loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this._user = state;
    })
  }

  ngOnInit(): void {
    this.api.ListAssets({UserName: {eq: this.user}}).then(asset=>{
      asset.items.forEach(asset=>{
        if (asset == null || asset.owner != this.user)
          return;

        this.assets.push(asset);
      })
    })
  }

  assetDetails(asset: any): void{
    const queryParams: Params = { assetId: asset.id };

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });

    this.websiteState.changeWebsiteState(PageState.ASSET_DETAILS);
  }

  get user(): string {
    return this._user;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }
}
