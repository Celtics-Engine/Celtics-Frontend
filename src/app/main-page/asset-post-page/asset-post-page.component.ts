import {Component, OnInit, ViewChild} from '@angular/core';
import {EngineVersions} from "../../types/engine-versions";
import {ImageUploadComponent} from "./image-upload/image-upload.component";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {DataStore} from "@aws-amplify/datastore";
import {Assets} from "../../../models";

@Component({
  selector: 'app-asset-post-page',
  templateUrl: './asset-post-page.component.html',
  styleUrls: ['./asset-post-page.component.scss']
})
export class AssetPostPageComponent implements OnInit {
  @ViewChild(ImageUploadComponent, {static: true})
  imageUpload : ImageUploadComponent | undefined;

  engineStrings: Array<string> = Object.values(EngineVersions);

  constructor(private fb: FormBuilder) {}

  assetForm = this.fb.group({
    name: ["", [Validators.required]],
    description: [""],
    engineVer:this.fb.array(this.engineVer)

  })


  ngOnInit(): void {
  }

  postAsset(): void{/*
    DataStore.save(new Assets({
      Name: this.assetName,
      Description: this.assetDescription,
      CompatableEngineVer: this.engineEngineCompat,
    })).then(asset=>{
      console.log(asset.id);
    })*/
    DataStore.query(Assets).then(assets=>{
      console.log(assets)
    })
  }

  get engineVer(): Array<FormControl> {
    let array = new Array<FormControl>();
    for (const engine of Object.values(EngineVersions)){
      array.push(new FormControl(false));
    }
    return array
  }

  get engineEngineCompat(): Array<EngineVersions>{
    let compatibleEngineVer = new Array<EngineVersions>();
    let index = 0;
    for (let engine of this.assetForm.get("engineVer")?.value){
      if(engine){
        compatibleEngineVer.push(Object.values(EngineVersions)[index])
      }
      index++;
    }
    return compatibleEngineVer;
  }

  get assetName(): string{
    return this.assetForm.get("name")?.value
  }
  get assetDescription(): string{
    return this.assetForm.get("description")?.value
  }
}
