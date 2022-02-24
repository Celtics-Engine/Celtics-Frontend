import { Component, OnInit } from '@angular/core';
import {APIService, GetAssetsQuery} from "../../API.service";
import {ActivatedRoute} from "@angular/router";
import {Auth, Storage} from "aws-amplify";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-asset-details-page',
  templateUrl: './asset-details-page.component.html',
  styleUrls: ['./asset-details-page.component.scss']
})
export class AssetDetailsPageComponent implements OnInit {
  asset: GetAssetsQuery | undefined;
  assetImage: string = "assets/loading-bar.png";
  url: URL | undefined;

  constructor(private route: ActivatedRoute, private api: APIService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(prams=>{
      this.api.GetAssets(prams['assetId']).then(asset=>{
        this.asset = asset;
        Storage.get( asset.id+ "/images/" + asset.Images![0] ?? "",
          {level: "protected", identityId: asset.UserId ?? ""}).then(link=>{
          this.assetImage = link;
        }).then(() => {
          this.url = new URL(this.assetImage);
        });
      }).catch(err=>{
        console.error(err);
      })
    })
  }

  downloadAsset() {
    Storage.get( this.asset!.id+ "/" + this.asset!.AssetFile,
      {level: "protected",
        identityId: this.asset!.UserId ?? "",
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
    Storage.remove(this.asset!.id+ "/" + this.asset!.AssetFile, {level: 'protected'}).then(value => {
      console.log("removing asset: " + value)
      for (let image of this.asset?.Images ?? []) {
        Storage.remove(this.asset!.id + "/images/" + image).then(r => {
          console.log("removing images: " + r);
        }).catch(err => {
          console.error(err);
        })
      }
      this.api.DeleteAssets({id: this.asset!.id, _version : this.asset?._version}).then(r => console.log(r))
    })
  }

  resetLink(): void{
    this.assetImage = "assets/loading-bar.png"
  }

  assets(): string | any[] {
    return this.asset?.AssetFile ?? [];
  }

  assetId(): string {
    return this.asset?.id ?? "";
  }

  assetName(): string {
    return this.asset?.Name ?? "";
  }

  assetDescription(): string {
    return this.asset?.Description ?? "";
  }

  getUrl() {
    return this.url?.href ?? "";
  }
}
