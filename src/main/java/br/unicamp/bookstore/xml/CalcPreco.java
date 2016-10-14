package br.unicamp.bookstore.xml;

import java.util.ArrayList;
import java.util.List;


public class CalcPreco {

	private CResultado cResultado;
	
	public CalcPreco() {
		
	}
	
	public CalcPreco(CResultado cResultado) {
		this.cResultado = cResultado;
	}

	public CalcPreco(int codigo, String erro, String msgErro) {
		
		List<Servicos> servicos = new ArrayList<Servicos>();
		List<CServico> cServico = new ArrayList<CServico>();
		cServico.add(new CServico(codigo,  erro, msgErro));
		servicos.add(new Servicos(cServico));
		this.cResultado = new CResultado(servicos);
	}
	
	public CalcPreco(int codigo, String valor, String prazoEntrega,
			String valorMaoPropria, String valorAvisoRecebimento,
			String valorValorDeclarado, String entregaDomiciliar,
			String entregaSabado, String erro, String msgErro,
			String valorSemAdicionais, String obsFim) {
		
		List<Servicos> servicos = new ArrayList<Servicos>();
		List<CServico> cServico = new ArrayList<CServico>();
		cServico.add(new CServico(codigo, valor, prazoEntrega, valorMaoPropria, valorAvisoRecebimento, valorValorDeclarado, entregaDomiciliar, entregaSabado, erro, msgErro, valorSemAdicionais, obsFim));
		servicos.add(new Servicos(cServico));
		this.cResultado = new CResultado(servicos);
	}

	public CResultado getcResultado() {
		return cResultado;
	}

	public void setcResultado(CResultado cResultado) {
		this.cResultado = cResultado;
	}

}