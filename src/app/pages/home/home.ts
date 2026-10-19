import { Component } from '@angular/core';
import { Rightsidebar } from './rightsidebar/rightsidebar';
import { Content } from './content/content';
import { Leftsidebar } from './leftsidebar/leftsidebar';


@Component({
  imports: [Rightsidebar,Content,Leftsidebar],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
