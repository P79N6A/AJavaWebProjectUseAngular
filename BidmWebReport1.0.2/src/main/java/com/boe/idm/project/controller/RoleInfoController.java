package com.boe.idm.project.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.RoleInfo;
import com.boe.idm.project.service.RoleInfoService;


@RestController
@RequestMapping("/api/roleinfo")
public class RoleInfoController {
//	@Autowired
//	private RoleInfoService service;
//	
//	@RequestMapping(value="/selectAllRole" , method=RequestMethod.GET)
//	public @ResponseBody List<RoleInfo> selectAllRole(
//			HttpServletRequest request,
//			HttpServletResponse response, 
//			@RequestParam(value="pageRow") Integer pageRow,
//			@RequestParam(value="startRow") Integer startRow,
//			@RequestParam(value="roleId") String roleId) throws Exception{
//		Map<String,Object> map = new HashMap<>();
//		map.put("pageRow", pageRow);
//		map.put("startRow", startRow);
//		map.put("roleId", "%"+roleId+"%"); 
//		
//		return service.selectAllRole(map);
//	}
//	
//	@RequestMapping(value="/insert/roleInfo",method=RequestMethod.POST)
//	public int insertRoleInfo(HttpServletRequest request,HttpServletResponse response,
//			@RequestBody RoleInfo roleInfo) throws Exception{
//		roleInfo.setCreateTime(new Date());
//		roleInfo.setCreateUser(request.getHeader("userCode"));
//		return service.insertRoleInfo(roleInfo);
//	}
//	
//	@RequestMapping(value="/delete/deleteRoleInfo", method=RequestMethod.DELETE)
//	public  int delete(HttpServletRequest request, HttpServletResponse response,@RequestBody RoleInfo  roleInfo) throws Exception{
//		return  service.deleteRoleInfo(roleInfo);
//	}
//	
//	@RequestMapping(value="/update/updateRoleInfo", method=RequestMethod.PUT)
//	public  int update(HttpServletRequest request, HttpServletResponse response,@RequestBody RoleInfo  roleInfo) throws Exception{
//		
//		roleInfo.setUpdateTime(new Date());
//		roleInfo.setUpdateUser(request.getHeader("userCode"));
//		return  service.updateRoleInfo(roleInfo);
//	}
//	
//	@RequestMapping(value="/selectAvailableRole" , method=RequestMethod.GET)
//	public @ResponseBody List<RoleInfo> selectAvailableRole(HttpServletRequest request, HttpServletResponse response) throws Exception{
//		List<RoleInfo> list = new ArrayList<>();
//		list = service.selectAvailableRole();
//		return list;
//	}

	@Autowired
	private RoleInfoService service;
	 
	@RequestMapping(value="/selectAllRole" , method=RequestMethod.GET)
	public @ResponseBody List<RoleInfo> selectAllRole(
			HttpServletRequest request,
			HttpServletResponse response, 
			@RequestParam(value="pageRow") Integer pageRow,
			@RequestParam(value="startRow") Integer startRow,
			@RequestParam(value="roleId") String roleId) throws Exception{
		Map<String,Object> map = new HashMap<>();
		map.put("pageRow", pageRow);
		map.put("startRow", startRow);
		map.put("roleId", "%"+roleId+"%"); 
		
		return service.selectAllRole(map);
	}
	
	@RequestMapping(value="/update/updateRoleInfo", method=RequestMethod.PUT)
	public  int update(HttpServletRequest request, HttpServletResponse response,@RequestBody RoleInfo  roleInfo) throws Exception{
		roleInfo.setUpdateTime(new Date());
		roleInfo.setUpdateUser(request.getHeader("userCode"));
		return  service.updateRoleInfo(roleInfo);
	}
	
	@RequestMapping(value="/insert/roleInfo",method=RequestMethod.POST)
	public int insertRoleInfo(HttpServletRequest request,HttpServletResponse response,
			@RequestBody RoleInfo roleInfo) throws Exception{
		roleInfo.setCreateTime(new Date());
		roleInfo.setCreateUser(request.getHeader("userCode"));
		return service.insertRoleInfo(roleInfo);
	}
	
	@RequestMapping(value="/delete/deleteRoleInfo", method=RequestMethod.DELETE)
	public  int delete(HttpServletRequest request, HttpServletResponse response,@RequestBody RoleInfo  roleInfo) throws Exception{
		return  service.deleteRoleInfo(roleInfo);
	}
	
	@RequestMapping(value="/selectAvailableRole" , method=RequestMethod.GET)
	public @ResponseBody List<RoleInfo> selectAvailableRole(HttpServletRequest request, HttpServletResponse response) throws Exception{
		List<RoleInfo> list = new ArrayList<>();
		list = service.selectAvailableRole();
		return list;
	}
	
	@RequestMapping(value="/getcount", method = RequestMethod.GET)
	public int getCount(
			HttpServletRequest request, 
			HttpServletResponse response,
 			@RequestParam(value="roleId") String roleId) throws Exception {
		return service.getTotCount("%" + roleId + "%");
	}
}
