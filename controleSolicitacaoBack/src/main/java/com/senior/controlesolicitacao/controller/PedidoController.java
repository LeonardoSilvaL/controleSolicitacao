package com.senior.controlesolicitacao.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.senior.controlesolicitacao.model.Pedido;
import com.senior.controlesolicitacao.service.ControleSolicitacaoService;

@RestController
@CrossOrigin(allowCredentials = "false", origins = "*", allowedHeaders="header1,header2",exposedHeaders="header1")
public class PedidoController {
	
	@Autowired
	ControleSolicitacaoService service;
	
	@RequestMapping(value= "/pedido/listarPedidos", method= RequestMethod.GET)
	public List<Pedido> listarPedidos(){
		System.out.println(geraNomeClasseParaLog() + " - Listando pedidos");
		List<Pedido> pedidos =  service.listarPedidos();
		
		for (Pedido pedido : pedidos) {
			System.out.println(pedido.getId());
		}
		
		return pedidos;
	}
	
	@CrossOrigin(exposedHeaders="testheader")
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/pedido/salvar")
	public Pedido salvarPedido(Pedido pedido) {
		System.out.println(geraNomeClasseParaLog() + " - Salvando pedido");
		return service.salvar(pedido);
	}
	
	@RequestMapping(value= "/pedido/listarPorId/{id}")
	public Optional<Pedido> listarPedidoPorId(@PathVariable Integer id) {
		System.out.println(geraNomeClasseParaLog() + " Listando pedido " + id);
		return service.listarPedidoPorId(id);
	}
	
	@RequestMapping(value = "pedido/aprovar")
	public Pedido aprovar(@RequestBody Pedido pedido) {
	  System.out.println(geraNomeClasseParaLog() + " Aprovando solicitação " + pedido.getId());
	  return service.aprovar(pedido);
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/pedido/buscarPorNaoAprovados")
	public List<Pedido> buscarPorNaoAprovados() {
		System.out.println(geraNomeClasseParaLog() + " - Salvando pedido");
		return service.buscarPorNaoAprovado();
	}

	
	private String geraNomeClasseParaLog() {
		return this.getClass().getSimpleName();
	}
	
}
