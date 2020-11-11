package com.senior.controlesolicitacao.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senior.controlesolicitacao.dao.DaoRepository;
import com.senior.controlesolicitacao.dao.SolicitanteDaoRepository;
import com.senior.controlesolicitacao.model.Pedido;
import com.senior.controlesolicitacao.model.Solicitante;

@Service
public class ControleSolicitacaoServiceImpl implements ControleSolicitacaoService{
	
	@Autowired
	DaoRepository dao;
	
	@Autowired
	SolicitanteDaoRepository daoSolicitante;

	@Override
	public List<Pedido> listarPedidosNaoAprovados() {
		return null;
	}

	@Override
	public Pedido salvar(Pedido pedido) {
		return dao.save(pedido);
	}

	@Override
	public List<Pedido> listarPedidos() {
		return dao.findAll();
	}

	@Override
	public Optional<Pedido> listarPedidoPorId(Integer id) {
		return dao.findById(id);
	}

	@Override
	public Pedido aprovar(Pedido pedido) {
		return dao.save(pedido);
		
	}

	@Override
	public List<Pedido> buscarPorNaoAprovado() {
		return dao.findByAprovado();
	}
	
	@Override
	public void deletarPedido(Integer id) {
		dao.deleteById(id);
	}

	@Override
	public Solicitante salvarSolicitante(Solicitante solicitante) {		
		return daoSolicitante.save(solicitante);
	}

	@Override
	public List<Solicitante> listarSolicitantesPorNome(String nomeSolicitante) {		
		return null;
	}

	@Override
	public void deletarSolicitante(Integer Id) {
		daoSolicitante.deleteById(Id);
		
	}

	@Override
	public List<Solicitante> listarSolicitantes() {
		return daoSolicitante.findAll();
	}

}
