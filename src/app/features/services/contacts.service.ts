import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }
  
  getContactList(){
    return this.http.get<Observable<any>>('./assets/data/contacts.json')
  }
}
