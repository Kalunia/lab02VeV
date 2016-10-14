package br.unicamp.bookstore.xml;

public class CServico {
	
	private int codigo;
	private String valor;
	private String prazoEntrega;
	private String valorMaoPropria;
	private String valorAvisoRecebimento;
	private String valorValorDeclarado;
    private String entregaDomiciliar;
    private String entregaSabado;
    private String erro;
    private String msgErro;
    private String valorSemAdicionais;
    private String obsFim;
    
    public CServico(){
    	
    }


	public CServico (int codigo, String erro, String msgErro) {
		this.codigo = codigo;	
		this.erro = erro;
		this.msgErro = msgErro;
	}
	
	public CServico(int codigo, String valor, String prazoEntrega,
			String valorMaoPropria, String valorAvisoRecebimento,
			String valorValorDeclarado, String entregaDomiciliar,
			String entregaSabado, String erro, String msgErro,
			String valorSemAdicionais, String obsFim) {
		this.codigo = codigo;
		this.valor = valor;
		this.prazoEntrega = prazoEntrega;
		this.valorMaoPropria = valorMaoPropria;
		this.valorAvisoRecebimento = valorAvisoRecebimento;
		this.valorValorDeclarado = valorValorDeclarado;
		this.entregaDomiciliar = entregaDomiciliar;
		this.entregaSabado = entregaSabado;
		this.erro = erro;
		this.msgErro = msgErro;
		this.valorSemAdicionais = valorSemAdicionais;
		this.obsFim = obsFim;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getPrazoEntrega() {
		return prazoEntrega;
	}

	public void setPrazoEntrega(String prazoEntrega) {
		this.prazoEntrega = prazoEntrega;
	}

	public String getValorMaoPropria() {
		return valorMaoPropria;
	}

	public void setValorMaoPropria(String valorMaoPropria) {
		this.valorMaoPropria = valorMaoPropria;
	}

	public String getValorAvisoRecebimento() {
		return valorAvisoRecebimento;
	}

	public void setValorAvisoRecebimento(String valorAvisoRecebimento) {
		this.valorAvisoRecebimento = valorAvisoRecebimento;
	}

	public String getValorValorDeclarado() {
		return valorValorDeclarado;
	}

	public void setValorValorDeclarado(String valorValorDeclarado) {
		this.valorValorDeclarado = valorValorDeclarado;
	}

	public String getEntregaDomiciliar() {
		return entregaDomiciliar;
	}

	public void setEntregaDomiciliar(String entregaDomiciliar) {
		this.entregaDomiciliar = entregaDomiciliar;
	}

	public String getEntregaSabado() {
		return entregaSabado;
	}

	public void setEntregaSabado(String entregaSabado) {
		this.entregaSabado = entregaSabado;
	}

	public String getErro() {
		return erro;
	}

	public void setErro(String erro) {
		this.erro = erro;
	}

	public String getMsgErro() {
		return msgErro;
	}

	public void setMsgErro(String msgErro) {
		this.msgErro = msgErro;
	}

	public String getValorSemAdicionais() {
		return valorSemAdicionais;
	}

	public void setValorSemAdicionais(String valorSemAdicionais) {
		this.valorSemAdicionais = valorSemAdicionais;
	}

	public String getObsFim() {
		return obsFim;
	}

	public void setObsFim(String obsFim) {
		this.obsFim = obsFim;
	}
    
    
}