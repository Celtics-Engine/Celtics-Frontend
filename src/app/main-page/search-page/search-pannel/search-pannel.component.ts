import {Component, Input, OnInit} from '@angular/core';
import {Storage} from "aws-amplify";
import {GetAssetsQuery} from "../../../API.service";

@Component({
  selector: 'app-search-pannel',
  templateUrl: './search-pannel.component.html',
  styleUrls: ['./search-pannel.component.scss']
})
export class SearchPannelComponent implements OnInit {
  @Input()
  asset: GetAssetsQuery | undefined;

  assetImage: string = "assets/loading-bar.png";

  constructor() { }

  ngOnInit(): void {
    if(this.asset === undefined)
      return;

    let asset = this.asset;

    Storage.get( asset.id+ "/images/" + asset.Images![0] ?? "",
      {level: "protected",
        identityId: asset.UserId ?? ""}).then(link=>{
      this.assetImage = link;
    }).catch(err=>{
      console.error(err);
    })
  }

  resetLink(): void{
    this.assetImage = "assets/loading-bar.png"
  }


}













