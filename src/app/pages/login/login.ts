
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/Auth/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule,CommonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {

Loading!:FormGroup
submitted =false
errorMsg !:string;
successMsg !:string

constructor(private fb:FormBuilder,private auth:Auth,private router:Router){
 
}

ngOnInit(): void {
   this.Loading = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
  })
}

get f(){
return  this.Loading.controls;
}

 onSubmit(){
  this.submitted=true
    if(this.Loading.invalid){
      this.Loading.markAllAsTouched();
    return
  }
  this.auth.login(this.Loading.value).subscribe({
    next:(res:any)=>{
      console.log(res);
       localStorage.setItem('token', res.data.token);
       localStorage.setItem('user',JSON.stringify(res.data.user));
       this.router.navigate(['/mainlayout/home']);
       this.successMsg= res.data.message
      this.Loading.reset();
      this.submitted=false
      
    },

    error:(err)=>{
      console.log(err);
       this.errorMsg = err.error?.message || 'حصل خطأ، حاول تاني';
      
    }
  })

  }




}