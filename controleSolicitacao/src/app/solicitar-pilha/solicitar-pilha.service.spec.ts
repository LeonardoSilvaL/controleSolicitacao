import { TestBed } from '@angular/core/testing';

import { SolicitarPilhaService } from './solicitar-pilha.service';

describe('SolicitarPilhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitarPilhaService = TestBed.get(SolicitarPilhaService);
    expect(service).toBeTruthy();
  });
});
