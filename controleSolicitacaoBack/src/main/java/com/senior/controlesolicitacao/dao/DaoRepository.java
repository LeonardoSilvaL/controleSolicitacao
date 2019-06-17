package com.senior.controlesolicitacao.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.senior.controlesolicitacao.model.Pedido;

public interface DaoRepository extends JpaRepository<Pedido, Integer>{
	
	@Query("SELECT * FROM PEDIDO WHERE APROVADO = 0")
	public List<Pedido> findByAprovado();

}
