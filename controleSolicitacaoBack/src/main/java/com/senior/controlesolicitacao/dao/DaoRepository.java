package com.senior.controlesolicitacao.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.senior.controlesolicitacao.model.Pedido;

public interface DaoRepository extends JpaRepository<Pedido, Integer>{
	
	@Query("SELECT p FROM Pedido p WHERE p.aprovado = -1")
	public List<Pedido> findByAprovado();
}
