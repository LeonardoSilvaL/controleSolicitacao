package com.senior.controlesolicitacao.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.senior.controlesolicitacao.model.Solicitante;
import com.senior.controlesolicitacao.service.ControleSolicitacaoService;

@RestController
@RequestMapping("/solicitante")
public class SolicitanteController {

	@Autowired
	ControleSolicitacaoService service;
	
	@CrossOrigin
	@RequestMapping(value="/listarSolicitante", method=RequestMethod.GET)
	public List<Solicitante> listarSolicitante(){
		System.out.println(geraNomeClasseParaLog() + " - Listando solicitantes");
	    List<Solicitante> solicitantes = service.listarSolicitantes();
		return solicitantes;
	}
	
	@CrossOrigin
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/salvarSolicitante")
	public Solicitante salvarSolicitante(@RequestBody Solicitante solicitante) {
		System.out.println(solicitante.toString());
	    System.out.println(geraNomeClasseParaLog() + " - Salvando soclicitante");
		return service.salvarSolicitante(solicitante);
	}
	
	@CrossOrigin
	@RequestMapping(value="/deletarSolicitante/{id}", method=RequestMethod.DELETE)
	public void deletarSolicitante(@PathParam("id") Integer id) {
		System.out.println(this.geraNomeClasseParaLog() + " - Deletando solicitante");
		this.service.deletarSolicitante(id);
	}
	
	private String geraNomeClasseParaLog() {
		return this.getClass().getSimpleName();
	}
	
}
