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
  shown: boolean = false;
  private _user: string | undefined;

  constructor(private route: ActivatedRoute, private api: APIService, private websiteState: WebsiteStateService) {
  }


  ngOnInit() {
    this.websiteState.username$.subscribe(state => {
      this._user = state;
    })
    this.route.queryParams.subscribe(prams => {
      this.api.GetAssets(prams['assetId']).then(asset => {
        this.asset = asset;
        let date = new Date(asset.updatedAt);
        this.updatedAt = asset ? date.toLocaleString('default',
          {month: 'short'}) + " " + date.getDay() + ", " + date.getFullYear() : "";

        asset.Images?.forEach(image =>
          Storage.get(this.assetId() + "/images/" + image ?? "",
            {level: "protected", identityId: asset.UserId ?? ""}).then(link => {
            this.imageLinks?.push(link);
          }).catch(err => {
            console.error(err);
          })
        );

      })
    })

    this.checkIfAssetBelongsToUser();
  }

  downloadAsset() {
    Storage.get( this.assetId() + "/" + this.assetFile(),
      {level: "protected",
        identityId: this.assetUserId() ?? "",
        download: true}).then(link=>{
      console.log(link);
      let url = window.URL.createObjectURL(link.Body as Blob);
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = url;
      a.download = this.asset?.AssetFile ?? "";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }

  removeAsset() {
    Storage.remove(this.assetId() + "/" + this.assetFile(), {level: 'protected'}).then(value => {
      console.log("removing asset: " + value)
      for (let image of this.asset?.Images ?? []) {
        Storage.remove(this.assetId() + "/images/" + image).then(r => {
          console.log("removing images: " + r);
        }).catch(err => {
          console.error(err);
        })
      }
      this.api.DeleteAssets({id: this.asset!.id, _version : this.asset?._version}).then(r => console.log(r))
    })
  }

  assetId(): string {
    return this.asset?.id ?? "";
  }

  assetFile(): string {
    return this.asset?.AssetFile ?? "";
  }

  assetUserId(): string {
    return this.asset?.UserId ?? "";
  }

  resetLink(): void {
    this.assetImage = "assets/loading-bar.png"
  }

  onClickImage(imageNumber: number): void {
    if(imageNumber > 0 && imageNumber <= this.imageLinks.length) this.imageNumber = imageNumber;
  }

  checkIfAssetBelongsToUser() {
    this.api.ListAssets({UserName: {eq: this._user}}).then(asset => {
      asset.items = asset.items.filter(item => item!.id === this.assetId());
      this.shown = asset.items.length > 0;
    })
  }
}

