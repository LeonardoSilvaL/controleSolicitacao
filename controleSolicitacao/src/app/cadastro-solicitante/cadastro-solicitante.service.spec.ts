import { TestBed } from '@angular/core/testing';

import { CadastroSolicitanteService } from './cadastro-solicitante.service';

describe('CadastroSolicitanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroSolicitanteService = TestBed.get(CadastroSolicitanteService);
    expect(service).toBeTruthy();
  });
});
