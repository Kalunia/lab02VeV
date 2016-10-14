package br.unicamp.bookstore.helper;

public class JsonHelper {

    public static String buildJson(String cep, String logradouro, String complemento, String bairro,
                                   String localidade, String uf, String unidade, String ibge, String gia) {

        return String.format("{" +
                        "cep: %s," +
                        "logradouro: %s," +
                        "complemento: %s," +
                        "bairro: %s," +
                        "localidade: %s," +
                        "uf: %s," +
                        "unidade: %s," +
                        "ibge: %s," +
                        "gia: %s" +
                        "}", cep, logradouro, complemento, bairro, localidade, uf, unidade, ibge, gia);

    }  

}
