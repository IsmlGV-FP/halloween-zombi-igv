import { Component } from '@angular/core';
// Importante: importar los componentes desde @ionic/angular/standalone
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true, // <-- Recomendado indicar standalone: true
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    MonsterCardComponent // Tu tarjeta de la librería
  ]
})
export class Tab1Page {
  constructor() {}
}
