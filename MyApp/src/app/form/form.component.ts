import { Component, OnInit,  } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DbService} from "../db.service";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })
  export class FormComponent {
    myForm:FormGroup;
    subscription:Subscription;

    constructor(private fb: FormBuilder, private db:DbService) {
      this.myForm = fb.group({
         'name':['', Validators.required],
          'email':['', Validators.required],
          'post':['', Validators.required]

      });

    }
    onSubmit(){
      console.log(this.myForm.value);
    }

    getDataMethod() {
     this.subscription = this.db.getData().map(data=>data.json()).subscribe(data => {
        this.myForm.controls['name'].setValue(data.name);
        this.myForm.controls['email'].setValue(data.email);

      });


      this.subscription = this.db.getPost().map(data=>data.json()).subscribe(data => {
       this.myForm.controls['post'].setValue(data[0].body.substring(0,10))
      });
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}


