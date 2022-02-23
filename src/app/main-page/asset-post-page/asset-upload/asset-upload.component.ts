import { Component, OnInit } from '@angular/core';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Storage} from "aws-amplify";

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss']
})
export class AssetUploadComponent implements OnInit {

  removeFileIcon = faTrashAlt;
  file: File | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addAsset($event: Event) {
    let files = ($event.target as HTMLInputElement).files;
    if(files === null)
      return;

    this.file = (files[0] as File)

  }

  removeFile() {
    this.file = undefined;
  }

  //FIXME: Should return some kind of feedback of progress
  uploadAssetToBucket(userPath: string): void {
    if(this.file == undefined)
      return;

    Storage.put(userPath + this.file.name, this.file, {level: 'protected'}).then(r => {
      console.log(r);
    }).catch(err => {
      console.log(err);
    })
  }

  get assetFileName(): string{
    return this.file?.name ?? "";
  }

  get fileSize(): string{
    let bytes = this.file?.size ?? 0;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  }

  // async getPresignedUrl(filePath: string): string {
  //   try {
  //     return await Storage.get(filePath, {level: 'public'});
  //   }catch (err){
  //     console.log(err)
  //     return "";
  //   }
  // }


  // addZip(event: Event): void{
  //   this.uploadFile = (event.target as HTMLInputElement).files![0];
  // }
  //
  // uploadZip(): void {
  //   Storage.put(this.uploadFile.name, this.uploadFile, {
  //     level: "protected",
  //     contentType: this.uploadFile.type,
  //   }).then(() => {
  //     console.log("upload " + this.uploadFile.name);
  //   });
  // }

}
