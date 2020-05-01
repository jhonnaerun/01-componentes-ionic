import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public emotion: boolean;

  constructor() {
    this.emotion = false;
  }

  ngOnInit() {
  }

  like() {
    this.emotion = !this.emotion;
    console.log('Like');
  }

}
