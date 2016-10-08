package br.unicamp.exemplo.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.assertj.core.api.Assertions;

import br.unicamp.bookstore.dao.Cep;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscarEnderecoSteps {

    private Cep cep;
    private Throwable throwable;
    
    @Before
    public void setUp() {
    	cep = new Cep();
    	throwable = null;
    }
    
    @Given("^Eu tenho um cep$")
    public void eu_tenho_um_cep() throws Throwable {
        assertNotNull(cep);
    }
    
    @When("^Eu envio (\\s+) para os correios$")
    public void eu_envio_(String cep) throws Throwable {
    	
    }
    
    @Then("^deve mostrar o erro com a mensagem:$")
	public void deve_mostrar_erro_com_a_mensagem(String message){
	   Assertions.assertThat(throwable).isNotNull().hasMessage(message);
	}
}
