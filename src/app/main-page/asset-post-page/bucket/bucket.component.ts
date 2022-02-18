import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {

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



}
