package com.senior.controlesolicitacao.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.senior.controlesolicitacao.model.Pedido;
import com.senior.controlesolicitacao.model.Solicitante;

@Service
public interface ControleSolicitacaoService {
  
	//Lista os pedidos ainda não aprovados pelo almoxarifado
	public List<Pedido> listarPedidosNaoAprovados();
	
	//Salva um pedido
	public Pedido salvar(Pedido pedido);
	
	//Lista todos os pedidos 
    public List<Pedido> listarPedidos();
    
    //Lista um pedido pelo identificador dele
    public Optional<Pedido> listarPedidoPorId(Integer id);
    
    public Pedido aprovar(Pedido pedido);
    
    public List<Pedido> buscarPorNaoAprovado();
    
    public void deletarPedido(Integer id);
    
    public Solicitante salvarSolicitante(Solicitante solicitante);
    
    public List<Solicitante> listarSolicitantesPorNome(String nomeSolicitante);
    
    public void deletarSolicitante(Integer Id);
    
    public List<Solicitante> listarSolicitantes();
	
}
