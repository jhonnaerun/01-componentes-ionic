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

  cambioRange(event) {
    this.porcentaje = event.detail.value / 100;
  }

}
