package br.unicamp.bookstore.helper;

import br.unicamp.bookstore.xml.CalcPreco;

public class XmlHelper {
	

	/**
	 * Cria e retorna um XML de sucesso para o metodo GET, de acordo com os parametros.
	 * @return <code>String</code> o corpo do XML.
	 */
	public static String getSuccessBody(String codigo, String valor, String prazoEntrega,
			String valorMaoPropria, String valorAvisoRecebimento,
			String valorValorDeclarado, String entregaDomiciliar,
			String entregaSabado, String erro, String msgErro,
			String valorSemAdicionais, String obsFim){
			
			CalcPreco calcPreco = new CalcPreco(Integer.parseInt(codigo), valor, prazoEntrega, valorMaoPropria, valorAvisoRecebimento, 
					valorValorDeclarado, entregaDomiciliar, entregaSabado, erro, msgErro, valorSemAdicionais, obsFim);
		
			return getSuccessBody(calcPreco);
	}
	
	/**
	 * Cria e retorna um XML de sucesso para o metodo GET, de acordo com os parametros.
	 * @return <code>String</code> o corpo do XML.
	 */
	public static String getSuccessBody(CalcPreco calcPreco){
		
		return   "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
				+ "<cResultado xmlns=\"http://tempuri.org/\">"
				+ "<Servicos>"
				+ "<cServico>"
				+ "<Codigo>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getCodigo() + "</Codigo>"
				+ "<Valor>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getValor() + "</Valor>"
				+ "<PrazoEntrega>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getPrazoEntrega() + "</PrazoEntrega>"
				+ "<ValorMaoPropria>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getValorMaoPropria() + "</ValorMaoPropria>"
				+ "<ValorAvisoRecebimento>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getValorAvisoRecebimento() + "</ValorAvisoRecebimento>"
				+ "<ValorValorDeclarado>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getValorValorDeclarado() + "</ValorValorDeclarado>"
				+ "<EntregaDomiciliar>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getEntregaDomiciliar() + "</EntregaDomiciliar>"
				+ "<EntregaSabado>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getEntregaSabado() + "</EntregaSabado>"
				+ "<Erro>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getErro() + "</Erro>"
				+ "<MsgErro>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getMsgErro() + "</MsgErro>"
				+ "<ValorSemAdicionais>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getValorSemAdicionais() + "</ValorSemAdicionais>"
				+ "<obsFim>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getObsFim() + "</obsFim>"
				+ "</cServico>"
				+ "</Servicos>"
				+ "</cResultado>";
	}
	
	/**
	 * Cria e retorna um XML de erro para o metodo GET, de acordo com os parametros.
	 * @return <code>String</code> o corpo do XML.
	 */
	public static String getErrorBody(String codigo, String erro, String msgErro){
		CalcPreco calcPreco = new CalcPreco(Integer.parseInt(codigo), erro, msgErro);
		
		return getErrorBody(calcPreco);
	}
		
	/**
	 * Cria e retorna um XML de erro para o metodo GET, de acordo com os parametros.
	 * @return <code>String</code> o corpo do XML.
	 */
	public static String getErrorBody(CalcPreco calcPreco){
		
		return  "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
				+ "<cResultado xmlns=\"http://tempuri.org/\">"
				+ "<Servicos>"
				+ "<cServico>"
				+ "<Codigo>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getCodigo() + "</Codigo>"
				+ "<Erro>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getErro() + "</Erro>"
				+ "<MsgErro>" + calcPreco.getcResultado().getServicos().get(0).getcServico().get(0).getMsgErro() + "</MsgErro>"
				+ "</cServico>"
				+ "</Servicos>"
				+ "</cResultado>";
	}
	
	/**
	 * Cria e retorna um XML para o metodo POST, de acordo com os parametros.
	 * @return <code>String</code> o corpo do XML.
	 */
	public static String postCalcPrecoPrazoBody(String nCdEmpresa, String sDsSenha, String nCdServico, String sCepOrigem, 
			String sCepDestino, String nVlPeso, String nCdFormato, String nVlComprimento, String nVlAltura, String nVlLargura, 
			String nVlDiametro, String sCdMaoPropria, String nVlValorDeclarado, String sCdAvisoRecebimento){
		
		return  "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
				+ "<CalcPrecoPrazo xmlns=\"http://tempuri.org/\">"
				+ "<nCdEmpresa>"+ nCdEmpresa +"</nCdEmpresa>"
				+ "<sDsSenha>" + sDsSenha + "</sDsSenha>"
				+ "<nCdServico>" + nCdServico + "</nCdServico>"
				+ "<sCepOrigem>" + sCepOrigem + "</sCepOrigem>"
				+ "<sCepDestino>" + sCepDestino + "</sCepDestino>"
				+ "<nVlPeso>" + nVlPeso + "</nVlPeso>"
				+ "<nCdFormato>" + nCdFormato + "</nCdFormato>"
				+ "<nVlComprimento>" + nVlComprimento + "</nVlComprimento>"
				+ "<nVlAltura>" + nVlAltura + "</nVlAltura>"
				+ "<nVlLargura>" + nVlLargura + "</nVlLargura>"
				+ "<nVlDiametro>" + nVlDiametro + "</nVlDiametro>"
				+ "<sCdMaoPropria>" + sCdMaoPropria + "</sCdMaoPropria>"
				+ "<nVlValorDeclarado>" + nVlValorDeclarado + "</nVlValorDeclarado>"
				+ "<sCdAvisoRecebimento>" + sCdAvisoRecebimento + "</sCdAvisoRecebimento>"
				+ "</CalcPrecoPrazo>";
	}
			
}
