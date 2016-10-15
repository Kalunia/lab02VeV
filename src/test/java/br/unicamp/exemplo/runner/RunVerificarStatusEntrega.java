package br.unicamp.exemplo.runner;

import com.github.tomakehurst.wiremock.junit.WireMockClassRule;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.ClassRule;
import org.junit.runner.RunWith;

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