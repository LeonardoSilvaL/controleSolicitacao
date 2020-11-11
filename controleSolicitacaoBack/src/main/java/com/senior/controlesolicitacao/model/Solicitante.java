package com.senior.controlesolicitacao.model;

import java.sql.Date;
import java.text.SimpleDateFormat;

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
@Table(name = "solicitante")
@DynamicInsert
@DynamicUpdate
public class Solicitante {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nomeSolicitante;
	private Date   dataNasc;
	
	public Integer getId() {
		return this.id;
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
	
	public Date getDataNasc() {
		return dataNasc;
	}
	
	public void setDataNasc(Date dataNasc) {
		this.dataNasc = dataNasc;
	}
	
	public String toString() {
	  SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	  return "Nome: " + this.nomeSolicitante + " Data Nasc: " + sdf.format(this.dataNasc); 
	}
}
