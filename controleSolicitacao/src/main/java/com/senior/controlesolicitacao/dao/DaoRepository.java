package com.senior.controlesolicitacao.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senior.controlesolicitacao.model.Pedido;

public interface DaoRepository extends JpaRepository<Pedido, Integer>{
	
	public Pedido findByAprovado(Integer aprovado);

}
