import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public titulo;
  public backButton: boolean;
  public users;
  public estadoRed: boolean;
  loading: any;

  constructor(private dataService: DataService,
              private alertController: AlertController,
              private loadingController: LoadingController) {
    this.titulo = 'List - Sliding';
    this.backButton = true;
    this.estadoRed = true;
  }

  ngOnInit() {
    this.presentLoading();
    this.dataService.dataUser().subscribe(data => {
      this.users = data;
      console.log('data services', data);
      this.estadoRed = true;
      this.presentLoadingClose();
      this.presentAlert();
    }, error => {
      this.estadoRed = false;
      console.log('esto es un error');
      this.presentLoadingClose();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      // tslint:disable-next-line: max-line-length
      message: 'Deslice el item a la derecha y vea mas opciones,  o  mantenga presionado el icono a la derecha y arrastre para reordenar la lista',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando Datos...',
    });
    return this.loading.present();
  }

  presentLoadingClose() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 500);
  }

  detailUser(user) {
    console.log('datos del usuario seleccionado', user);
  }

  reorder(event) {
    console.log(event);
    const itemMover = this.users.splice(event.detail.from, 1)[0];
    this.users.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

}
