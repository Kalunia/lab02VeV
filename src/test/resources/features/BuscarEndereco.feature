Feature: BuscarEndereco
	Como sistema, quero validar um CEP e buscar o endereço 
correspondente através do serviço dos Correios
	
Scenario: Buscar endereco 
	Given Eu tenho um CEP
	When Eu envio '13087-450' para os correios
	Then o resultado deve ser 'Rua das Margaridas' 
		
Scenario: Fluxo alternativo A 
	Given Eu tenho um CEP
	When Eu envio 'teste_erro' para os correios
	Then deve mostrar o erro com a mensagem: 
	"""
	Favor corrigir os dados
	"""