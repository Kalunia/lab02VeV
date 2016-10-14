package br.unicamp.exemplo.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.getRequestedFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;
import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import com.github.tomakehurst.wiremock.client.WireMock;
import com.github.tomakehurst.wiremock.testsupport.WireMockResponse;
import com.github.tomakehurst.wiremock.testsupport.WireMockTestClient;

import br.unicamp.bookstore.dao.Cep;
import br.unicamp.bookstore.helper.JsonHelper;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscarEnderecoSteps {

    private Cep cep;
    private Throwable throwable;
    private String urlMock;
    
    @Before
    public void setUp() {
    	cep = new Cep();
    	throwable = null;
    }
    
    @Given("^Eu tenho um cep$")
    public void eu_tenho_um_cep() throws Throwable {
        assertNotNull(cep);
    }
    
    @Given("^Viacep esta indisponivel$")
    public void viacep_esta_indisponivel() throws Throwable {
    	throwable = new Exception("ServiceUnvaliable");
    }
    
    @When("^Eu envio \"([^\"]*)\" para os correios$")
    public void eu_envio_cep_para_os_correios(String cep) throws Throwable {
    	this.urlMock = "/viacep/ws/" + cep + "/json";
    }

    @Then("^o resultado deve ser \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void o_resultado_deve_ser(String endereco, String logradouro, 
    		String complemento, String bairro, String localidade, String uf, 
    		String unidade, String ibge, String gia) throws Throwable {
    	
    	WireMock.verify(0, getRequestedFor(urlMatching(this.urlMock)));
		WireMockTestClient testClient = new WireMockTestClient(8089);
		WireMockResponse response = testClient.get(this.urlMock);
		
		assertThat(response.content(), containsString(JsonHelper.buildJson(
				endereco, logradouro, complemento, bairro, localidade, uf, unidade,
				ibge, gia)));
    }
    
    @Then("^deve mostrar o \"([^\"]*)\" e perguntar por outro cep$")
    public void deve_mostrar_e_perguntar_por_outro_cep(String error) throws Throwable {
    	
    	WireMock.verify(0, getRequestedFor(urlMatching(this.urlMock)));
		WireMockTestClient testClient = new WireMockTestClient(8089);
		WireMockResponse response = testClient.get(this.urlMock);
		
		assertThat(response.content(), containsString(error));
    }
    
    @Then("^deve mostrar o erro de indisponibilidade:$")
	public void deve_mostrar_erro_de_indisponibilidade(String message) throws Throwable {
    	if (throwable == new Exception("ServiceUnvaliable")) {
    		assertThat(message, containsString("ViaCep temporariamente fora de servico. Favor tentar mais tarde."));
    	}
    }
}
