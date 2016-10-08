$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculadora.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "As a user\nI want to use a basic calculator\nSo that I dont need to calculate myself",
  "id": "calculator",
  "keyword": "Feature"
});
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
formatter.scenarioOutline({
  "line": 11,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I multiply \u003cfirstNumber\u003e with \u003csecondNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "calculator;multiply-two-numbers;",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "result"
      ],
      "line": 17,
      "id": "calculator;multiply-two-numbers;;1"
    },
    {
      "cells": [
        "1",
        "0",
        "0"
      ],
      "line": 18,
      "id": "calculator;multiply-two-numbers;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "4"
      ],
      "line": 19,
      "id": "calculator;multiply-two-numbers;;3"
    },
    {
      "cells": [
        "3",
        "10",
        "30"
      ],
      "line": 20,
      "id": "calculator;multiply-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
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
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers;;3",
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
  "name": "I multiply 2 with 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 4",
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
  "duration": 39610,
=======
  "duration": 13909,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.i_mult_with(int,int)"
});
formatter.result({
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
});
formatter.result({
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
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers;;4",
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
  "name": "I multiply 3 with 10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 30",
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
  "duration": 29655,
=======
  "duration": 14234,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    },
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.i_mult_with(int,int)"
});
formatter.result({
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
});
formatter.result({
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
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Division by zero",
  "description": "",
  "id": "calculator;division-by-zero",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I divide 7 with 0",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "should show an error with a message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 26,
    "value": "/ by zero"
  }
});
formatter.match({
  "location": "CalculadoraSteps.i_have_a_calculator()"
});
formatter.result({
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
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 159292,
=======
  "duration": 46276,
>>>>>>> bd0c3a2f615c75424c8c5875bea424e0a6061e0b
  "status": "passed"
});
});