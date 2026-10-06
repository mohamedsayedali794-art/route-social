import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Auth } from '../../../core/services/Auth/auth';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  imports: [ ReactiveFormsModule, CommonModule,NgClass ],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup implements OnInit {
  addUser!: any;
  signupForm!: FormGroup;
  Sabmitted = false;
  errorMsg !:string;
  successMsg !:string
  constructor(
    private fb: FormBuilder,
    private auth: Auth,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        dateOfBirth: [null],
        gender: [null],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  get f() {
    return this.signupForm.controls;
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { passwordMismatch: true };
  }

  register() {
   
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.Sabmitted = true;

    this.auth.Signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.addUser = res;
        this.signupForm.reset();
        this.successMsg = 'تم إنشاء الحساب بنجاح';
        this.Sabmitted = false;
      },
      error: (err) => {
        console.log(err);
         this.Sabmitted = false;
         this.errorMsg = err.error?.message || 'حصل خطأ، حاول تاني';
      },
    });

    
  }
}
