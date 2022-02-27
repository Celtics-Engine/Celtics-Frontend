import {Component, OnInit, ViewChild} from '@angular/core';
import {EngineVersions} from "../../types/engine-versions";
import {ImageUploadComponent} from "./image-upload/image-upload.component";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {APIService} from '../../API.service'
import {WebsiteStateService} from "../../services/website-state/website-state.service";
import {AssetUploadComponent} from "./asset-upload/asset-upload.component";
import {PageState} from "../../types/page-state";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-asset-post-page',
  templateUrl: './asset-post-page.component.html',
  styleUrls: ['./asset-post-page.component.scss']
})
export class AssetPostPageComponent implements OnInit {
  @ViewChild(ImageUploadComponent, {static: true})
  imageUpload : ImageUploadComponent | undefined;

  @ViewChild(AssetUploadComponent, {static: true})
  assetUpload : AssetUploadComponent | undefined;

  engineStrings: Array<string> = Object.values(EngineVersions);
  username: string = "";
  userId: string = "";
  loggedIn: boolean = false;
  uploading: boolean = false;
  inputDefined: boolean | undefined = undefined;
  descriptionDefined: boolean | undefined = undefined;

  constructor(private api: APIService,private fb: FormBuilder, private websiteState: WebsiteStateService,private route: ActivatedRoute,private router: Router) {
    websiteState.username$.subscribe(user=>{
      this.username = user;
    })
    websiteState.userId$.subscribe(userId=>{
      this.userId = userId;
    })
    websiteState.loggedIn$.subscribe(loggedIn=>{
      this.loggedIn = loggedIn;
    })
  }

  assetForm = this.fb.group({
    name: ["", [Validators.required]],
    description: [""],
    engineVer:this.fb.array(this.engineVer)
  })

  ngOnInit(): void {

  }

  inputNameIsEmpty(): boolean {
    if (this.assetForm.get("name")?.value == "") {
      this.inputDefined = false;
      return true;
    }
    this.inputDefined = true;
    return false;
  }

  descriptionIsEmpty(): boolean {
    if (this.assetForm.get("description")?.value == "") {
      this.descriptionDefined = false;
      return true;
    }
    this.descriptionDefined = true;
    return false;
  }


  postAsset(): void{

    if (this.assetUpload == undefined || this.imageUpload == undefined || !this.loggedIn)
      return;

    if (this.inputNameIsEmpty()) {
      return;
    }

    if (this.descriptionIsEmpty()) {
      return;
    }

    let bool1 = !this.imageUpload.canUpload;
    let bool2 = !this.assetUpload.canUpload


    if(bool1 || bool2)
      return;

    this.uploading = true;

    this.api.CreateAssets({
      Name: this.assetName,
      Description: this.assetDescription,
      CompatableEngineVer: this.engineEngineCompat,
      AssetFile: this.assetUpload.assetFileName,
      Images: this.imageUpload.imageFilePaths,
      FileSize: this.assetUpload.fileSize,
      UserName: this.username,
      UserId: this.userId
    }).then(data=>{
      this.imageUpload?.uploadImages(data.id + "/").then(result=>{
        console.log(result);
        this.assetUpload?.uploadAssetToBucket(data.id + "/").then(result=>{
          console.log(result);
          this.assetDetails(data.id);
        })
      });
    }).catch(err=>{
      console.log(err)
    })
  }


  assetDetails(assetId: string): void{
    const queryParams: Params = { assetId: assetId };

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });

    this.websiteState.changeWebsiteState(PageState.ASSET_DETAILS);
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
