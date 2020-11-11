package com.senior.controlesolicitacao.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.senior.controlesolicitacao.model.Solicitante;

public interface SolicitanteDaoRepository extends JpaRepository<Solicitante, Integer>{
}
