import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  template: `
  <div>
    <app-card></app-card>
    <app-card/>
  </div>
  <router-outlet />
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex-angular';
}
