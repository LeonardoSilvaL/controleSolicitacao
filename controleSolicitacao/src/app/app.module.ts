import { CadastroSolicitanteService } from './cadastro-solicitante/cadastro-solicitante.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitarPilhaComponent } from './solicitar-pilha/solicitar-pilha.component';
import { SolicitarPilhaService } from './solicitar-pilha/solicitar-pilha.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { VisualzarSolicitacoesComponent } from './visualzar-solicitacoes/visualzar-solicitacoes.component';
import { VisualarSolicitacoesService } from './visualzar-solicitacoes/visualar-solicitacoes.service';
import { AceitarSolicitacaoComponent } from './aceitar-solicitacao/aceitar-solicitacao.component';
import { AceitarSolicitacaoService } from './aceitar-solicitacao/aceitar-solicitacao.service';
import { CadastroSolicitanteComponent } from './cadastro-solicitante/cadastro-solicitante.component';

const appRoutes: Routes = [
  { path: 'solicitar-pilha', component: SolicitarPilhaComponent },
  { path: 'visualizar-pedidos', component: VisualzarSolicitacoesComponent},
  { path: 'aceitar-solicitacao', component: AceitarSolicitacaoComponent},
  { path: 'cadastro-solicitante', component: CadastroSolicitanteComponent} 
];


@NgModule({
  declarations: [
    AppComponent,
    SolicitarPilhaComponent,
    VisualzarSolicitacoesComponent,
    AceitarSolicitacaoComponent,
    CadastroSolicitanteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SolicitarPilhaService, VisualarSolicitacoesService, AceitarSolicitacaoService, CadastroSolicitanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
