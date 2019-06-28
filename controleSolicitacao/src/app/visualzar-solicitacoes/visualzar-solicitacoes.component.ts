import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import { FormBuilder } from '@angular/forms';
import { VisualarSolicitacoesService } from './visualar-solicitacoes.service';

@Component({
  selector: 'app-visualzar-solicitacoes',
  templateUrl: './visualzar-solicitacoes.component.html',
  styleUrls: ['./visualzar-solicitacoes.component.css']
})
export class VisualzarSolicitacoesComponent implements OnInit {

  pedidos: Array<Pedido>;
  pedido: Pedido;
  showModal = false;

  constructor(private visualizarSolicitacoes: VisualarSolicitacoesService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.visualizarSolicitacoes.listar()
      .subscribe(dados => this.pedidos = dados);
  }

  onClick(id: number) {
    this.showModal = true;
    this.pedido = this.getPedido(id);
  }

  getPedido(id: number): Pedido {
    for (let i = 0; i < this.pedidos.length; ++i) {
      if (this.pedidos[i].id === id) {
        return this.pedidos[i];
      }
    }
  }

  hide() {
    this.showModal = false;
  }

  deletar(id: string) {
    return this.visualizarSolicitacoes.deletar(id);
  }

  onDelete(id: string) {
    this.deletar(id)
      .subscribe(dados => {
        this.listar();
      });
  }

}
