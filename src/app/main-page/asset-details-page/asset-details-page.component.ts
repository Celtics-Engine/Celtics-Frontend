import {Component, OnInit} from '@angular/core';
import {APIService, GetAssetsQuery} from "../../API.service";
import {ActivatedRoute} from "@angular/router";
import {Storage} from "aws-amplify";
import {WebsiteStateService} from "../../services/website-state/website-state.service";

@Component({
  selector: 'app-asset-details-page',
  templateUrl: './asset-details-page.component.html',
  styleUrls: ['./asset-details-page.component.scss']
})
export class AssetDetailsPageComponent implements OnInit {
  asset: GetAssetsQuery | undefined;
  assetImage: string = "assets/loading-bar.png";
  imageLinks: Array<string | null> = new Array<string | null>();
  updatedAt: string | undefined; // Nov 27, 2020
  imageNumber: number = 1;


  constructor(private route: ActivatedRoute, private api: APIService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(prams => {
      this.api.GetAssets(prams['assetId']).then(asset => {
        this.asset = asset;
        let date = new Date(asset.updatedAt);
        this.updatedAt = asset ? date.toLocaleString('default', {month: 'short'}) + " " + date.getDay() + ", " + date.getFullYear() : "";

        asset.Images?.forEach(image =>
          Storage.get(asset.id + "/images/" + image ?? "",
            {level: "protected", identityId: asset.UserId ?? ""}).then(link => {
            this.imageLinks?.push(link);
          }).catch(err => {
            console.error(err);
          })
        );

      })
    })
  }

  resetLink(): void {
    this.assetImage = "assets/loading-bar.png"
  }

  onClickImage(imageNumber: number): void {
    if(imageNumber > 0 && imageNumber <= this.imageLinks.length) this.imageNumber = imageNumber;
  }

}
