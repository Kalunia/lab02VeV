Feature: CalcularFrete 
	Como usuário, quero buscar o frete e o tempo de entrega previsto
	
Scenario Outline: Buscar frete 
	Given Eu tenho o cpf
	And Eu tenho algum produto no carrinho 
	When Eu envio [<peso>, <largura>, <altura>, <comprimento>] para os correios de entrega <tipo> 
	Then o resultado deve ser <frete> 
	
	Examples: 
		| peso  | largura | altura  | comprimento | tipo      |frete |
		|  0.5  |	0.05  |   0.5   |    0.6      |  PAC      |  10  |
		|  	1	|	0.1	  |   0.57  |    0.65     |  SEDEX    |  15  |
		|  1.5	|	0.2	  |   0.7   |    0.7      |  SEDEX 10 |  20  |
		
Scenario: Fluxo alternativo A 
	Given Eu tenho o cpf
	And Eu tenho algum produto no carrinho
	And Eu envio cep para correios 
	When Eu envio ["erro1", "erro2", "erro3", "erro4"] para os correios de entrega "erro5"
	Then deve mostrar o erro com a mensagem: 
	"""
	Favor corrigir os dados
	"""
	
Scenario: Fluxo alternativo B
	Given Eu tenho o cpf
	And Eu tenho algum produto no carrinho 
	When Eu tenho erros no cadastro
	Then deve mostrar o erro com a mensagem: 
	"""
	Favor corrigir os dados
	"""