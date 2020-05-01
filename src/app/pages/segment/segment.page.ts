import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  public titulo;
  public backButton: boolean;
  public heros = [];
  public array = Array(20);
  public segmento;

  constructor(private dataServices: DataService) {
    this.titulo = 'Segment';
    this.backButton = true;
  }

  ngOnInit() {
    this.getSuperHeroes();
  }

  /**
   * consume el servicio getSuperHeroes
   */
  getSuperHeroes() {
    this.dataServices.getSuperHeroes().subscribe((data: any) => {
      console.log(data);
      this.heros = data;
    });
  }

  /**
   * cambio de segmento para enviar al pipe
   */
  segmentChanged(event) {
    this.segmento = event.detail.value;
    if (this.segmento === 'Todos') {
      this.segmento = undefined;
    }
  }

}
