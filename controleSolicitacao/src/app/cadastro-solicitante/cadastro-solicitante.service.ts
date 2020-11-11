import { Config } from './../config/config';
import { Solicitante } from './../model/solicitante';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroSolicitanteService {

  constructor(private httpClient: HttpClient) { }

  listarSolicitantes() {
    return this.httpClient.get<Solicitante[]>(`${Config.listarSolicitantes}`);
  }

  deletarSolicitante(id: string) {
    const options = {
      headers: Config.getHttpHeaders(),
    };

    const url = Config.deletarSolicitante + id;
    return this.httpClient.delete(`${url}`, options);
  }

  salvarSolicitante (s: Solicitante) {
    const options = {
      headers: Config.getHttpHeaders(),
    };

    return this.httpClient.post<Solicitante>(`${Config.salvarSolicitante}`, s, options);
  }
}
