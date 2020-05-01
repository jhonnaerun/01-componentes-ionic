import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  public titulo: string;
  public backButton: boolean;

  constructor() {
    this.titulo = 'Grid';
    this.backButton = true;
  }

  ngOnInit() {
  }

}
