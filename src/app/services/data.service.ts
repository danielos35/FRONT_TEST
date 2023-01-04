import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) {
    http;
  }

  getData(cedula:string):Observable<any>{
    return this.http.get(`${environment.BPROSYSA_API}?cedula=${cedula}`);
  }
}
