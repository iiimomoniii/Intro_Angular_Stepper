import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  secondFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

}