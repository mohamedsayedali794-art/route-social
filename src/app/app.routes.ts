import { Routes } from '@angular/router';
import { Authlayout } from './layouts/authlayout/authlayout';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Mainlayout } from './layouts/mainlayout/mainlayout';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { authGuard } from './core/guards/auth-guard';
import { Notifications } from './layouts/mainlayout/notifications/notifications';
import { NotFound } from './shared/components/not-found/not-found';
import { gusetGuard } from './core/guards/guset-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'authlayout',component:Authlayout,canActivate:[gusetGuard],children:[
        {path:'login',component:Login,title:'Route-social|login'},
        {path:'signup',component:Signup,title:'Route-social|signup'},
        
    ]},
   {
  path: 'mainlayout',
  component: Mainlayout,
  canActivate: [authGuard],
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Route-social|home' },
    { path: 'profile', component: Profile, title: 'Route-social|profile' },
    { path: 'Notifications', component: Notifications, title: 'Route-social|Notifications' },
    
    
  ]
},
{ path: '**', component: NotFound, title: 'Route-social|page404' }

];
