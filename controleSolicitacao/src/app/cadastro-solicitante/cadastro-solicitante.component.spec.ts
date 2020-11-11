import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSolicitanteComponent } from './cadastro-solicitante.component';

describe('CadastroSolicitanteComponent', () => {
  let component: CadastroSolicitanteComponent;
  let fixture: ComponentFixture<CadastroSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
