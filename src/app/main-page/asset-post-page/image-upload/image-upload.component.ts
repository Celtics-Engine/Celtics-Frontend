import { Component, OnInit } from '@angular/core';
import {Storage} from "aws-amplify";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  images: Array<File> = [];
  zipFiles: Array<File> = [];
  removeFileIcon = faTrashAlt;


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

  addZip(event: Event): void{
    let files = (event.target as HTMLInputElement).files;
      if(files === null)
        return;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        this.zipFiles.push(file as File)
      }
  }

  uploadZip(): void {
    let promises = [];
    for (let i = 0; i < this.zipFiles.length; i++) {
      let file = this.zipFiles[i];
      promises.push(Storage.put("/zip" + file.name, file, {
        level: "private",
        contentType: file.type,
      }).then(() => {
        console.log("upload " + file.name);
      }));
    }
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

  removeZipFilesFromList(zip: File) {
    let index = this.zipFiles.indexOf(zip);
    if (index > -1) {
      this.zipFiles.splice(index, 1);
    }
  }

}
