package br.unicamp.exemplo.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.assertj.core.api.Assertions;

import br.unicamp.bookstore.domain.Produto;
import br.unicamp.exemplo.Calculadora;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.mockito.Mockito.*;
import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.junit.WireMockRule;
import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class CalcularFreteSteps {
	
	private Calculadora calculadora;
	private Produto produto;
    private Throwable throwable;

    @Before
    public void setUp() {
    	calculadora = new Calculadora(); 
    	produto = new Produto();
    	throwable = null;
    }
    
    @Given("^Eu tenho uma calculadora$")
	public void eu_tenho_uma_calculadora(){
    	assertNotNull(calculadora);
	}

    @And("^Eu tenho algum produto no carrinho$")
    public void i_sum_with() throws Throwable {
    	assertNotNull(produto);
    }

	@When("^Eu envio <cep_destino>, <peso>, <largura>, <altura>, <comprimento> para os correios de entrega <tipo>$")
	public void eu_envio_cep(String cepDestino, String peso, String largura, String altura, String comprimento, String tipo){
	
		stubFor(get(urlMatching("/calculador/CalcPrecoPrazo.aspx"))
			.withQueryParam("nVlPeso",        equalTo(peso))
			.withQueryParam("nVlComprimento", equalTo(comprimento))
			.withQueryParam("nVlAltura",      equalTo(altura))
			.withQueryParam("nVlLargura",     equalTo(largura))
			.withQueryParam("nVlAltura",      equalTo(altura))
			.withQueryParam("sCepOrigem",     equalTo("13990000"))
			.withQueryParam("sCepDestino",    equalTo(cepDestino))
			.withQueryParam("nCdServico",     equalTo(tipo))
			.willReturn(aResponse()
					.withHeader("Content-Type", "application/xml")
					.withStatus(200)
					.withBody("<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?><Servicos><cServico><Codigo>40010</Codigo><Valor>17,20</Valor><PrazoEntrega>1</PrazoEntrega><ValorSemAdicionais>17,20</ValorSemAdicionais><ValorMaoPropria>0,00</ValorMaoPropria><ValorAvisoRecebimento>0,00</ValorAvisoRecebimento><ValorValorDeclarado>0,00</ValorValorDeclarado><EntregaDomiciliar>S</EntregaDomiciliar><EntregaSabado>S</EntregaSabado><Erro>0</Erro><MsgErro></MsgErro></cServico></Servicos>")
					));
		
			
	}

	@Then("^o resultado deve ser <frete>$")
	public void o_resultado_deve_ser_frete(){
	// Write code here that turns the phrase above into concrete actions

	}

}