import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AziendeApiService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAziende() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}azienda`);
  }

  editAziende(data: any) : Observable<any>{
        
    return this.http.put<any>(`${this.apiUrl}azienda/${data.id}`,data);
  }
  showAziende(id: number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}azienda/${id}`)
  }
}
