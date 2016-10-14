package br.unicamp.bookstore.helper;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.mockito.internal.util.MockUtil;

public class HttpHelper {

	public static final int MOCK_PORT = 10080;
	public static final String MOCK_URL = "http://localhost:" + MOCK_PORT;

	public static String urlFor(String urlMock) {
		return MOCK_URL + urlMock;
	}
	
	public static HttpURLConnection getConnection(String url) throws IOException,
			MalformedURLException {
		return (HttpURLConnection) new URL(urlFor(url)).openConnection();
	}
	
}
