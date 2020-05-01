import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input()  name;
  @Input() phone;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  /**
   * funcion que envia datos al modal padre
   */
  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: this.name + ' validado',
      telefono: this.phone + ' marcado'
    });
  }

  /**
   * cierra el modal
   */
  salirModal() {
    this.modalCtrl.dismiss();
  }

}
