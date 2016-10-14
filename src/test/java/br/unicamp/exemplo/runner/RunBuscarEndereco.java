package br.unicamp.exemplo.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.junit.WireMockRule;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.exemplo.steps",
        features = "classpath:features/BuscarEndereco.feature"
)

public class RunBuscarEndereco {
	
	private static WireMockServer wireMockServer;

	@Rule
	public WireMockRule wireMockRule = new WireMockRule(8089);
	
	@BeforeClass
	public static void runBeforeClass(){
		wireMockServer = new WireMockServer(wireMockConfig().port(8089));
		configureFor(8089);
		wireMockServer.start(); 
		 
		stubFor(get(urlEqualTo("/viacep/ws/01001000/json"))
	                .willReturn(aResponse()
	                        .withHeader("Content-Type", "text/plain")
	                        .withBody("{" +
	                                "cep: 01001-000," +
	                                "logradouro: Praca da Se," +
	                                "complemento: lado impar," +
	                                "bairro: Se," +
	                                "localidade: Sao Paulo," +
	                                "uf: SP," +
	                                "unidade: ''," +
	                                "ibge: 35503," +
	                                "gia: 1004" +
	                                "}")));
		
		stubFor(get(urlEqualTo("/viacep/ws/13087450/json"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("{" +
                                "cep: 13087-450," +
                                "logradouro: Rua das Margaridas," +
                                "complemento: ''," +
                                "bairro: Chacara Primavera," +
                                "localidade: Campinas," +
                                "uf: SP," +
                                "unidade: ''," +
                                "ibge: 3509502," +
                                "gia: 2446" +
                                "}")));
		
		stubFor(get(urlEqualTo("/viacep/ws/13990000/json"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("{" +
                                "cep: 13990-000," +
                                "logradouro: ''," +
                                "complemento: ''," +
                                "bairro: ''," +
                                "localidade: Espirito Santo do Pinhal," +
                                "uf: SP," +
                                "unidade: ''," +
                                "ibge: 3515186," +
                                "gia: 5307" +
                                "}")));
		
		stubFor(get(urlEqualTo("/viacep/ws/99999.999/json"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("<h2>Bad Request (400)</h2>")));
		
		stubFor(get(urlEqualTo("/viacep/ws/99999999/json"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("{ erro: true }")));
		 
		 
	}
	
	@AfterClass
	public static void runAfterClass() {
		wireMockServer.stop();
	}
}
