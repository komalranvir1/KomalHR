import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent implements OnInit {
  submitted: boolean = false;
  leaveForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      period: ['', Validators.required],
      category: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      message: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.submit();
  }

  close() {
    this.router.navigateByUrl('/employee/home')
  }
  get f() { return this.leaveForm.controls; }


  submit() {
    this.submitted = true;
    if (this.leaveForm.invalid) {
      return
    }  else{
      console.log(this.leaveForm.value );

    }
  }
}