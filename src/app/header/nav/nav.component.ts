import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  vertical = input(false);
}
