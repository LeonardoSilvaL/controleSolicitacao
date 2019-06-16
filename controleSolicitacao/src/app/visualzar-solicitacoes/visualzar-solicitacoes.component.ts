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
  pedido : Pedido;
  pedidoForm: any;

  constructor(private formBuilder: FormBuilder, private visualizarSolicitacoes: VisualarSolicitacoesService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.visualizarSolicitacoes.listar()
      .subscribe(dados => this.pedidos = dados);
  }

}
