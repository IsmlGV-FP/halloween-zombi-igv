import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  templateUrl: './monster-card.html',
  styleUrl: './monster-card.css',
  standalone: true,
  template: `
    <div style="border: 2px solid purple; padding: 10px;">
      <h2>{{ nombre }}</h2>
      <p>{{ frasePresentacion }}</p>
      <p>{{ texto }}</p>
    </div>
  `
})
export class MonsterCardComponent {
  @Input() fotoPrincipal = '';
  @Input() nombre = 'Sin nombre';
  @Input() frasePresentacion = '';
  @Input() texto = '';
}