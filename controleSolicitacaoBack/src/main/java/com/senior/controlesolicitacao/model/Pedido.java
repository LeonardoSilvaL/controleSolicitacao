package com.senior.controlesolicitacao.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "pedido")
@DynamicInsert
@DynamicUpdate
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nomeSolicitante;
	private String descricaoItem;
	private String valorItem;
	private Integer aprovado;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNomeSolicitante() {
		return nomeSolicitante;
	}
	public void setNomeSolicitante(String nomeSolicitante) {
		this.nomeSolicitante = nomeSolicitante;
	}
	public String getDescricaoItem() {
		return descricaoItem;
	}
	public void setDescricaoItem(String descricaoItem) {
		this.descricaoItem = descricaoItem;
	}
	public String getValorItem() {
		return valorItem;
	}
	public void setValorItem(String valorItem) {
		this.valorItem = valorItem;
	}
	
	public Integer getAprovado() {
		return this.aprovado;
	}
	
	public void setAprovado(Integer aprovado) {
		this.aprovado = aprovado;
	}
}
