package com.boe.utils.toolkit;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

public class HttpKit {
	
	public static String doPost(String url, String req) throws IOException {
		URL reqUrl = new URL(url);
		HttpURLConnection httpConn = (HttpURLConnection)reqUrl.openConnection();
		httpConn.setRequestMethod("POST");
		httpConn.setDoOutput(true);
		httpConn.setDoInput(true);
		httpConn.setUseCaches(false);
		httpConn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
		httpConn.setRequestProperty("Content-Length", String.valueOf(req.getBytes().length));
		
		httpConn.connect();
		
		httpConn.getOutputStream().write(req.getBytes("utf-8"));
		httpConn.getOutputStream().flush();
		httpConn.getOutputStream().close();
		
		BufferedReader in = new BufferedReader(new InputStreamReader(httpConn.getInputStream()));
		String line;
		StringBuilder sbResult = new StringBuilder();
		while ((line = in.readLine()) != null) {
			sbResult.append(line);
		}
		
		return sbResult.toString();
	}
	
	public static String doPost(String url, HashMap<String, String> kvs) throws IOException {
		return doPost(url, StringKit.join(kvs));
	}

}
