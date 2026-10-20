
import { AfterViewInit, Component, input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Auth } from '../../../core/services/Auth/auth';
import { CommonModule } from '@angular/common';


@Component({
  imports: [RouterLink, RouterLinkActive,CommonModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements AfterViewInit {

  
  constructor(private auth : Auth){}
   flag= input.required<boolean>()
 
    ngAfterViewInit(): void {
    initFlowbite();
  }


  LogOut(){
   this.auth.SignOut();
  }
}
