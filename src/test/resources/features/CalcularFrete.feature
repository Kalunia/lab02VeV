Feature: CalcularFrete 
	Como usuário, quero buscar o frete e o tempo de entrega previsto
	
Scenario Outline: Buscar frete 
	Given Eu tenho um cep para ser buscado
	And Eu tenho um produto  
	When Eu envio <cep>, <peso>, <largura>, <altura>, <comprimento> para os correios de entrega <tipo> 
	Then o resultado deve ser <valor> e <prazo> do frete
	"""
	CEP salvo.
	"""
	
	Examples: 
		| cep      |  peso  | largura | altura  | comprimento | tipo      | valor | prazo |
		| 13990000 |  0.5   |	0.05  |   0.5   |    0.6      |  PAC      |  10   |   5   |
		| 32310210 |  	1	|	0.1	  |   0.57  |    0.65     |  SEDEX    |  15   |   4   |
		| 63010010 |  1.5	|	0.2	  |   0.7   |    0.7      |  SEDEX 10 |  20   |   8   |
		
Scenario Outline: Erro no retorno do valor
	Given Eu tenho um determinado cep
	And Eu tenho um determinado produto
	When Eu envio um <cep>, <peso>, <largura>, <altura>, <comprimento> para os correios de entrega <tipo>
	Then deve mostrar o error e perguntar por outro cep2
	
	Examples: 
		|   cep       |      error                         | peso  | largura  | altura  | comprimento |
		| "99999.999" |   "<h2>Bad Request (400)</h2>"     | 0.5   |	0.05  |   0.5   |    0.6      |
		| "13990000"  |   "{ erro: true }"                 | 1,5   |	0,2	  |   0,7   |    0,7      |
		
	
Scenario: Erro no tempo de retorno
	Given Eu tenho um cep2
	And Eu tenho um produto2
	When Eu envio um 13990000, 1, 1, 2, 2, para os correios de entrega tipo
	Then deve mostrar o erro de indisponibilidade2 
	"""
	Serviço do correio temporariamente fora de servico.
	"""