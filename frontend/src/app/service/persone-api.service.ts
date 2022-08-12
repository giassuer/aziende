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

  editPersona(id : number, p_nome : string, p_cognome : string, p_mail : any) : Observable<any>{
    return this.http.put<any>(`${this.apiUrl}persone/${id}`,
    {
      persona_nome : p_nome,
      persona_cognome : p_cognome,
      persona_mail : p_mail
    });
  }
  showPersona(id: number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}persone/${id}`)
  }
}
