import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pertama',
  templateUrl: './form-pertama.component.html',
  styleUrls: ['./form-pertama.component.css']
})
export class FormPertamaComponent implements OnInit {
  addressesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressesForm = this.formBuilder.group({
      addresses: this.formBuilder.array([
        this.createAddress()
      ])
    });
  }

  createAddress(): FormGroup {
    return this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  get addresses(): FormArray {
    return this.addressesForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    console.log(this.addressesForm.value);
  }
}
