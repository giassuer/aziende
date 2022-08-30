import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContrattiApiService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getContratti() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}contratti`);
  }

  editContratti(data: any) : Observable<any>{
        
    return this.http.put<any>(`${this.apiUrl}contratti/${data.id}`,data);
  }
  showContratti(id: number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}contratti/${id}`)
  }
}
