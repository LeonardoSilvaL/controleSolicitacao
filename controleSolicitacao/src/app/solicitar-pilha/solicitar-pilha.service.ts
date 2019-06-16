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
    const headers = new HttpHeaders();

    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
    headers.set("Access-Control-Max-Age", "3600");
    headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    headers.set("Access-Control-Expose-Headers", "Location");

    return this.http.post<Pedido>(this.urlSolicitarItem, pedido, {headers: headers});
  }
}
