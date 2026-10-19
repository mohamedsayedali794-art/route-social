import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-mainlayout',
  styleUrl: './mainlayout.css',
  templateUrl: './mainlayout.html',
})
export class Mainlayout {}
