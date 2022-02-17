import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

// implement form builder validators

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  valid = true;

  constructor(private fb : FormBuilder) {}

  profileForm = this.fb.group({
    userName : [""],
    password : [""]
  })

  ngOnInit(): void {

  }

  button(): void {
    this.profileForm.patchValue({
      userName : "changed value"
    })
  }



}
