import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<> {
    return this._http.get(this._albumUrl);
  }

  

}
