package br.unicamp.bookstore.dao;

public interface DadosDeEntregaDAO {

	public void saveDadosDeEntrega(Double valorFrete, Integer diasEntrega);
	public void saveError(String msgErro);
	
}

