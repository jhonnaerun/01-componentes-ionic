import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  public date: Date = new Date();
  public customDate: Date = new Date();
  public customPickerOptions;
  public titulo: string;
  public backButton: boolean;

  constructor() {
    this.titulo = 'DateTime';
    this.backButton = true;
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Cancel',
        handler: () => console.log('Cancelo!!')
      }, {
        text: 'Ok',
        handler: (dateEvent) => {
          console.log('print date', dateEvent, 'Object: ');
        }
      }]
    };
  }

  cambioFecha(event) {
    console.log('Fecha: ', event.detail.value, 'Object: ', this.date);
  }


}
