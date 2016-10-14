package br.unicamp.bookstore.xml;

import java.util.List;

public class Servicos {

	private List<CServico> cServico;

	public Servicos(){
		
	}
	
	public Servicos(List<CServico> cServico) {
		this.cServico = cServico;
	}

	public List<CServico> getcServico() {
		return cServico;
	}

	public void setcServico(List<CServico> cServico) {
		this.cServico = cServico;
	}
	
}