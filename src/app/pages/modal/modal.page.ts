import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListPage } from '../list/list.page';
import { ModalInfoPage } from './modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public titulo;
  public backButton: boolean;
  public nombre;
  public telefono;

  constructor(private modalCtrl: ModalController) {
    this.titulo = 'Modal page';
    this.backButton = true;
  }

  ngOnInit() {
  }

   async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        name: this.nombre,
        phone: this.telefono
      }
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log('info del modal', data);
    this.initCampos();
  }

  initCampos() {
    this.nombre = '';
    this.telefono = '';
  }

}
