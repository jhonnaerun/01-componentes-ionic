import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  public titulo;
  public backButton: boolean;
  public nombre: string;
  public usuario = {
    email: '',
    clave: ''
  };

  constructor() {
    this.titulo = 'Inputs - Forms';
    this.backButton = true;
  }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('User', this.usuario);
  }

}
