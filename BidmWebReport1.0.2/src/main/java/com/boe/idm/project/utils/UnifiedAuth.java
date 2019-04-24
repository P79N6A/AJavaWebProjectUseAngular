package com.boe.idm.project.utils;

import java.util.HashMap;
import java.util.Iterator;
import java.util.ResourceBundle;

import org.json.JSONException;
import org.json.JSONObject;

import com.boe.utils.toolkit.HttpKit;

public class UnifiedAuth {
	
	private static final String urlAuth = "http://user-api-test.boe.com.cn:8083";
	
	private static final String urlUserAuth = "/api/v1/sso/userAuth";
	private static final String urlUserAuthByToken = "/api/v1/sso/userAuthByToken";
	
	private static String appId;
	
	static {
		ResourceBundle bundle = ResourceBundle.getBundle("application");
		appId = bundle.getString("unifiedauth.appid");
	}
	
	public static String login(String userName, String password) {
		HashMap<String, String> kvs = new HashMap<String, String>();
		kvs.put("appId", appId);
		kvs.put("userName", userName);
		kvs.put("password", password);
		
		JSONObject objResult = new JSONObject();
		
		try {
			String rsp = HttpKit.doPost(urlAuth + urlUserAuth, kvs);
//			System.out.println(rsp);
			
			JSONObject json = new JSONObject(rsp);
			boolean result = json.getBoolean("result");
			objResult.put("result", result);
			if (result) {
				JSONObject jsonData = json.getJSONObject("data");
//				objResult.put("token", jsonData.getString("token"));
				@SuppressWarnings("unchecked")
				Iterator<String> iter = jsonData.keys();
				while (iter.hasNext()) {
					String key = iter.next().toString();
					objResult.put(key, jsonData.get(key));
				}
			} else {
				objResult.put("message", json.getString("result_message"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			try {
				objResult.put("result", false);
				objResult.put("message", e.getMessage());
			} catch (JSONException ex) {
				ex.printStackTrace();
			}
		}
		
		return objResult.toString();
	}
	
	public static String tokenAuth(String userName, String token) {
		HashMap<String, String> kvs = new HashMap<String, String>();
		kvs.put("appId", appId);
		kvs.put("userCode", userName);
		kvs.put("token", token);
		
		JSONObject objResult = new JSONObject();
		
		try {
			String rsp = HttpKit.doPost(urlAuth + urlUserAuthByToken, kvs);
//			System.out.println(rsp);
			
			JSONObject json = new JSONObject(rsp);
			boolean result = json.getBoolean("result");
			objResult.put("result", result);
			if (!result) {
				objResult.put("message", json.getString("result_message"));
			}
		} catch (Exception e) {
			try {
				objResult.put("result", false);
				objResult.put("message", e.getMessage());
			} catch (JSONException ex) {
				ex.printStackTrace();
			}
		}
		
		return objResult.toString();
	}

}
