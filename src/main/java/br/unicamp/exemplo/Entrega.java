package br.unicamp.exemplo;

public class Entrega {
	private Double valor;
	private Integer prazo;
	private DadosEntregaDAO dao;
	
	public Entrega(DadosEntregaDAO dao) {
		this.dao = dao;
	}
	
	public Double getValor() {
		return valor;
	}


	public void setValor(Double valor) {
		this.valor = valor;
	}


	public Integer getPrazo() {
		return prazo;
	}


	public void setPrazo(Integer prazo) {
		this.prazo = prazo;
	}


	public void save() {
		dao.saveDadosDeEntrega(valor, prazo);
	}
	
	
}
