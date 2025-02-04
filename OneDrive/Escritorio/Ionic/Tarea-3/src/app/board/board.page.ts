import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { IonCardTitle, IonThumbnail, IonHeader, IonInput, IonItem, IonLabel, IonButton, IonList, IonToolbar, IonCardContent, IonCardHeader, IonCard, IonCardSubtitle, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonThumbnail, IonCardTitle, IonList, IonLabel, IonButton, FormsModule, IonInput, IonToolbar, IonItem, IonCardContent, IonCardHeader, IonCard, IonCardSubtitle, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class BoardPage implements OnInit {
  public board!: string;
  private activatedRoute = inject(ActivatedRoute);

  numero: number = 0; // Inicializar como undefined
  Tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor() { }

  ngOnInit() {
    this.board = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
