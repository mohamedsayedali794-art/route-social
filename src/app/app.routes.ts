import { Routes } from '@angular/router';
import { Authlayout } from './layouts/authlayout/authlayout';
import { Login } from './layouts/authlayout/login/login';
import { Signup } from './layouts/authlayout/signup/signup';
import { Mainlayout } from './layouts/mainlayout/mainlayout';
import { Home } from './layouts/mainlayout/home/home';
import { Profile } from './layouts/mainlayout/profile/profile';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {path:'authlayout',component:Authlayout,children:[
        {path:'login',component:Login,title:'Route-social|login'},
        {path:'signup',component:Signup,title:'Route-social|signup'},
        { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]},
   {
  path: 'mainlayout',
  component: Mainlayout,
  canActivate: [authGuard],
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Route-social|home' },
    { path: 'profile', component: Profile, title: 'Route-social|profile' },
  ]
}
];
