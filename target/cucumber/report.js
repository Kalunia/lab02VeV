$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuscarEndereco.feature");
formatter.feature({
  "line": 1,
  "name": "BuscarEndereco",
  "description": "Como sistema, quero validar um CEP e buscar o endereço \ncorrespondente através do serviço dos Correios",
  "id": "buscarendereco",
  "keyword": "Feature"
});
<<<<<<< HEAD
=======
formatter.before({
<<<<<<< HEAD
  "duration": 649857,
=======
  "duration": 729297,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Sum two numbers",
  "description": "",
  "id": "calculator;sum-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I sum 3 with 3",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 6",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.i_have_a_calculator()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 137869165,
=======
  "duration": 67386051,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "CalculadoraSteps.i_sum_with(int,int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 2294808,
=======
  "duration": 1129982,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 160253,
=======
  "duration": 67658,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
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
<<<<<<< HEAD
  "duration": 1040979,
  "status": "passed"
});
formatter.before({
  "duration": 432813,
=======
<<<<<<< HEAD
  "duration": 51922,
=======
  "duration": 24734,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I multiply 1 with 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 0",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.i_have_a_calculator()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 123174,
=======
  "duration": 15804,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.i_mult_with(int,int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 183526,
=======
  "duration": 100177,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 85794,
  "status": "passed"
});
formatter.before({
  "duration": 43677,
=======
  "duration": 44160,
  "status": "passed"
});
formatter.before({
  "duration": 19805,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
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
<<<<<<< HEAD
  "duration": 118794430,
=======
<<<<<<< HEAD
  "duration": 39610,
=======
  "duration": 13909,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
  "status": "passed"
});
formatter.match({});
formatter.result({
<<<<<<< HEAD
  "status": "undefined"
=======
<<<<<<< HEAD
  "duration": 146450,
=======
  "duration": 93847,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
});
formatter.match({});
formatter.result({
<<<<<<< HEAD
  "status": "undefined"
});
formatter.before({
  "duration": 95760,
  "status": "passed"
});
formatter.before({
  "duration": 52277,
=======
<<<<<<< HEAD
  "duration": 114803,
  "status": "passed"
});
formatter.before({
  "duration": 44934,
=======
  "duration": 55490,
  "status": "passed"
});
formatter.before({
  "duration": 18861,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
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
<<<<<<< HEAD
  "duration": 35496,
=======
<<<<<<< HEAD
  "duration": 29655,
=======
  "duration": 14234,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
  "status": "passed"
});
formatter.match({});
formatter.result({
<<<<<<< HEAD
  "status": "undefined"
=======
<<<<<<< HEAD
  "duration": 168266,
=======
  "duration": 89682,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
});
formatter.match({});
formatter.result({
<<<<<<< HEAD
  "status": "undefined"
});
formatter.before({
  "duration": 57776,
  "status": "passed"
});
formatter.before({
  "duration": 42383,
=======
<<<<<<< HEAD
  "duration": 113214,
  "status": "passed"
});
formatter.before({
  "duration": 41419,
=======
  "duration": 53760,
  "status": "passed"
});
formatter.before({
  "duration": 20313,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
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
<<<<<<< HEAD
  "duration": 71786,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
=======
<<<<<<< HEAD
  "duration": 34810,
=======
  "duration": 17865,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 16
    }
  ],
  "location": "CalculadoraSteps.i_div_with(int,int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 208777,
=======
  "duration": 134844,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.should_show_an_error(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 51786887,
  "status": "passed"
});
formatter.before({
  "duration": 58900,
=======
  "duration": 21101559,
  "status": "passed"
});
formatter.before({
  "duration": 29949,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Divide two numbers",
  "description": "",
  "id": "calculator;divide-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I divide 9 with 3",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the result should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.i_have_a_calculator()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 50546,
=======
  "duration": 15325,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "CalculadoraSteps.i_div_with(int,int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 234139,
=======
  "duration": 92709,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
});
formatter.match({
  "location": "BuscarEnderecoSteps.deve_mostrar_erro_com_a_mensagem(String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
<<<<<<< HEAD
  "duration": 159292,
=======
  "duration": 46276,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
>>>>>>> 0223fcffa2be940ce86ebe6932d7ee900128d3f1
});
});