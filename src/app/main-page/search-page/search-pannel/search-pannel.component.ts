import {Component, Input, OnInit} from '@angular/core';
import {Storage} from "aws-amplify";

@Component({
  selector: 'app-search-pannel',
  templateUrl: './search-pannel.component.html',
  styleUrls: ['./search-pannel.component.scss']
})
export class SearchPannelComponent implements OnInit {
  @Input()
  asset: {
    __typename: "Assets";
    id: string;
    Name?: string | null;
    Description?: string | null;
    Images?: Array<string | null> | null;
    AssetFile?: string | null;
    FileSize?: string | null;
    CompatableEngineVer?: Array<string | null> | null;
    UserName?: string | null;
    UserId?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | undefined;

  assetImage: string = "https://images.unsplash.com/photo-1611488006001-eb993d4d2ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80";

  constructor() { }

  ngOnInit(): void {
    if(this.asset === undefined)
      return;

    let asset = this.asset;
    console.log(asset.UserId ?? "")

    Storage.get( asset.id+ "/images/" + asset.Images![0] ?? "",
      {level: "protected",
        identityId: asset.UserId ?? ""}).then(link=>{
      console.log(link)
      this.assetImage = link;
    }).catch(err=>{
      console.error(err);
    })
  }

  resetLink(): void{
    this.assetImage = "https://images.unsplash.com/photo-1611488006001-eb993d4d2ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
  }


}













