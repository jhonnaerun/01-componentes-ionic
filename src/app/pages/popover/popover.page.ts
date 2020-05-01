import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopInfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: true, // false no permite cerrar el pop sin interaccion previa
      translucent: true
    });

    await popover.present();

    const {data} = await popover.onWillDismiss(); // onDidDismiss al cerrarse, onWillDismiss antes de cerrarse
    console.log('item', data);
  }

}
