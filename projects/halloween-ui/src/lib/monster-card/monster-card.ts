import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  templateUrl: './monster-card.html',
  styleUrls: ['./monster-card.css'],
  standalone: true,
  imports: []
})
export class MonsterCardComponent {
  @Input() fotoPrincipal = '';
  @Input() nombre = 'Sin nombre';
  @Input() frasePresentacion = '';
  @Input() texto = '';

  // Evento emitido hacia el componente padre
  @Output() seleccionar = new EventEmitter<string>();

  onBotonClick() {
    this.seleccionar.emit(this.nombre);
  }
}
