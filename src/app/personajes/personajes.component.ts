import { Component } from '@angular/core';
import { PERSONAJES } from '../personajes';
import { PortadaComponent } from '../portada/portada.component';


@Component({
  imports: [PortadaComponent],
  selector: 'app-personajes.component',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  personajes = PERSONAJES;
  selectedPersonajeId?: string;

  onSelectPersonaje(id: string) {
    this.selectedPersonajeId = id;
  }
}
