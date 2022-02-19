import {Component, OnInit, ViewChild} from '@angular/core';
import {EngineVersions} from "../../types/engine-versions";
import {Storage} from "aws-amplify";
import {ImageUploadComponent} from "./image-upload/image-upload.component";

@Component({
  selector: 'app-asset-post-page',
  templateUrl: './asset-post-page.component.html',
  styleUrls: ['./asset-post-page.component.scss']
})
export class AssetPostPageComponent implements OnInit {
  @ViewChild(ImageUploadComponent, {static: true})
  imageUpload : ImageUploadComponent | undefined;

  EngineVersions = EngineVersions;


  constructor() { }

  ngOnInit(): void {
  }

  postAsset(): void{
    this.imageUpload?.uploadImages();
  }

}
