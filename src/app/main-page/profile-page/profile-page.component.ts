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

  userAssets!: ({ __typename: "Assets";
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
    owner?: string | null } | null)[];

  length!: number;

  constructor(private websiteState: WebsiteStateService, private api: APIService,
              private router: Router, private route: ActivatedRoute) {
    websiteState.loggedIn$.subscribe(state => {
      this._loggedIn = state;
    })
    websiteState.username$.subscribe(state => {
      this._user = state;
    })
  }

  ngOnInit(): void {
    this.api.ListAssets({UserName: {eq: this._user}}).then(asset => {
      this.userAssets = asset.items.filter(a => a!.owner == this._user).filter(a => a!._deleted == null);
      this.length = this.userAssets.length;
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

  removeAsset(id: String): boolean {

    this.userAssets = this.userAssets.filter(asset =>{
      return asset != undefined && asset.id != id;

    } );

    return true;
  }
}
