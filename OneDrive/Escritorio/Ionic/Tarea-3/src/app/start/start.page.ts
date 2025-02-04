import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IonCard,IonImg,  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [ IonCard,IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})

export class StartPage implements OnInit {
  public start!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.start = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
