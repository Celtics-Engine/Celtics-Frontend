import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService, Assets} from "../../API.service";
import {FormBuilder} from "@angular/forms";
import {Storage} from "aws-amplify";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
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


  noAssets: boolean = false;
  loading: boolean = false;

  constructor(private websiteState: WebsiteStateService, private api: APIService, private fb: FormBuilder) {
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
        if (asset == null)
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

}
