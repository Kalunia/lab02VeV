package br.unicamp.exemplo.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.getRequestedFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;
import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.mockito.Mock;
import org.mockito.Mockito;

import com.github.tomakehurst.wiremock.client.WireMock;
import com.github.tomakehurst.wiremock.testsupport.WireMockResponse;
import com.github.tomakehurst.wiremock.testsupport.WireMockTestClient;

import br.unicamp.bookstore.dao.Cep;
import br.unicamp.bookstore.dao.DadosDeEntregaDAO;
import br.unicamp.bookstore.domain.Produto;
import br.unicamp.bookstore.helper.JsonHelper;
import br.unicamp.bookstore.helper.XmlHelper;
import br.unicamp.exemplo.Calculadora;
import br.unicamp.exemplo.DadosEntregaDAO;
import br.unicamp.exemplo.Entrega;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static org.mockito.Matchers.anyInt;
import static org.mockito.Matchers.anyDouble;
import static org.mockito.Mockito.times;



public class CalcularFreteSteps {
	
	private Cep cep;
	private Produto produto;
	private Entrega entrega;
	private DadosEntregaDAO mock; 
    private Throwable throwable;
    private String urlMock;

    @Before
    public void setUp() {
    	mock = Mockito.mock(DadosEntregaDAO.class);
    	cep = new Cep(); 
    	produto = new Produto();
    	throwable = null;
    	entrega = new Entrega(mock);
    }
    
    // ------------------------------------ step 1 -------------------------------//
    @Given("^Eu tenho um cep para ser buscado$")
    public void eu_tenho_um_cep() {
    	assertNotNull(cep);
    }
    
    @And("^Eu tenho um produto$")
    public void eu_tenho_um_produto() {
    	assertNotNull(produto);
    }

	@When("^Eu envio \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" para os correios de entrega \"([^\"]*)\"$")
	public void eu_envio_cep(String cepDestino, String peso, String largura, String altura, 
			String comprimento, String tipo){
		
		this.urlMock = "/calcfrete/ws/xml/" + cepDestino + "/" + peso + "/" + largura + "/"
				+ altura + "/" + comprimento + "/" + tipo;
			
	}
	
	@Then("^o resultado deve ser \"([^\"]*)\" e \"([^\"]*)\" do frete$")
    public void o_resultado_deve_ser(String valor, String prazo) {
		WireMock.verify(0, getRequestedFor(urlMatching(this.urlMock)));
		WireMockTestClient testClient = new WireMockTestClient(8089);
		WireMockResponse response = testClient.get(this.urlMock);
		
		assertThat(response.content(), containsString("<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?><Servicos><cServico><Codigo>40010</Codigo><Valor>" + valor + "</Valor><PrazoEntrega>" + prazo + "</PrazoEntrega><ValorSemAdicionais>17,20</ValorSemAdicionais><ValorMaoPropria>0,00</ValorMaoPropria><ValorAvisoRecebimento>0,00</ValorAvisoRecebimento><ValorValorDeclarado>0,00</ValorValorDeclarado><EntregaDomiciliar>S</EntregaDomiciliar><EntregaSabado>S</EntregaSabado><Erro>0</Erro><MsgErro></MsgErro></cServico></Servicos>"));
		
		Mockito.verify(mock, times(1)).saveDadosDeEntrega(anyDouble(), anyInt());
	}
	
	//-------------------------------- step 1 -----------------------------//
	
	//-------------------------------- step 2 -----------------------------//
	@Given("^Eu tenho um determinado cep$")
    public void eu_tenho_um_determinado_cep() {
    	assertNotNull(cep);
    }
	
	@And("^Eu tenho um determinado produto$")
    public void eu_tenho_um_determinado_produto() {
    	assertNotNull(produto);
    }
	
	@When("^Eu envio um \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" para os correios de entrega \"([^\"]*)\"$")
	public void eu_envio_um_cep(String cepDestino, String peso, String largura, String altura, 
			String comprimento, String tipo){
		
		this.urlMock = "/calcfrete/ws/xml/" + cepDestino + "/" + peso + "/" + largura + "/"
				+ altura + "/" + comprimento + "/" + tipo;
			
	}
	
	@Then("^deve mostrar o error e perguntar por outro cep2$")
	public void devo_mostrar_erro() {
		containsString("ViaCep temporariamente fora de servico. Favor tentar mais tarde.");
	}
	//----------------------------- step 2 -----------------------------------------//
	
	//----------------------------- step 3 -----------------------------------------//
	
	@Given("^Eu tenho um cep2$")
    public void eu_tenho_um_cep2() {
    	assertNotNull(cep);
    }
    
    @And("^Eu tenho um produto2$")
    public void eu_tenho_um_produto2() {
    	assertNotNull(produto);
    }
    
    @When("^Eu envio um 13990000, 1, 1, 2, 2, para os correios de entrega tipo$")
	public void eu_envio_um_cep_erro(){
 
	}
    
    @Then("^deve mostrar o erro de indisponibilidade2$")
    public void devo_mostrar_erro_indis(String message) throws Throwable {
    	if (throwable == new Exception("ServiceUnvaliable")) {
    		assertThat(message, containsString("ViaCep temporariamente fora de servico. Favor tentar mais tarde."));
    	}
    }
	
}