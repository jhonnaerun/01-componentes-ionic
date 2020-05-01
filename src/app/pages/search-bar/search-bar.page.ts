import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  public titulo;
  public backButton: boolean;
  public albums = [];
  public busqueda: string;

  constructor(private dataServices: DataService) {
    this.titulo = 'Search Bar';
    this.backButton = true;
  }

  ngOnInit() {
    this.cargarAlbums();
  }

  buscar(event) {
    console.log('busqueda', event.detail.value);
    this.busqueda = event.detail.value;
  }

  /**
   * funcion que consume el servicio data albums
   */
  cargarAlbums() {
    this.dataServices.dataAlbums().subscribe((data: any) => {
      this.albums = data;
    });
  }

}
