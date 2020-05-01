import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  dataUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  dataAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getListOption() {
     return this.http.get('/assets/data/ListOption.json');
  }

  getSuperHeroes() {
    return this.http.get('/assets/data/heroes.json').pipe(delay(2000));
  }
}
