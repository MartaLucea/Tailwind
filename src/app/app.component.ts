import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { PERSONAJES } from './personajes';
import { PortadaComponent } from './portada/portada.component';
import { DesplegableComponent } from './desplegable/desplegable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
    DesplegableComponent
  ],
  templateUrl: './app.component.html',
})

export class AppComponent {
  personajes = PERSONAJES;
  selectedPersonajeId?: string;

  get selectedPersonaje(){
    return this.personajes.find((personaje) => personaje.id === this.selectedPersonajeId);
  }

  onSelectPersonaje(id: string) {
    this.selectedPersonajeId = id;
  }

}
