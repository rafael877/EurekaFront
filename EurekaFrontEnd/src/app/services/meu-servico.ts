import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {

  private apiUrl = 'http://127.0.0.1:8000/api/empresas/'; 

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
