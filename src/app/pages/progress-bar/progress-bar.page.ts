import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  public titutlo;
  public backButton: boolean;
  public porcentaje;

  constructor() {
    this.titutlo = 'Progress Bar';
    this.backButton = true;
  }

  ngOnInit() {
  }

  /**
   * cambia el porcentaje para manejo del progress-bar, que funciona con valores de 0 a 1w
   */
  cambioRange(event) {
    this.porcentaje = event.detail.value / 100;
  }

}
