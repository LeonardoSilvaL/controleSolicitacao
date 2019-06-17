import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class AceitarSolicitacaoService {

  ListarNaoAprovadosUrl = "http://localhost:8080/pedido/buscarPorNaoAprovados";
  aprovarUrl = "http://localhost:8080/pedido/aprovar";

  constructor(private http: HttpClient) { }

  listarNaoAprovados() {
    return this.http.get<Pedido[]>(`${this.ListarNaoAprovadosUrl}`);
  }

  aprovar(pedido: Pedido) {
    return this.http.post<Pedido>(`${this.aprovarUrl}`, pedido);
  }
}
