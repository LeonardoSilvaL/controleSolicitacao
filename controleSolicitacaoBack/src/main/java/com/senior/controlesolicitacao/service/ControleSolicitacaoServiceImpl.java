package com.senior.controlesolicitacao.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senior.controlesolicitacao.dao.DaoRepository;
import com.senior.controlesolicitacao.model.Pedido;

@Service
public class ControleSolicitacaoServiceImpl implements ControleSolicitacaoService{
	
	@Autowired
	DaoRepository dao;

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

}
