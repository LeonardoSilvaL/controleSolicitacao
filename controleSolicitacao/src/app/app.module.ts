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

const appRoutes: Routes = [
  { path: 'solicitar-pilha', component: SolicitarPilhaComponent },
  { path: 'visualizar-pedidos', component: VisualzarSolicitacoesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SolicitarPilhaComponent,
    VisualzarSolicitacoesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SolicitarPilhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
