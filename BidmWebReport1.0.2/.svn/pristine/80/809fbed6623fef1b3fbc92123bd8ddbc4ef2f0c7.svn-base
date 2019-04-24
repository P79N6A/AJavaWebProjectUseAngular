package com.boe.idm.project.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MultiController {
	
	@RequestMapping(value = "/multi1")
	public String multi1(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			320, 332, 301, 334, 390, 330, 320
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "直接访问");
		obj.put("type", "bar");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi2")
	public String multi2(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			120, 132, 101, 134, 90, 230, 210
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "邮件营销");
		obj.put("type", "bar");
		obj.put("stack", "广告");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi3")
	public String multi3(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			220, 182, 191, 234, 290, 330, 310
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "联盟广告");
		obj.put("type", "bar");
		obj.put("stack", "广告");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi4")
	public String multi4(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			150, 232, 201, 154, 190, 330, 410
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "视频广告");
		obj.put("type", "bar");
		obj.put("stack", "广告");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi5")
	public String multi5(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			862, 1018, 964, 1026, 1679, 1600, 1570
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "搜索引擎");
		obj.put("type", "bar");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi6")
	public String multi6(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			620, 732, 701, 734, 1090, 1130, 1120
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "百度");
		obj.put("type", "bar");
		obj.put("stack", "搜索引擎");
		obj.put("barWidth", 5);
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi7")
	public String multi7(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			120, 132, 101, 134, 290, 230, 220
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "谷歌");
		obj.put("type", "bar");
		obj.put("stack", "搜索引擎");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi8")
	public String multi8(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			60, 72, 71, 74, 190, 130, 110
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "必应");
		obj.put("type", "bar");
		obj.put("stack", "搜索引擎");
		obj.put("data", data);
		
		return obj.toString();
	}
	
	@RequestMapping(value = "/multi9")
	public String multi9(HttpServletRequest request, HttpServletResponse response) throws JSONException {
		Integer[] data = new Integer[] {
			62, 82, 91, 84, 109, 110, 120
		};
		
		JSONObject obj = new JSONObject();
		obj.put("name", "其他");
		obj.put("type", "bar");
		obj.put("stack", "搜索引擎");
		obj.put("data", data);
		
		return obj.toString();
	}

}
