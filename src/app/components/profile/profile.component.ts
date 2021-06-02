import {Component,ViewChild , OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';
import { Step1Component } from './create/step1/step1.component';
import { Step2Component } from './create/step2/step2.component';
import { Step3Component } from './create/step3/step3.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('Step1Component') step1Component: Step1Component;
  @ViewChild('Step2Component') step2Component: Step2Component;
  @ViewChild('Step3Component') step3Component: Step3Component;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  isEditable = false;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
