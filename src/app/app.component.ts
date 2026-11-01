import { Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { PERSONAJES } from './personajes';
import { PortadaComponent } from './portada/portada.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
    BiografiaComponent,
    HeroComponent
],
  templateUrl: './app.component.html',
})

export class AppComponent {
  personajes = PERSONAJES;
  selectedPersonajeId?: string;

  onSelectPersonaje(id: string) {
    this.selectedPersonajeId = id;
  }

}
