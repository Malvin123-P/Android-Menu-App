
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp,IonAvatar,IonImg, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, calculatorOutline, calculatorSharp, chatbubblesOutline, chatbubblesSharp, gridOutline, gridSharp, videocamOutline, videocamSharp} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink ,IonAvatar,IonImg, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Start', url: '/start', icon: 'home' },
    { title: 'Adding', url: '/adding', icon: 'calculator' },
    { title: 'Translator', url: '/translator', icon: 'chatbubbles' },
    { title: 'Board', url: '/board', icon: 'grid' },
    { title: 'Experience', url: '/experience', icon: 'videocam' },
    
  ];
  constructor() {
    addIcons({ homeOutline, homeSharp, calculatorOutline, calculatorSharp, chatbubblesOutline, chatbubblesSharp, gridOutline, gridSharp, videocamOutline, videocamSharp});
  }
}
