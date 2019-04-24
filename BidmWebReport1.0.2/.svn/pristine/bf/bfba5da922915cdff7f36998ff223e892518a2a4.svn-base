package com.boe.idm.project.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.MenuClickInfo;
import com.boe.idm.project.model.mybatis.ReportLoadInfo;
import com.boe.idm.project.model.mybatis.UserLoginInfo;
import com.boe.idm.project.service.UserLogService;

@RestController
@RequestMapping("/api/userlog")
public class UserLogController {

	private final Logger logger = LoggerFactory.getLogger(UserLogController.class);

	@Autowired
	private UserLogService userLogService;
	
	@RequestMapping(value="/userlogin/insert", method = RequestMethod.POST)
	public int insertItem(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody UserLoginInfo userLoginInfo
			) throws Exception{
		userLoginInfo.setIpAddr(this.getIPAddress(request));
		return userLogService.insert(userLoginInfo);
	}
	 
	@RequestMapping(value="/userlogout/update", method = RequestMethod.PUT)
	public int updateItem(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody UserLoginInfo userLoginInfo
			) throws Exception{
		userLoginInfo.setLogoutTime(new Date());
		return userLogService.update(userLoginInfo);
	}
	
	@RequestMapping(value="/menuclick/insert", method = RequestMethod.POST)
	public int insertMenuClick(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody MenuClickInfo menuClickInfo
			) throws Exception{
		return userLogService.insertMenuClick(menuClickInfo);
	}
	
	
	
