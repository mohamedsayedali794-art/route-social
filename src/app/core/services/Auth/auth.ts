import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth {


    constructor(private http:HttpClient){}

    Signup(formdata:object){
     return  this.http.post(`${environment.baseURL}/users/signup`,formdata)
    }

    login(data:any){
        return this.http.post(`${environment.baseURL}/users/signin`,data)
    }

    getMovies():Observable<any>{
        return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US")
    }



}
// 