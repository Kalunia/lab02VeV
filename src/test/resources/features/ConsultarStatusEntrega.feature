Feature: ConsultarStatusEntrega
	Como usuário, quero consultar os detalhes de andamento da entrega
	
Scenario Outline: Consultar status
	Given Eu realizei uma compra
	When Eu envio <cod_rastreamento> para consulta 
	Then o resultado deve ser <cod_rastreamento> - <status> 
	
	Examples: 
		|  cod_rastreamento |    status   |
		|     11111         |   Aprovado  |
		|     22222    	    |   Rejeitado |
		|     33333         |    Adiado   |
		