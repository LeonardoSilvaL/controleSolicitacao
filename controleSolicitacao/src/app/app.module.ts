import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const appRoutes: Routes = [
  { path: 'solicitar-pilha', component: SolicitarPilhaComponent },
  { path: 'visualizar-pedidos', component: VisualzarSolicitacoesComponent},
  { path: 'aceitar-solicitacao', component: AceitarSolicitacaoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SolicitarPilhaComponent,
    VisualzarSolicitacoesComponent,
    AceitarSolicitacaoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SolicitarPilhaService, VisualarSolicitacoesService, AceitarSolicitacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
