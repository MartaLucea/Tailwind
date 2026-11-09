import { Component } from '@angular/core';
import {NavComponent} from './nav/nav.component';
import { RouterLink } from '@angular/router';


@Component({
  imports: [NavComponent, RouterLink],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
