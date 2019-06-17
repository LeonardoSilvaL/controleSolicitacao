import { TestBed } from '@angular/core/testing';

import { AceitarSolicitacaoService } from './aceitar-solicitacao.service';

describe('AceitarSolicitacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AceitarSolicitacaoService = TestBed.get(AceitarSolicitacaoService);
    expect(service).toBeTruthy();
  });
});
