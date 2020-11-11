import { CadastroSolicitanteService } from './cadastro-solicitante.service';
import { Solicitante } from './../model/solicitante';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cadastro-solicitante',
  templateUrl: './cadastro-solicitante.component.html',
  styleUrls: ['./cadastro-solicitante.component.css']
})
export class CadastroSolicitanteComponent implements OnInit {

  solicitantes   : Array<Solicitante>;
  solicitante    : Solicitante;
  solicitanteForm: FormGroup;
  showMsg        = false;

  constructor(private solicitanteService: CadastroSolicitanteService, private formBuilder: FormBuilder)  { }

  ngOnInit() {
    this.solicitanteForm = this.formBuilder.group({
      Id: [-1],
      nomeSolicitante: ['', Validators.required],
      dataNasc       : ['', Validators.required]
    });

    this.listarSolicitantes();
  }

  listarSolicitantes() {
    this.solicitanteService.listarSolicitantes().
      subscribe(dados => this.solicitantes = dados);
  }

  deletarSolicitante(id: number) {
    return this.solicitanteService.deletarSolicitante(id.toString());
  }

  cadastrarSolicitante() {
    return this.solicitanteService.salvarSolicitante(this.solicitante);
  }

  getSolicitante(id: number) {
    for (let i = 0; i < this.solicitantes.length; ++i) {
      if (this.solicitantes[i].id === id) {
        return this.solicitantes[i];
      }
    }
  }

  onDelete(s: Solicitante) {
    alert(s.id.toString());
    this.deletarSolicitante(s.id).
      subscribe(dados => {
        this.listarSolicitantes();
      })
  }

  onSubmit() {
    if (!this.solicitanteForm.value.nomeSolicitante) {
      return;
    }
    
    this.solicitante = this.solicitanteForm.value;
    this.cadastrarSolicitante().
      subscribe(dados => {
        this.solicitante = dados;
        this.showMsg = true;
        this.listarSolicitantes();
      },
      error => {
        this.showMsg = false;
      });

    this.solicitanteForm.reset({
      id             : -1,
      nomeSolicitante: '',
      dataNasc       : '',
    });    
  }

  onEdit(id: number) {
    this.solicitante  = this.solicitante;
    if (this.solicitante === null) {
      return;
    }

    this.solicitanteForm.value.Id = this.solicitante.id;
    this.solicitanteForm.value.nomeSolicitante = this.solicitante.nomeSolicitante;
    this.solicitanteForm.value.dataNasc = this.solicitante.dataNasc;
  }

}
