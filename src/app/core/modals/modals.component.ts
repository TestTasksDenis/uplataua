import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  formEnter: FormGroup;
  formReg: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.formEnter = this._fb.group({
      enterName: [null, [
        Validators.required,
        Validators.minLength(5),
      ]],
      enterPass: [null, [
        Validators.required,
        Validators.minLength(5),
      ]]
    });

    this.formReg = this._fb.group({
      regMail: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]],
      regName: [null, [
        Validators.required,
        Validators.minLength(5),
      ]],
      regPass: [null, [
        Validators.required,
        Validators.minLength(5),
      ]]
    });
  }

  onSubmitEnter() {
    console.log(this.formEnter.value);
  }

  onSubmitReg() {
    console.log(this.formReg);
  }
}
