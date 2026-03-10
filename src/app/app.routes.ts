import { Routes } from '@angular/router';
import { Home } from './componenets/home/home';
import { About } from './componenets/about/about';
import { Experience } from './componenets/experience/experience';
import { Projects } from './componenets/projects/projects';
import { Contact } from './componenets/contact/contact';
import { Education } from './componenets/education/education';
import { Skills } from './componenets/skills/skills';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: About },
    { path: 'experience', component: Experience },
    { path: 'skills', component: Skills },
    { path: 'education', component: Education},
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '/about' }
];
