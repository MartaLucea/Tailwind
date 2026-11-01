import { Component, input, output } from '@angular/core';
import { Personaje } from './personaje.model';
import { DesplegableComponent } from '../desplegable/desplegable.component';

@Component({
  imports: [DesplegableComponent],
  selector: 'app-portada',
  templateUrl: './portada.component.html',
})
export class PortadaComponent {
  personaje = input.required<Personaje>();
  selected = input.required<boolean>();
  select = output<string>();

  onSelectPersonaje() {
    this.select.emit(this.personaje().id);
  }
}
