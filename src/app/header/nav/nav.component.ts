import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  vertical = input(false);
}
