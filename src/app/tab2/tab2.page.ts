import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent]
})
export class Tab2Page {
  // Manejador del evento emitido por el @Output()
  onMonstruoSeleccionado(nombreMonstruo: string) {
    alert(`¡Has pulsado en la tarjeta: ${nombreMonstruo}!`);
  }
}
