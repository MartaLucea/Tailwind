import { Component, Input } from '@angular/core';
import { Personaje } from '../portada/personaje.model';


@Component({
  imports: [],
  selector: 'app-desplegable',
  standalone: true,
  templateUrl: './desplegable.component.html',
})

export class DesplegableComponent {
  @Input({ required: true }) personaje!: Personaje;
}