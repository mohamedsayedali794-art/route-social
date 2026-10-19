import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth {


    constructor(private http:HttpClient ,private router:Router){}

    Signup(formdata:object){
     return  this.http.post(`${environment.baseURL}/users/signup`,formdata)
    }

    login(data:any){
        return this.http.post(`${environment.baseURL}/users/signin`,data)
    }

    SignOut(){
        this.router.navigate(['/login']);
        localStorage.removeItem('token');
        localStorage.removeItem('user')
    }
}
