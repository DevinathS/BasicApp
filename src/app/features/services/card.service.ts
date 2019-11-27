import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }
  getCardData(){
    return this.http.get<Observable<any>>('./assets/data/card.json')
  }
}
