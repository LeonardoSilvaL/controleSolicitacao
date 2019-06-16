import { TestBed } from '@angular/core/testing';

import { VisualarSolicitacoesService } from './visualar-solicitacoes.service';

describe('VisualarSolicitacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisualarSolicitacoesService = TestBed.get(VisualarSolicitacoesService);
    expect(service).toBeTruthy();
  });
});
