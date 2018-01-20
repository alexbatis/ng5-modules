import { Routes } from '@angular/router';
import { HomeRootComponent } from './home-module/home-root/home-root.component';
import { ContentRootComponent } from './content-module/content-root/content-root.component';
import { AboutRootComponent } from './about-module/about-root/about-root.component';


export const ROUTES: Routes = [
    // home route
    { path: 'home', component: HomeRootComponent },
    { path: 'content', component: ContentRootComponent },
    { path: 'about', component: AboutRootComponent },
    // redirect to home when route does not exists (must be last route)
    { path: '**', redirectTo: 'home' }
];
