package com.boe.utils.toolkit;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class StringKit {
	
	public static String join(List<String> list, String splitter) {
		StringBuffer sb = new StringBuffer();
		for (String s : list) {
			sb.append(s + splitter);
		}
		
		return sb.toString().substring(0, sb.toString().length() - splitter.length());
	}
	
	public static String join(String[] strs, String splitter) {
		StringBuffer sb = new StringBuffer();
		for (String s : strs) {
			sb.append(s + splitter);
		}
		
		return sb.toString().substring(0, sb.toString().length() - splitter.length());
	}
	
	public static String join(HashMap<String, String> kvs, String pairConnector, String splitter) {
		List<String> listKey = new ArrayList<String>();
		listKey.addAll(kvs.keySet());
		Collections.sort(listKey);
		
		List<String> listKvStr = new ArrayList<String>();
		for (String key : listKey) {
			listKvStr.add(key + pairConnector + kvs.get(key));
		}
		
		return join(listKvStr, splitter);
	}
	
	public static String join(HashMap<String, String> kvs) {
		return join(kvs, "=", "&");
	}

}
