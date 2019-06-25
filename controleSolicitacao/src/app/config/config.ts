import { HttpHeaders, HttpParams } from '@angular/common/http';

const baseUrl = "http://localhost:8080/pedido"

const httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
}

export class Config {
    static listarTodosUrl       = baseUrl + "/listarPedidos";
    static listarNaoAprovadoUrl = baseUrl + "/buscarPorNaoAprovados";
    static aprovar              = baseUrl + "/aprovar";
    static SolicitarItem        = baseUrl + "/salvar";

    static getOptions() {
        return httpOptions;
    }

    static getHttpHeaders(): HttpHeaders {
        return new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');
    }
}
