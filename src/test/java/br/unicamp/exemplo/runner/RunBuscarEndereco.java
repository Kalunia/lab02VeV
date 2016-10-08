package br.unicamp.exemplo.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.equalTo;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.junit.WireMockRule;

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
	public WireMockRule wireMockRule = new  WireMockRule(8089);
	
//	@BeforeClass
//	public static void runBeforeClass() {
//		wireMockServer = new WireMockServer(wireMockConfig().port(8089));
//		WireMock.configureFor(8089);
//		
//		wireMockServer.start();
//	}
//	
//	@AfterClass
//	public static void runAfterClass() {
//		wireMockServer.stop();
//	}
	
	@Test
	public void connect() {
		
		 stubFor(get(urlEqualTo("/get_cep"))
		            .withHeader("Accept", equalTo("text/xml"))
		            .willReturn(aResponse()
		                .withStatus(200)
		                .withHeader("Content-Type", "text/xml")
		                .withBody("<response>Some content</response>")));
		 
		 //assertThat(wireMockRule.get("/get_cep").statusCode(), is(200));
		 
	}
}
