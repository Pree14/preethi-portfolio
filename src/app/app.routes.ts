import { Routes } from '@angular/router';
import { Home } from './componenets/home/home';
import { About } from './componenets/about/about';
import { Experience } from './componenets/experience/experience';
import { Projects } from './componenets/projects/projects';
import { Contact } from './componenets/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '/home' }
];
