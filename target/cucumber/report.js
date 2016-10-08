$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuscarEndereco.feature");
formatter.feature({
  "line": 1,
  "name": "BuscarEndereco",
  "description": "Como sistema, quero validar um CEP e buscar o endereço \ncorrespondente através do serviço dos Correios",
  "id": "buscarendereco",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Buscar endereco",
  "description": "",
  "id": "buscarendereco;buscar-endereco",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Eu tenho um cep",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Eu envio \u003ccep\u003e para os correios",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser \u003caddress\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "buscarendereco;buscar-endereco;",
  "rows": [
    {
      "cells": [
        "cep",
        "address"
      ],
      "line": 11,
      "id": "buscarendereco;buscar-endereco;;1"
    },
    {
      "cells": [
        "13087-450",
        "\u0027Rua das Margaridas\u0027"
      ],
      "line": 12,
      "id": "buscarendereco;buscar-endereco;;2"
    },
    {
      "cells": [
        "13990-000",
        "\u0027\u0027"
      ],
      "line": 13,
      "id": "buscarendereco;buscar-endereco;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1040979,
  "status": "passed"
});
formatter.before({
  "duration": 432813,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Buscar endereco",
  "description": "",
  "id": "buscarendereco;buscar-endereco;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Eu tenho um cep",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Eu envio 13087-450 para os correios",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser \u0027Rua das Margaridas\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuscarEnderecoSteps.eu_tenho_um_cep()"
});
formatter.result({
  "duration": 118794430,
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
  "duration": 95760,
  "status": "passed"
});
formatter.before({
  "duration": 52277,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Buscar endereco",
  "description": "",
  "id": "buscarendereco;buscar-endereco;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Eu tenho um cep",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Eu envio 13990-000 para os correios",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o resultado deve ser \u0027\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuscarEnderecoSteps.eu_tenho_um_cep()"
});
formatter.result({
  "duration": 35496,
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
  "duration": 57776,
  "status": "passed"
});
formatter.before({
  "duration": 42383,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Fluxo alternativo A",
  "description": "",
  "id": "buscarendereco;fluxo-alternativo-a",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Eu tenho um cep",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Eu envio \u0027teste_erro\u0027 para os correios",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "deve mostrar o erro com a mensagem:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 19,
    "value": "Favor corrigir os dados"
  }
});
formatter.match({
  "location": "BuscarEnderecoSteps.eu_tenho_um_cep()"
});
formatter.result({
  "duration": 71786,
  "status": "passed"
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