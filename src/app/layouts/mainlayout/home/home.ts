import { Auth } from './../../../core/services/Auth/auth';
import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../../../core/models/movie';


@Component({
  imports: [Navbar,ReactiveFormsModule],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  allMovies !: Movie[];

  constructor(private auth:Auth){}

  ngOnInit(): void {
    this.getMovies();
  }

   getMovies(){
    this.auth.getMovies().subscribe({
      next:(response:any)=>{ 
        console.log('Response:', response);
        console.log('Results:', response.results);
        this.allMovies = response.results
           console.log('Movies:', this.allMovies);
      },

      error:(error:any)=>{
        console.log(error);
        
      }
    })
   }




}
