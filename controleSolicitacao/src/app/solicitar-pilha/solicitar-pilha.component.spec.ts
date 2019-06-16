import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarPilhaComponent } from './solicitar-pilha.component';

describe('SolicitarPilhaComponent', () => {
  let component: SolicitarPilhaComponent;
  let fixture: ComponentFixture<SolicitarPilhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarPilhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarPilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
