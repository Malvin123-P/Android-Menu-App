import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader, IonCard, IonThumbnail, IonCardContent, IonCardSubtitle, IonCardHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
  IonItem, IonLabel, IonList, IonInput, IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-adding',
  templateUrl: './adding.page.html',
  styleUrls: ['./adding.page.scss'],
  standalone: true,
  imports: [
    FormsModule, IonCard, IonThumbnail, IonCardContent, IonHeader, IonToolbar, IonList, IonButtons, IonMenuButton, IonTitle, IonCardSubtitle, IonCardHeader, IonContent,
    IonItem, IonLabel, IonInput, IonButton
  ],
})
export class AddingPage implements OnInit {
  public adding: string | null = null;
  numero1: number | null = null; // Initialize as null
  numero2: number | null = null; // Initialize as null
  sum: number | null = null;

  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  resultado: string = " -";

  sumar() {
    this.resultado = (Number(this.numero1) + Number(this.numero2)).toString(); // Convert to numbers and calculate
  }

  ngOnInit() {
    this.adding = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.adding) {
      console.log("ID from route:", this.adding);
    } else {
      console.log("No ID found in route.");
    }
  }

  calculateSum() {
    this.sum = Number(this.numero1) + Number(this.numero2);
  }
}
