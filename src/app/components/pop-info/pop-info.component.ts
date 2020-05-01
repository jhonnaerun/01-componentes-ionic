import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent implements OnInit {
  public items = Array(5);

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {}

  itemSelect(item) {
    this.popCtrl.dismiss({
      item
    });
  }

}
