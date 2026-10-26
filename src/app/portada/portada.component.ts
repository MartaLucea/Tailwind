import { Component } from '@angular/core';
import { Desplegable } from './desplegable/desplegable.component'; 

@Component({
  imports: [Desplegable],
  selector: 'app-portada',
  templateUrl: './portada.component.html',
})
export class Portada {}
