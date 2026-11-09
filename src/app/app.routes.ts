import { Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { PersonajesComponent } from './personajes/personajes.component';

export const routes: Routes = [
    {
        path: '',
        component: HeroComponent,
        pathMatch: 'full',
    },
    {
        path: 'biografia',
        component: BiografiaComponent,
    },
    {
        path: 'personajes',
        component: PersonajesComponent,
    }
];
