import { Component, OnInit, ViewChild, Directive} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {


  public titulo: string;
  public backButton: boolean;
  public items = Array(20);

  constructor() {
    this.titulo = 'infinite scroll';
    this.backButton = true;
   }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      if ( this.items.length < 60) {
        const nuevo = Array(20);
        this.items.push(...nuevo);
      }
      event.target.complete();
    }, 1000);
  }

}
