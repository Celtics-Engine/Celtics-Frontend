import { Component, OnInit } from '@angular/core';
import Amplify, { Storage } from 'aws-amplify';
import * as awsconfig from '../../aws-exports';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Amplify.configure(awsconfig);
  }

}
