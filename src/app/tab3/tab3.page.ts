import { Component } from '@angular/core';
// Importante: importar los componentes desde @ionic/angular/standalone
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent ]
})
export class Tab3Page {
  constructor() {}
}