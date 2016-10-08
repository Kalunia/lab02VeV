Feature: BuscarEndereco
	Como sistema, quero validar um CEP e buscar o endereço 
correspondente através do serviço dos Correios
	
Scenario: Buscar endereco 
	Given Eu tenho um cep
	When Eu envio <cep> para os correios
	Then o resultado deve ser <address> 
	
	Examples: 
		|    cep 		|         address        |
		| 13087-450     |	'Rua das Margaridas' |
		| 13990-000		|  	        ''		     |
		
Scenario: Fluxo alternativo A 
	Given Eu tenho um cep
	When Eu envio 'teste_erro' para os correios
	Then deve mostrar o erro com a mensagem: 
	"""
	Favor corrigir os dados
	"""