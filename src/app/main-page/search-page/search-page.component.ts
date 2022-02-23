import { Component, OnInit } from '@angular/core';
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService} from "../../API.service";
import {Assets} from "../../../models";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  assets: Array<Assets> = [];
  noAssets: boolean = false;

  constructor(private websiteState: WebsiteStateService, private api: APIService, private fb: FormBuilder) {
  }

  searchForm = this.fb.group({
    search: ["asset"]
  })


  ngOnInit(): void {
    this.reloadAssets();
  }

  reloadAssets(): void{
    this.assets = [];
    this.noAssets = false

    this.api.ListAssets({Name: {contains: this.searchTerm}}).then(asset=>{
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
      this.noAssets = this.assets.length === 0;
    })

  }

  get searchTerm(): string {
    return this.searchForm.get("search")?.value;
  }

}
