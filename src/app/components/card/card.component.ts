import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  name: string = 'Charmander'
  @Input()
  img: string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea37168f-58bf-43ec-b98d-f15c62f681dd/den2g7o-9ac2996c-ad1a-4a3e-a68b-c2e548d90727.png/v1/fill/w_500,h_711/ryu__street_fighter_ii_battle_sprite__by_l_dawg211_den2g7o-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzExIiwicGF0aCI6IlwvZlwvZWEzNzE2OGYtNThiZi00M2VjLWI5OGQtZjE1YzYyZjY4MWRkXC9kZW4yZzdvLTlhYzI5OTZjLWFkMWEtNGEzZS1hNjhiLWMyZTU0OGQ5MDcyNy5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1r8GBr0kzFuq4R0WVbrgOsEti3DYR3kbEkiN4siX7bQ'
  @Input()
  type: string[] = ['Fire','Thunder']


}
