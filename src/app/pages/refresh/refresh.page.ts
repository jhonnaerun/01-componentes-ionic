import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {
  public titulo;
  public backButton: boolean;
  public items = [];

  constructor() {
    this.titulo = 'ion Refresh';
    this.backButton = true;
  }

  ngOnInit() {
  }

  refresh(event) {
    console.log(this.items);
    setTimeout(() => {
      this.items = Array(20);
      event.detail.complete();
    }, 500);
    console.log(this.items);
  }

}
