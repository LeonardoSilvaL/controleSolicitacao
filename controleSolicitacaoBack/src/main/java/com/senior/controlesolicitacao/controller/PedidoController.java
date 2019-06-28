package com.senior.controlesolicitacao.controller;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("/pedido")
public class PedidoController {
	
	@Autowired
	ControleSolicitacaoService service;
	
	@CrossOrigin
	@RequestMapping(value="/listarPedidos", method=RequestMethod.GET)
	public List<Pedido> listarPedidos(){
		System.out.println(geraNomeClasseParaLog() + " - Listando pedidos");
		return service.listarPedidos();
	}
	
	@CrossOrigin
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/salvar")
	public Pedido salvarPedido(@RequestBody Pedido pedido) {
		System.out.println(geraNomeClasseParaLog() + " - Salvando pedido");
		return service.salvar(pedido);
	}
	
	@CrossOrigin
	@GetMapping("/listarPorId/{id}")
	public Optional<Pedido> listarPedidoPorId(@PathVariable("id") Integer id) {
		System.out.println(geraNomeClasseParaLog() + " Listando pedido " + id);
		return service.listarPedidoPorId(id);
	}
	
	@CrossOrigin
	@PostMapping("/aprovar")
	public Pedido aprovar(@RequestBody Pedido pedido) {
	  System.out.println(geraNomeClasseParaLog() + " Aprovando solicitação " + pedido.getId());
	  return service.aprovar(pedido);
	}
	
	@CrossOrigin
	@RequestMapping(value="/buscarPorNaoAprovados", method=RequestMethod.GET)
	public List<Pedido> buscarPorNaoAprovados() {
		System.out.println(geraNomeClasseParaLog() + " - Salvando pedido");
		return service.buscarPorNaoAprovado();
	}
	
	@CrossOrigin
	@RequestMapping(value="/deletarSolicitacao/{id}", method=RequestMethod.DELETE)
	public void deletarPedido(@PathParam("id") Integer id) {
		System.out.println(geraNomeClasseParaLog() + " - Deletando pedido " + id);
		service.deletarPedido(id);
	}

	
	private String geraNomeClasseParaLog() {
		return this.getClass().getSimpleName();
	}
	
}
