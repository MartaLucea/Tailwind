import { Component } from '@angular/core';
import {NavComponent} from './nav/nav.component';

@Component({
  imports: [NavComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
