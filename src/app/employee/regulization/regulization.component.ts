import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulization',
  templateUrl: './regulization.component.html',
  styleUrl: './regulization.component.css'
})
export class RegulizationComponent implements OnInit {
  submitted: boolean = false;
  userForm: FormGroup;
  selectedReason:any;
  constructor(private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      indate: [''], 
      outDate: [''],
      inTime: [''],
      outTime: [''],
     reason: [''],
     remarks: ['']
    });
  
   
  }
 
   
  ngOnInit(): void {
    this.addUser();
  }
    addUser() {
      console.log(this.userForm.value);
    }
  
  

  close() {
    this.router.navigateByUrl('/employee/home')
  }
  get f() { return this.userForm.controls; }


  submit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return
    }  else{
      console.log(this.userForm.value );

    }
  }
}