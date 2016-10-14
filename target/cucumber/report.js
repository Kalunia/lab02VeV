$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalcularFrete.feature");
formatter.feature({
  "line": 1,
  "name": "CalcularFrete",
  "description": "Como usuário, quero buscar o frete e o tempo de entrega previsto",
  "id": "calcularfrete",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Buscar frete",
  "description": "",
  "id": "calcularfrete;buscar-frete",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Eu tenho uma calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Eu envio \u003ccep_destino\u003e, \u003cpeso\u003e, \u003clargura\u003e, \u003caltura\u003e, \u003ccomprimento\u003e para os correios de entrega \u003ctipo\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser \u003cfrete\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "calcularfrete;buscar-frete;",
  "rows": [
    {
      "cells": [
        "peso",
        "largura",
        "altura",
        "comprimento",
        "tipo",
        "frete"
      ],
      "line": 11,
      "id": "calcularfrete;buscar-frete;;1"
    },
    {
      "cells": [
        "0.5",
        "0.05",
        "0.5",
        "0.6",
        "PAC",
        "10"
      ],
      "line": 12,
      "id": "calcularfrete;buscar-frete;;2"
    },
    {
      "cells": [
        "1",
        "0.1",
        "0.57",
        "0.65",
        "SEDEX",
        "15"
      ],
      "line": 13,
      "id": "calcularfrete;buscar-frete;;3"
    },
    {
      "cells": [
        "1.5",
        "0.2",
        "0.7",
        "0.7",
        "SEDEX 10",
        "20"
      ],
      "line": 14,
      "id": "calcularfrete;buscar-frete;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37357,
  "status": "passed"
});
formatter.before({
  "duration": 27530,
  "status": "passed"
});
formatter.before({
  "duration": 26150,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Buscar frete",
  "description": "",
  "id": "calcularfrete;buscar-frete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Eu tenho uma calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Eu envio \u003ccep_destino\u003e, 0.5, 0.05, 0.5, 0.6 para os correios de entrega PAC",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser 10",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalcularFreteSteps.eu_tenho_uma_calculadora()"
});
formatter.result({
  "duration": 6184132,
  "status": "passed"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "duration": 30662,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 33662,
  "status": "passed"
});
formatter.before({
  "duration": 19416,
  "status": "passed"
});
formatter.before({
  "duration": 16903,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Buscar frete",
  "description": "",
  "id": "calcularfrete;buscar-frete;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Eu tenho uma calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Eu envio \u003ccep_destino\u003e, 1, 0.1, 0.57, 0.65 para os correios de entrega SEDEX",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser 15",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalcularFreteSteps.eu_tenho_uma_calculadora()"
});
formatter.result({
  "duration": 24588,
  "status": "passed"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "duration": 28790,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 33793,
  "status": "passed"
});
formatter.before({
  "duration": 19290,
  "status": "passed"
});
formatter.before({
  "duration": 16163,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Buscar frete",
  "description": "",
  "id": "calcularfrete;buscar-frete;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Eu tenho uma calculadora",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Eu envio \u003ccep_destino\u003e, 1.5, 0.2, 0.7, 0.7 para os correios de entrega SEDEX 10",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser 20",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalcularFreteSteps.eu_tenho_uma_calculadora()"
});
formatter.result({
  "duration": 21520,
  "status": "passed"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "duration": 19788,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 50693,
  "status": "passed"
});
formatter.before({
  "duration": 17618,
  "status": "passed"
});
formatter.before({
  "duration": 14109,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Fluxo alternativo A",
  "description": "",
  "id": "calcularfrete;fluxo-alternativo-a",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Eu tenho o cpf",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Eu envio cep para correios",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Eu envio [\"erro1\", \"erro2\", \"erro3\", \"erro4\"] para os correios de entrega \"erro5\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "deve mostrar o erro com a mensagem:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "Favor corrigir os dados"
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BuscarEnderecoSteps.deve_mostrar_erro_com_a_mensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 27400,
  "status": "passed"
});
formatter.before({
  "duration": 16425,
  "status": "passed"
});
formatter.before({
  "duration": 11446,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Fluxo alternativo B",
  "description": "",
  "id": "calcularfrete;fluxo-alternativo-b",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Eu tenho o cpf",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Eu tenho erros no cadastro",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "deve mostrar o erro com a mensagem:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 31,
    "value": "Favor corrigir os dados"
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BuscarEnderecoSteps.deve_mostrar_erro_com_a_mensagem(String)"
});
formatter.result({
  "status": "skipped"
});
});