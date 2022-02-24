import {Component, OnInit} from '@angular/core';
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
  imageLinks?: Array<string | null> | null;
  updatedAt: string | undefined; // Nov 27, 2020
  //imageNumber: number | undefined;


  constructor(private route: ActivatedRoute, private api: APIService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(prams => {
      console.log(prams['assetId'] + "_______>>>>>>");
      this.api.GetAssets(prams['assetId']).then(asset => {
        this.asset = asset;
        let date = new Date(asset.updatedAt);
        this.updatedAt = asset ? date.toLocaleString('default', {month: 'short'}) + " " + date.getDay() + ", " + date.getFullYear() : "";

        //FIXME: Will have to be done for all the images
        Storage.get( asset.id+ "/images/" + asset.Images![0] ?? "",
          {level: "protected", identityId: asset.UserId ?? ""}).then(link=>{
          this.assetImage = link;
        }).catch(err=>{
          console.error(err);
        })

        //
        // asset.Images?.forEach(image =>
        //   Storage.get(asset.id + "/images/" + asset.Images![0] ?? "",
        //     {level: "protected", identityId: asset.UserId ?? ""}).then(link => {
        //     console.log(link)
        //     this.imageLinks?.push(link);
        //   }).catch(err => {
        //     console.error(err);
        //   })
        // )
      })
    })
  }

  resetLink(): void {
    this.assetImage = "assets/loading-bar.png"
  }

}
