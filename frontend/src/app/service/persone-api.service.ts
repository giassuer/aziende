import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class personeApiService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getpersone() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}persone`);
  }
}
