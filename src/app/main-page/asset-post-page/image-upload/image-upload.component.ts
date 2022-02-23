import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Storage} from "aws-amplify";
import {faCross, faTimes, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  images: Array<{
    file: File,
    url: any
  }> = [];
  removeFileIcon = faTimes;

  @ViewChild('imageInput', {static: false})
  InputVar: ElementRef | undefined;


  constructor() { }

  ngOnInit(): void {}

  addImage(event: Event): void{
    let files = (event.target as HTMLInputElement).files;
    if(files === null)
      return;

    var reader = new FileReader();
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      reader.readAsDataURL(file);

      reader.onload = ev => {
        this.images.push({
          file :file as File,
          url: reader.result
        })
      }
    }
    if(this.InputVar != undefined)
      this.InputVar.nativeElement.value = "";
  }

  //FIXME: Should return some kind of feedback of progress
  uploadImages(imagePath: string):void{
    for (const image of this.images) {
      Storage.put(imagePath + "images/" + image.file.name, image, {
        level: "protected",
        contentType: image.file.type
      }).then(r  => {
        console.log(r);
      }).catch(e => {
        console.log(e);
      });
    }
  }

  get imageFilePaths(): Array<string>{
    let filenames: Array<string> = [];
    for (let file of this.images){
      filenames.push(file.file.name);
    }
    return filenames
  }

  removeImageFromList(image: File) {
    for (let file of this.images){
      if(file.file === image){
        this.images.splice(this.images.indexOf(file),1);
      }
    }
  }

}
