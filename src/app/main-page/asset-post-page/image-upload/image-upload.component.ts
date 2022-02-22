import { Component, OnInit } from '@angular/core';
import {Storage} from "aws-amplify";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  images: Array<File> = [];


  constructor() { }

  ngOnInit(): void {}

  addImage(event: Event): void{
    let files = (event.target as HTMLInputElement).files;
    if(files === null)
      return;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      this.images.push(file as File)
    }
  }

  uploadAssetZip(event: Event): void{
    let promises = [];
    let files = (event.target as HTMLInputElement).files;
    for (let i = 0; i < this.images.length; i++) {
      let file = this.images[i];
      promises.push(Storage.put("/zip" + file.name, file, {
        level: "private",
        contentType: file.type,
      }));
      if(files === null)
        return;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        this.images.push(file as File)
      }
    }
    Promise.all(promises).then(() => {
      console.log("ready to upload");
    });
  }

  uploadImages():void{
    for (const image of this.images) {
      Storage.put("images/" + image.name, image, {
        level: "private",
        contentType: image.type
      }).then(r  => {
        console.log(r);
      }).catch(e => {
        console.log(e);
      });
    }
  }

  removeImageFromList(image: File) {
    let index = this.images.indexOf(image);
    if (index > -1) {
      this.images.splice(index, 1);
    }
  }
}
