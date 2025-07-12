import { Routes } from '@angular/router';
import { AboutComponent } from './static_app/about/about.component';
import { App } from './app';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: App }
];