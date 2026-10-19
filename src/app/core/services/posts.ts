import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Posts {

    header:object={
            headers:{
                'AUTHORIZATION':`Bearer ${localStorage.getItem('token')}`
            }
        }
    constructor(private http:HttpClient){}

    getallPosts():Observable<any>{
     return this.http.get(`${environment.baseURL}/posts`,this.header)
    }


    creatPost(data:object):Observable<any>{
     return   this.http.post(`${environment.baseURL}/posts`,data,this.header)
    }


    getSinglepost(PostId:string):Observable<any>{
        return this.http.get(`${environment.baseURL}/posts/${PostId}`,this.header)
    }


    deletePost(PostId:string):Observable<any>{
        return this.http.delete(`${environment.baseURL}/posts/${PostId}`,this.header)

    }





}
