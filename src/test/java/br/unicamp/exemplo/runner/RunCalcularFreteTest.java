package br.unicamp.exemplo.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.runner.RunWith;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.client.WireMock.equalTo;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.junit.WireMockRule;
import com.github.tomakehurst.wiremock.client.WireMock;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.exemplo.steps",
        features = "classpath:features/CalcularFrete.feature"
)

public class RunCalcularFreteTest {
	
	private static WireMockServer wireMockServer;

	@Rule
	public WireMockRule wireMockRule = new WireMockRule(8089);
	
	@BeforeClass
	public static void runBeforeClass(){
		wireMockServer = new WireMockServer(wireMockConfig().port(8089));
		configureFor(8089);
		wireMockServer.start(); 
		 
		stubFor(get(urlEqualTo("/calcfrete/ws/xml/13990000/1/1/1/1/40010"))
	                .willReturn(aResponse()
	                        .withHeader("Content-Type", "text/plain")
	                        .withBody("<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?><Servicos><cServico><Codigo>40010</Codigo><Valor>10</Valor><PrazoEntrega>5</PrazoEntrega><ValorSemAdicionais>17,20</ValorSemAdicionais><ValorMaoPropria>0,00</ValorMaoPropria><ValorAvisoRecebimento>0,00</ValorAvisoRecebimento><ValorValorDeclarado>0,00</ValorValorDeclarado><EntregaDomiciliar>S</EntregaDomiciliar><EntregaSabado>S</EntregaSabado><Erro>0</Erro><MsgErro></MsgErro></cServico></Servicos>")));
		
		stubFor(get(urlEqualTo("/calcfrete/ws/xml/13990055/1,5/1/1/1/40010"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?><Servicos><cServico><Codigo>40010</Codigo><Valor>17,20</Valor><PrazoEntrega>1</PrazoEntrega><ValorSemAdicionais>17,20</ValorSemAdicionais><ValorMaoPropria>0,00</ValorMaoPropria><ValorAvisoRecebimento>0,00</ValorAvisoRecebimento><ValorValorDeclarado>0,00</ValorValorDeclarado><EntregaDomiciliar>S</EntregaDomiciliar><EntregaSabado>S</EntregaSabado><Erro>-14</Erro><MsgErro></MsgErro></cServico></Servicos>")));
		
		
		stubFor(get(urlEqualTo("/calcfrete/ws/xml/99999.999/1/1/1/1/40010"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("<h2>Bad Request (400)</h2>")));
		
		stubFor(get(urlEqualTo("/calcfrete/ws/xml/99999999/1/1/1/1/40010"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody("{ erro: true }")));
		 
		 
	}
	
	@AfterClass
	public static void runAfterClass() {
		wireMockServer.stop();
	}
	
}
