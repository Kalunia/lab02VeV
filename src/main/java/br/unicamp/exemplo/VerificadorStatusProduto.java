package br.unicamp.exemplo;

import br.unicamp.bookstore.domain.Produto;
import br.unicamp.bookstore.xml.ClientStatusPedidoCorreios;

public class VerificadorStatusProduto {
	private final ClientStatusPedidoCorreios clientStatusPedidoCorreios;

    public VerificadorStatusProduto(ClientStatusPedidoCorreios clientStatusPedidoCorreios) {
        this.clientStatusPedidoCorreios = clientStatusPedidoCorreios;
    }

    public ClientStatusPedidoCorreios.ConsultaStatusResponse verificaStatus(Produto produto) {
        return clientStatusPedidoCorreios.consultarRastreio(produto.getCodigoRastreio());
    }
}
