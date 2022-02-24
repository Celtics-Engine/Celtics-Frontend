import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService, Assets, GetAssetsQuery} from "../../API.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Storage} from "aws-amplify";
import {Option} from "../../nav-bar/drop-menu/Option";
import {PageState} from "../../types/page-state";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  assets: Array<GetAssetsQuery> = [];


  noAssets: boolean = false;
  loading: boolean = false;

  constructor(private websiteState: WebsiteStateService, private api: APIService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  searchForm = this.fb.group({
    search: [""]
  })


  ngOnInit(): void {
    this.reloadAssets();
  }

  reloadAssets(): void{
    if(this.loading)
      return;

    this.noAssets = false
    this.loading = true;

    this.api.ListAssets({Name: {contains: this.searchTerm}}).then(asset=>{
      this.assets = [];
      asset.items.forEach(asset=>{
        if (asset == null || asset._deleted)
          return;

        this.assets.push(asset);
      })
      this.noAssets = this.assets.length === 0;
      this.loading = false;
    })
  }

  get searchTerm(): string {
    return this.searchForm.get("search")?.value;
  }

  onClickOption(asset: any): void {
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
}
