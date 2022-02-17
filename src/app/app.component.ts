import { Component } from '@angular/core';
import Amplify, {Auth} from "aws-amplify";
import awsConfig from "../aws-exports";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Celtics-Frontend';

  constructor() {
    Amplify.configure(awsConfig);
    Auth.configure(awsConfig);

  }

}
