import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class VisualarSolicitacoesService {

  urlListarTodos = "";
  urlListarPorId = "";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(`${this.urlListarTodos}`)
  } 

  listarPorId(pedido: Pedido) {
    return this.http.get<Pedido>(`${this.urlListarPorId + "/" + pedido.id}`);
  }
}
