import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  public titulo: string;
  public backButton: boolean;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.titulo = 'Fab Button';
    this.backButton = true;
  }

  async onCLick(boton) {
    const alert = await this.alertController.create({
      header: 'Push in',
      message: boton,
      buttons: ['OK']
    });
    await alert.present();
  }

}
