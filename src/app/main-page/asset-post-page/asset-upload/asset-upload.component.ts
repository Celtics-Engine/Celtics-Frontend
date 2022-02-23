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
  // uploadFile: any;
  fileList: Array<File> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addAsset($event: Event) {
    let files = ($event.target as HTMLInputElement).files;
    if(files === null)
      return;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      this.fileList.push(file as File)
    }
  }

  removeFile(file: File) {
    this.fileList = this.fileList.filter(f => f !== file);
  }

  uploadAssetToBucket(): void {
    this.fileList.forEach(file => {
      Storage.put(file.name, file, {level: 'protected'}).then(r => {
        console.log(r);
      }).catch(err => {
        console.log(err);
      })
    });
  }

  getPresignedUrl(file: File) {
    Storage.get(file.name, {level: 'public'}).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }


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
