import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList, AlertController, LoadingController, ToastController } from '@ionic/angular';

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
              private loadingController: LoadingController,
              public toastController: ToastController) {
    this.titulo = 'List - Sliding';
    this.backButton = true;
    this.estadoRed = true;
  }

  ngOnInit() {
    this.presentLoading();
    // llamado servicio para cosultar la data
    this.dataService.dataUser().subscribe(data => {
      this.users = data;
      this.estadoRed = true;
      this.presentLoadingClose();
      this.presentAlert();
    }, error => {
      this.estadoRed = false;
      console.log('esto es un error');
      this.presentLoadingClose();
    });
  }

  /**
   * metodo que muestra un alert
   */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      // tslint:disable-next-line: max-line-length
      message: 'Deslice el item a la derecha y vea mas opciones,  o  mantenga presionado el icono a la derecha y arrastre para reordenar la lista',
      buttons: ['OK']
    });
    await alert.present();
  }

  /**
   * funcion que carga el loading
   */
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando Datos...',
    });
    return this.loading.present();
  }

  /**
   * funcion cierra el loading
   */
  presentLoadingClose() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 500);
  }

  /**
   * funcion detalle del usuario seleccionado
   */
  detailUser(user) {
    console.log('datos del usuario seleccionado', user);
    this.presentToast(user.name);
  }

  /**
   * funcion que boton eliminar, que implementa un ion-toast
   */
  trashClick() {
    console.log('trash');
    this.presentToastWithOptions();
  }

  /**
   * metodo que implementa el ion-reorder
   */
  reorder(event) {
    console.log(event);
    const itemMover = this.users.splice(event.detail.from, 1)[0];
    this.users.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

  /**
   * funcion que crea el ion-toast
   */
  async presentToast(name) {
    const toast = await this.toastController.create({
      message: 'seleccionaste información de' + name,
      duration: 2000
    });
    toast.present();
  }

  /**
   * funcion que crea un ion-toast con icono y funcionalidad
   */
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Eliminado',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'trash',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ],
      duration: 2000
    });
    toast.present();
  }

}
