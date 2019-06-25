import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SolicitarPilhaService {

  constructor(private http: HttpClient) { }

  solicitarPilha(pedido: Pedido){
    let options = {
      headers: Config.getHttpHeaders(),
    };

    return this.http.post<Pedido>(`${Config.SolicitarItem}`, pedido, options);
  }
}
