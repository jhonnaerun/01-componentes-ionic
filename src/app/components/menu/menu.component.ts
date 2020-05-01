import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/listOption';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public listItem: Componente;

  constructor(private dataServices: DataService) {
    this.getListMenu();
   }

  ngOnInit() {}

  /**
   *  Servicio para obtener el menu
   */
  getListMenu() {
    this.dataServices.getListOption().subscribe((data: any) => {
      this.listItem = data;
    });
  }

}
