import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class VisualarSolicitacoesService {

  urlListarTodos = "http://localhost:8080/pedido/listarPedidos";
  urlListarPorId = "";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(`${this.urlListarTodos}`);
  } 

  listarPorId(pedido: Pedido) {
    return this.http.get<Pedido>(`${this.urlListarPorId + '/' + pedido.id}`);
  }

  deletar(id: string) {
    const options = {
      headers: Config.getHttpHeaders(),
    };

    const url = Config.deletarPedido + id;
    console.log(url);
    return this.http.delete(`${url}`, options);
  }
}
