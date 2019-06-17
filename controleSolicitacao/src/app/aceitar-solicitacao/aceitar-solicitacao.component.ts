import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import { AceitarSolicitacaoService } from './aceitar-solicitacao.service';

@Component({
  selector: 'app-aceitar-solicitacao',
  templateUrl: './aceitar-solicitacao.component.html',
  styleUrls: ['./aceitar-solicitacao.component.css']
})
export class AceitarSolicitacaoComponent implements OnInit {

  pedido: Pedido;
  pedidoForm: any;
  pedidos: Array<Pedido>;

  constructor(private aceitarSolicitacaoService: AceitarSolicitacaoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.aceitarSolicitacaoService.listarNaoAprovados()
    .subscribe(dados => this.pedidos = dados);
  }

  onAprovar(u: any) {
      this.pedido = u;  
      this.pedido.aprovado = 1;
      this.aceitarSolicitacaoService.aprovar(this.pedido);
  }

  onReprovar(u: any) {
    this.pedido = u;  
    this.pedido.aprovado = 0;
    this.aceitarSolicitacaoService.aprovar(this.pedido);
}

}
