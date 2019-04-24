package com.boe.utils.json;

import com.boe.utils.Utils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Method;
import java.util.List;

public class JsonUtils {

    public static <T>JSONArray toJsonList(List<T> list) {
        JSONArray array = new JSONArray();

        for (Object obj : list) {
            try {
                Method method = obj.getClass().getMethod("toJson");
                array.put(method.invoke(obj));
            } catch (Exception e) {
//                e.printStackTrace();
                String s = String.valueOf(obj);
                if (Utils.isNumeric(s)) {
                    array.put(String.valueOf(obj));
                } else {
                    array.put(obj);
                }
            }
        }

        return array;
    }
    
    public static String getString(JSONObject obj, String key) {
    	if (obj == null) {
    		return null;
    	}
    	
    	try {
			return obj.getString(key);
		} catch (JSONException e) {
			return null;
		}
    }

}
