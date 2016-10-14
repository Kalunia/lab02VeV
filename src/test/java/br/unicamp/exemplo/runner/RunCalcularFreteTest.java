package br.unicamp.exemplo.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.runner.RunWith;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
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
	public WireMockRule wireMockRule = new  WireMockRule(8089);
	
	@BeforeClass
	public static void runBeforeClass() {
		wireMockServer = new WireMockServer(wireMockConfig().port(8089));
		WireMock.configureFor(8089);
		
		wireMockServer.start();
	}
	
	@AfterClass
	public static void runAfterClass() {
		wireMockServer.stop();
	}
	
}
