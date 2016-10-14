package br.unicamp.bookstore.xml;

import java.util.List;

public class CResultado {

	private List<Servicos> servicos;

	public CResultado() {

	}
	
	public CResultado(List<Servicos> servicos) {
		this.servicos = servicos;
	}

	public List<Servicos> getServicos() {
		return servicos;
	}

	public void setServicos(List<Servicos> servicos) {
		this.servicos = servicos;
	}

}