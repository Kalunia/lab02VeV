package br.unicamp.exemplo.runner;

import com.github.tomakehurst.wiremock.junit.WireMockClassRule;
import org.junit.ClassRule;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.exemplo.steps",
        features = "classpath:features/ConsultarStatusEntrega.feature"
)

public class RunVerificarStatusEntrega {

    // Wiremock: inicializacao
    @ClassRule public static WireMockClassRule wireMockRule = new WireMockClassRule(8888);

}