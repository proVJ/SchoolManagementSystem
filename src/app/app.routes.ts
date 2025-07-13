import { Routes } from '@angular/router';
import { AboutComponent } from './static_app/about/about.component';
import { App } from './app';
import { CourcesComponent } from './static_app/cources/cources.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CourcesComponent },    
    { path: '', component: App }
];