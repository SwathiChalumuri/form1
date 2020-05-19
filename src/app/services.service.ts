import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  // public subject: Subject<any>;
  constructor(public http: HttpClient) {
    // this.subject = new Subject();
   }

  postData(obj){
    return this.http.post('https://sheltered-ocean-02973.herokuapp.com/api/user/', obj);
  }
}
