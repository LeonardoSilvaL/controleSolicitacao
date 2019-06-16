import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class SolicitarPilhaService {
  
  urlSolicitarItem = "http://localhost:8080/pedido/salvar";

  constructor(private http: HttpClient) { }

  solicitarPilha(pedido: Pedido){
    return this.http.post<Pedido>(`${this.urlSolicitarItem}`, pedido);
  }
}
