import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/listOption';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public titulo;
  public backButton: boolean;
  public listItem: Componente[];

  constructor(private dataServices: DataService) {
    this.titulo = 'Home';
    this.backButton = false;
    this.initList();
  }

  initList() {
    this.dataServices.getListOption().subscribe((data: any) => {
      this.listItem = data;
    });
  }

}
