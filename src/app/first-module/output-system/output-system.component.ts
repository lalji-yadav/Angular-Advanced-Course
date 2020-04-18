import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-output-system',
  templateUrl: './output-system.component.html',
  styleUrls: ['./output-system.component.scss']
})
export class OutputSystemComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
   firstName: ['', Validators.required],
   lastName: ['', Validators.required],

    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),

    arrayName: this.fb.array([
     // this.fb.control('')
      this.fb.group({
       name: ['', [Validators.required, Validators.minLength(3)]],
       email: ['', Validators.required],
       mob: ['', Validators.required]
     })
   // this.createItem()
    ]),
  });

  get arrayNamee() {
    return this.profileForm.get('arrayName') as FormArray;
  }

  addAlias() {
    // this.arrayName = this.profileForm.get('arrayName') as FormArray;
    // this.arrayName.push(this.createItem());
    this.arrayNamee.push(this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mob: ['', Validators.required],
    }));
  }

onSubmit() {
  console.log(this.profileForm.value);
}

  ngOnInit(): void {
  }

}
