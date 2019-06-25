import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AceitarSolicitacaoService {

  constructor(private http: HttpClient) { }

  listarNaoAprovados() {
    let options = {
      headers: Config.getHttpHeaders(),
    };

    return this.http.get<Pedido[]>(`${Config.listarNaoAprovadoUrl}`, options);
  }

  aprovar(pedido: Pedido) {
    let options = {
      headers: Config.getHttpHeaders()
    };

    return this.http.post<Pedido>(`${Config.aprovar}`, pedido, options);
  }

}
