import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualzarSolicitacoesComponent } from './visualzar-solicitacoes.component';

describe('VisualzarSolicitacoesComponent', () => {
  let component: VisualzarSolicitacoesComponent;
  let fixture: ComponentFixture<VisualzarSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualzarSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualzarSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
