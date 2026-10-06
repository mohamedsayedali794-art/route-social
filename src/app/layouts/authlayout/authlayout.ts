import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  selector: 'app-authlayout',
  styleUrl: './authlayout.css',
  templateUrl: './authlayout.html',
})
export class Authlayout {

  stats = [
  { value: '2012', label: 'Founded' },
  { value: '40K+', label: 'Graduates' },
  { value: '50+', label: 'Partner companies' },
  { value: '5', label: 'Branches' },
  { value: '20', label: 'Diplomas available' },
];
}
