package br.unicamp.exemplo;

import br.unicamp.bookstore.dao.DadosDeEntregaDAO;

public class Calculadora {
	private int result;
	private DadosDeEntregaDAO dao;
	
	public Calculadora(DadosDeEntregaDAO dao) {
		this.dao = dao;
	}
	
    public void add(int arg1, int arg2) {
        result = arg1 + arg2;
    }
    
    public void multiply(int arg1, int arg2) {
        result = arg1 * arg2;
    }


    public int getResult() {
        return result;
    }

	public void divide(int arg1, int arg2) {
		result = arg1 / arg2;
	}

}
