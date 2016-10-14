$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalcularFrete.feature");
formatter.feature({
  "id": "calcularfrete",
  "description": "Como usuário, quero buscar o frete e o tempo de entrega previsto",
  "name": "CalcularFrete",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "calcularfrete;buscar-frete",
  "description": "",
  "name": "Buscar frete",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Eu tenho uma calculadora",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "Eu envio \u003ccep_destino\u003e, \u003cpeso\u003e, \u003clargura\u003e, \u003caltura\u003e, \u003ccomprimento\u003e para os correios de entrega \u003ctipo\u003e",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "o resultado deve ser \u003cfrete\u003e",
  "keyword": "Then ",
  "line": 8
});
formatter.examples({
  "id": "calcularfrete;buscar-frete;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 10,
  "rows": [
    {
      "id": "calcularfrete;buscar-frete;;1",
      "cells": [
        "peso",
        "largura",
        "altura",
        "comprimento",
        "tipo",
        "frete"
      ],
      "line": 11
    },
    {
      "id": "calcularfrete;buscar-frete;;2",
      "cells": [
        "0.5",
        "0.05",
        "0.5",
        "0.6",
        "PAC",
        "10"
      ],
      "line": 12
    },
    {
      "id": "calcularfrete;buscar-frete;;3",
      "cells": [
        "1",
        "0.1",
        "0.57",
        "0.65",
        "SEDEX",
        "15"
      ],
      "line": 13
    },
    {
      "id": "calcularfrete;buscar-frete;;4",
      "cells": [
        "1.5",
        "0.2",
        "0.7",
        "0.7",
        "SEDEX 10",
        "20"
      ],
      "line": 14
    }
  ]
});
formatter.before({
  "duration": 801711,
  "status": "passed"
});
formatter.before({
  "duration": 577062,
  "status": "passed"
});
formatter.before({
  "duration": 750667,
  "status": "passed"
});
formatter.scenario({
  "id": "calcularfrete;buscar-frete;;2",
  "description": "",
  "name": "Buscar frete",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "Eu tenho uma calculadora",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "Eu envio \u003ccep_destino\u003e, 0.5, 0.05, 0.5, 0.6 para os correios de entrega PAC",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "o resultado deve ser 10",
  "keyword": "Then ",
  "line": 8,
  "matchedColumns": [
    5
  ]
});
formatter.match({
  "location": "CalcularFreteSteps.eu_tenho_uma_calculadora()"
});
formatter.result({
  "duration": 117037739,
  "status": "passed"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "duration": 18337,
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
  "duration": 48755,
  "status": "passed"
});
formatter.before({
  "duration": 34344,
  "status": "passed"
});
formatter.before({
  "duration": 29450,
  "status": "passed"
});
formatter.scenario({
  "id": "calcularfrete;buscar-frete;;3",
  "description": "",
  "name": "Buscar frete",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "Eu tenho uma calculadora",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "Eu envio \u003ccep_destino\u003e, 1, 0.1, 0.57, 0.65 para os correios de entrega SEDEX",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "o resultado deve ser 15",
  "keyword": "Then ",
  "line": 8,
  "matchedColumns": [
    5
  ]
});
formatter.match({
  "location": "CalcularFreteSteps.eu_tenho_uma_calculadora()"
});
formatter.result({
  "duration": 18221,
  "status": "passed"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "duration": 18078,
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
  "duration": 67698,
  "status": "passed"
});
formatter.before({
  "duration": 61246,
  "status": "passed"
});
formatter.before({
  "duration": 49546,
  "status": "passed"
});
formatter.scenario({
  "id": "calcularfrete;buscar-frete;;4",
  "description": "",
  "name": "Buscar frete",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "Eu tenho uma calculadora",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "Eu envio \u003ccep_destino\u003e, 1.5, 0.2, 0.7, 0.7 para os correios de entrega SEDEX 10",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "o resultado deve ser 20",
  "keyword": "Then ",
  "line": 8,
  "matchedColumns": [
    5
  ]
});
formatter.match({
  "location": "CalcularFreteSteps.eu_tenho_uma_calculadora()"
});
formatter.result({
  "duration": 31277,
  "status": "passed"
});
formatter.match({
  "location": "CalcularFreteSteps.i_sum_with()"
});
formatter.result({
  "duration": 35206,
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
  "duration": 245836,
  "status": "passed"
});
formatter.before({
  "duration": 49783,
  "status": "passed"
});
formatter.before({
  "duration": 49069,
  "status": "passed"
});
formatter.scenario({
  "id": "calcularfrete;fluxo-alternativo-a",
  "description": "",
  "name": "Fluxo alternativo A",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "Eu tenho o cpf",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "Eu envio cep para correios",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "Eu envio [\"erro1\", \"erro2\", \"erro3\", \"erro4\"] para os correios de entrega \"erro5\"",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "deve mostrar o erro com a mensagem:",
  "keyword": "Then ",
  "line": 21,
  "doc_string": {
    "value": "Favor corrigir os dados",
    "line": 22,
    "content_type": ""
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 44277,
  "status": "passed"
});
formatter.before({
  "duration": 41799,
  "status": "passed"
});
formatter.before({
  "duration": 39128,
  "status": "passed"
});
formatter.scenario({
  "id": "calcularfrete;fluxo-alternativo-b",
  "description": "",
  "name": "Fluxo alternativo B",
  "keyword": "Scenario",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "Eu tenho o cpf",
  "keyword": "Given ",
  "line": 27
});
formatter.step({
  "name": "Eu tenho algum produto no carrinho",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "Eu tenho erros no cadastro",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "deve mostrar o erro com a mensagem:",
  "keyword": "Then ",
  "line": 30,
  "doc_string": {
    "value": "Favor corrigir os dados",
    "line": 31,
    "content_type": ""
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
});