	@RequestMapping(value="/userlogin/count", method = RequestMethod.GET)
	public int getUserLoginInfoCount(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName,
			@RequestParam(value="startTime") String startTime,
			@RequestParam(value="endTime") String endTime
			) throws Exception {

		return this.userLogService.getUserLoginInfoCount(userAccount,userName,new Date(Long.valueOf(startTime)),new Date(Long.valueOf(endTime)));
	}
	
	
	@RequestMapping(value="/tbload/userlogin/pagenate" , method=RequestMethod.GET)
	public @ResponseBody List<UserLoginInfo> pagenate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName,
			@RequestParam(value="pageRow") Integer pageRow,
			@RequestParam(value="startRow") Integer startRow,
			@RequestParam(value="startTime") String startTime,
			@RequestParam(value="endTime") String endTime) throws Exception{
		Map<String,Object> map = new HashMap<>();
		map.put("pageRow", pageRow);
		map.put("startRow", startRow);
		map.put("userAccount", userAccount);
		map.put("userName", userName);
		map.put("startTime", new Date(Long.valueOf(startTime)));
		map.put("endTime", new Date(Long.valueOf(endTime)));
		
		return this.userLogService.userLoginPagenate(map);
	}
	
	@RequestMapping(value="/menuclick/count", method = RequestMethod.GET)
	public int getMenuClickCount(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="startTime") String startTime,
			@RequestParam(value="endTime") String endTime,
			@RequestParam(value="menuId") String menuId,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName
			) throws Exception {
		return this.userLogService.getMenuClickInfoCount(menuId,userAccount,userName,new Date(Long.valueOf(startTime)),new Date(Long.valueOf(endTime)));
	}
	
	
	@RequestMapping(value="/menuclick/pagenate" , method=RequestMethod.GET)
	public @ResponseBody List<MenuClickInfo> menuClickInfoPagenate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="pageRow") Integer pageRow,
			@RequestParam(value="startRow") Integer startRow,
			@RequestParam(value="startTime") String startTime,
			@RequestParam(value="endTime") String endTime,
			@RequestParam(value="menuId") String menuId,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName) throws Exception{
		Map<String,Object> map = new HashMap<>();
		map.put("pageRow", pageRow);
		map.put("startRow", startRow);
		map.put("userAccount", userAccount);
		map.put("userName", userName);
		map.put("menuId", menuId);
		map.put("startTime", new Date(Long.valueOf(startTime)));
		map.put("endTime", new Date(Long.valueOf(endTime)));
		return this.userLogService.menuClickInfoPagenate(map);
	}
	
	
	
	@RequestMapping(value="/reportload/count", method = RequestMethod.GET)
	public int getReportLoadInfoCount(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="startTime") String startTime,
			@RequestParam(value="endTime") String endTime,
			@RequestParam(value="menuId") String menuId,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName
			) throws Exception {

		return this.userLogService.getReportLoadInfoCount(menuId,userAccount,userName,new Date(Long.valueOf(startTime)),new Date(Long.valueOf(endTime)));
	}
	
	
	@RequestMapping(value="/tbload/reportload/pagenate" , method=RequestMethod.GET)
	public @ResponseBody List<ReportLoadInfo> pagenate_reportLoad(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="pageRow") Integer pageRow,
			@RequestParam(value="startRow") Integer startRow,
			@RequestParam(value="startTime") String startTime,
			@RequestParam(value="endTime") String endTime,
			@RequestParam(value="menuId") String menuId,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName) throws Exception{
		Map<String,Object> map = new HashMap<>();
		map.put("pageRow", pageRow);
		map.put("startRow", startRow);
		map.put("userAccount", userAccount);
		map.put("userName", userName);
		map.put("menuId", menuId);
		map.put("startTime", new Date(Long.valueOf(startTime)));
		map.put("endTime", new Date(Long.valueOf(endTime)));
		return this.userLogService.reportLoadPagenate(map);
	}
	
	@RequestMapping(value="/tbload/userlogintop" , method=RequestMethod.GET)
	public String loginTop(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception{
		List<Map<String,Object>> list = this.userLogService.getUserLogin_Top();
		
		JSONArray jArray = new JSONArray();
		
		for(Map<String,Object> map : list) {
			JSONObject obj = new JSONObject();
			if(map.get("USERACCOUNT") != null) {
				obj.put("name", map.get("USERNAMW") != null && !"".equals(map.get("USERNAME")) ? map.get("USERNAME") : map.get("USERACCOUNT"));
				obj.put("value", map.get("CTIMES"));
				jArray.put(obj);
			}
		}
 
		return jArray.toString();
	}
	
	@RequestMapping(value="/tbload/menuclicktop" , method=RequestMethod.GET)
	public String clickTop(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception{
		List<Map<String,Object>> list = this.userLogService.getMenuClick_Top();
		JSONArray jArray = new JSONArray();
		
		for(Map<String,Object> map : list) {
			JSONObject obj = new JSONObject();
			if(map.get("MENUID") != null) {
				obj.put("MENUID", map.get("MENUID"));
				obj.put("CTIMES", map.get("CTIMES"));
				jArray.put(obj);
			}
		}
 
		return jArray.toString();
	}
	
	@RequestMapping(value="/test/getmsg" , method=RequestMethod.GET)
	public String getMsg(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception{
 
 
			System.out.println(request.getHeader("userCode"));
 
		//{"loginTime":1546562862129,"userCode":"admin","token":"fake-jwt-token"}
		/*
		 *{"loginTime":1546567321498,"orgPath":"京东方科技集团股份有限公司/DAS BG/首席制造官组织/生产技术中心/智能工厂系统本部/应用系统开发部/分析管理系统开发科/",
		  "userName":"朱永立","userId":"228069","userCode":"50123216","token":"997bba87-e038-4d15-bc7a-18eb20780fc4"}
		 */
		return "hello world!";
	}
	
	public  String getIPAddress(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
	    if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	        ip = request.getHeader("Proxy-Client-IP");
	    }
	    if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	        ip = request.getHeader("WL-Proxy-Client-IP");
	    }
	    if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	        ip = request.getRemoteAddr();
	    }
	    if (ip.contains(",")) {
	        return ip.split(",")[0];
	    } else {
	        return ip;
	    }
	}
}
