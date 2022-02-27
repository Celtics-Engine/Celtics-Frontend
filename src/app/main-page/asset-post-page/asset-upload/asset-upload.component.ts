import { Component, OnInit } from '@angular/core';
import {faTimes, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Storage} from "aws-amplify";

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss']
})
export class AssetUploadComponent implements OnInit {

  removeFileIcon = faTimes;
  file: File | undefined;

  fileNeeded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addAsset($event: Event) {
    let files = ($event.target as HTMLInputElement).files;
    if(files === null) return;

    this.file = (files[0] as File)
  }

  resetInputValue($event: Event){
    const element = $event.target as HTMLInputElement
    element.value = ''
  }

  removeFile() {
    if(this.file != null) this.file = undefined;
  }

  async uploadAssetToBucket(userPath: string): Promise<string> {
    if(this.file == undefined)
      return Promise.reject("File undefined");
    try {
      return Promise.resolve((await Storage.put(userPath + this.file.name, this.file, {level: 'protected', contentType: this.file.type})).key)
    }catch (e) {
      return Promise.reject(e)
    }
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

  get canUpload(): boolean{
    this.fileNeeded = this.file?.name == undefined;
    return !this.fileNeeded;
  }

}
