import { Component , input, output} from '@angular/core';
import { Personaje } from './personaje.model';


@Component({
  imports: [],
  selector: 'app-portada',
  templateUrl: './portada.component.html',
})
export class PortadaComponent {
  personaje = input.required<Personaje>();
  select = output<string>();
  selected = input.required<boolean>();

  get imagePath(): string {
    return `assets/gris.jpg`
    //return `assets/personajes/` + this.personaje().img
  }

  onSelectPersonaje(){
    this.select.emit(this.personaje().id)
  }
}

