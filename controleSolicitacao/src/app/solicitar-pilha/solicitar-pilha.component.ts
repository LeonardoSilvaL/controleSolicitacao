import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import {FormBuilder, Validators} from '@angular/forms';
import { SolicitarPilhaService } from './solicitar-pilha.service';

@Component({
  selector: 'app-solicitar-pilha',
  templateUrl: './solicitar-pilha.component.html',
  styleUrls: ['./solicitar-pilha.component.css']
})
export class SolicitarPilhaComponent implements OnInit {

  pedido: Pedido;
  pedidoForm: any;
  showMsg: boolean = false;

  constructor(private formBuilder: FormBuilder, private solicitacaoPilhasService: SolicitarPilhaService) { }

  ngOnInit() {
    this.pedidoForm = this.formBuilder.group({
      Id: [-1],
      nomeSolicitante: ['', Validators.required],
      descricaoItem: ['', Validators.required],
      valorItem: ['', Validators.required],
      aprovado: [-1]
    });
  }

  solicitarItem(){
    return this.solicitacaoPilhasService.solicitarPilha(this.pedido);
  }

  onSubmit(){
    this.pedido = this.pedidoForm.Value;
    this.solicitarItem().
      subscribe(dados => {
        this.pedido = dados
        this.showMsg = true;
      });
  }

}
