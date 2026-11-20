import { Component } from '@angular/core';
// Importante: importar los componentes desde @ionic/angular/standalone
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent ]
})
export class Tab2Page {
  constructor() {}
}