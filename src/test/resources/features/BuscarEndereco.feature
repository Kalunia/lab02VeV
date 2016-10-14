# encoding: UTF-8
Feature: BuscarEndereco
	Como sistema, quero validar um CEP e buscar o endereco 
	
Scenario Outline: Buscar endereco de CEP valido
	Given Eu tenho um cep
	When Eu envio <cep> para os correios
	Then o resultado deve ser <cep_result>, <logradouro>, <complemento>, <bairro>, <localidade>, <uf>, <unidade>, <ibge>, <gia>
	
	Examples: 
		|    cep 		|  cep_result        |  logradouro           |  complemento        | bairro                 |   localidade               |  uf    |   unidade    |   ibge      |  gia   |
		| "01001000"    |   "01001-000"      |  "Praca da Se"        | "lado impar"        | "Se"                   | "Sao Paulo"                | "SP"   |  "''"        |   "35503"   | "1004" |
		| "13087450"    |	"13087-450"      |  "Rua das Margaridas" |       "''"          | "Chacara Primavera"    | "Campinas"                 | "SP"   |  "''"        |   "3509502" | "2446" | 
		| "13990000"	|  	"13990-000"      |        "''"		     |       "''"          |   "''"                 | "Espirito Santo do Pinhal" | "SP"   |  "''"        |   "3515186" | "5307" |        
		
Scenario Outline: Buscar endereco de CEP invalido
	Given Eu tenho um cep
	When Eu envio <cep> para os correios
	Then deve mostrar o <error> e perguntar por outro cep
	
	Examples: 
		|   cep       |      error                         |
		| "99999.999" |   "<h2>Bad Request (400)</h2>"     |
		| "99999999"  |   "{ erro: true }"                 |
	
	
Scenario: Buscar endereco com Viacep indisponivel
	Given Eu tenho um cep
	And Viacep esta indisponivel
	When Eu envio "0100100" para os correios
	Then deve mostrar o erro de indisponibilidade: 
	"""
	ViaCep temporariamente fora de servico. Favor tentar mais tarde.
	"""