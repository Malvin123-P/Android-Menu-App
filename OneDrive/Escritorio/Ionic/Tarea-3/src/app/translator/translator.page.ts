import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonInput, IonItem, IonCardContent, IonCardSubtitle, IonButton, IonToolbar, IonButtons, IonCardHeader, IonCard, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
  standalone: true,
  imports: [IonHeader, FormsModule, IonItem, IonInput, IonToolbar, IonCardContent, IonCardSubtitle, IonButton, IonCardHeader, IonCard, IonButtons, IonMenuButton, IonTitle, IonContent],
})

export class TranslatorPage implements OnInit {
  public translator!: string;
  private activatedRoute = inject(ActivatedRoute);

  public adding: string | null = null; // Initialize as null
  numero: number | null = null; // Initialize as null
  resultado: string = " -";

  traducir() {
    if (this.numero === null) return; // Check if 'numero' is null and return if true

    const unidades = ["", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"];
    const decenas = ["", "Diez", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];
    const especiales = ["Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis", "Diecisiete", "Dieciocho", "Diecinueve"];
    const centenas = ["", "Cien", "Doscientos", "Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos"];

    if (this.numero <= 1000) {
      if (this.numero === 1000) {
        this.resultado = "Mil";
        return;
      }

      let tempNumero = this.numero; // Usar una variable temporal
      let resultado = "";

      if (tempNumero >= 100) {
        resultado += centenas[Math.floor(tempNumero / 100)];
        tempNumero %= 100;
        if (tempNumero > 0) {
          resultado += " ";
        }
      }

      if (tempNumero >= 20) {
        resultado += decenas[Math.floor(tempNumero / 10)];
        tempNumero %= 10;
        if (tempNumero > 0) {
          resultado += " y ";
        }
      }

      if (tempNumero > 10 && tempNumero < 20) {
        resultado += especiales[tempNumero - 11];
      } else {
        resultado += unidades[tempNumero];
      }

      this.resultado = resultado;
    }
  }

  ngOnInit() {
    this.translator = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}

