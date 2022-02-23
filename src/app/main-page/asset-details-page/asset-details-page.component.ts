import { Component, OnInit } from '@angular/core';
import {Assets} from "../../../models";
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {APIService, GetAssetsQuery} from "../../API.service";
import {ActivatedRoute} from "@angular/router";
import {Storage} from "aws-amplify";

@Component({
  selector: 'app-asset-details-page',
  templateUrl: './asset-details-page.component.html',
  styleUrls: ['./asset-details-page.component.scss']
})
export class AssetDetailsPageComponent implements OnInit {
  asset: GetAssetsQuery | undefined;
  assetImage: string = "assets/loading-bar.png";


  constructor(private route: ActivatedRoute, private api: APIService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(prams=>{
      this.api.GetAssets(prams['assetId']).then(asset=>{
        this.asset = asset;


        //FIXME: Will have to be done for all the images
        Storage.get( asset.id+ "/images/" + asset.Images![0] ?? "",
          {level: "protected", identityId: asset.UserId ?? ""}).then(link=>{
          this.assetImage = link;
        }).catch(err=>{
          console.error(err);
        })
      })
    })
  }

  resetLink(): void{
    this.assetImage = "assets/loading-bar.png"
  }

}
