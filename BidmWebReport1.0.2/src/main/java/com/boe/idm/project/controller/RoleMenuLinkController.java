package com.boe.idm.project.controller;

import java.io.BufferedReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.entity.SelectItem;
import com.boe.idm.project.model.mybatis.MenuInfo;
import com.boe.idm.project.model.mybatis.RoleInfo;
import com.boe.idm.project.model.mybatis.UserInfo;
import com.boe.idm.project.model.mybatis.RoleMenuLink;
import com.boe.idm.project.service.RoleInfoService;
import com.boe.idm.project.service.UserInfoService;
import com.boe.idm.project.service.RoleMenuLinkService;

@RestController
@RequestMapping("/api/rolemenulink")
public class RoleMenuLinkController {

	@Autowired
	private RoleMenuLinkService service;
  	 

	@RequestMapping(value="/selectRoleMenuLink" , method=RequestMethod.GET)
	public @ResponseBody List<RoleMenuLink> selectRoleMenuLink(HttpServletRequest request, HttpServletResponse response,@RequestParam String roleId,@RequestParam String menuId) throws Exception{
		List<RoleMenuLink> list = new ArrayList<>();
		RoleMenuLink roleMenuLink = new RoleMenuLink();
 		roleMenuLink.setRoleId(roleId);
 		roleMenuLink.setMenuId(menuId);
		list = (List<RoleMenuLink>) service.selectRoleMenuLink(roleMenuLink);
		return list;
	}

	@RequestMapping(value="/insert/roleMenuLink",method=RequestMethod.POST)
	public int insertRoleMenuLink(HttpServletRequest request,HttpServletResponse response,
			@RequestBody RoleMenuLink roleMenuLink) throws Exception{		
		return service.insertRoleMenuLink(roleMenuLink);
	}
	
	@RequestMapping(value="/delete/deleteRoleMenuLink", method=RequestMethod.DELETE)
	public  int delete(HttpServletRequest request, HttpServletResponse response,@RequestBody RoleMenuLink  roleMenuLink) throws Exception{
		return  service.deleteRoleMenuLink(roleMenuLink);
	}
	
	
	@RequestMapping(value="/getSignedMenu" , method=RequestMethod.GET)
	public @ResponseBody List<MenuInfo> getSignedMenu(HttpServletRequest request, HttpServletResponse response,@RequestParam String roleId) throws Exception{
		RoleMenuLink roleMenuLink = new RoleMenuLink();
 		roleMenuLink.setRoleId(roleId);
 		
 		List<MenuInfo> list =  service.getSignedMenu(roleMenuLink);
		return list;
	}
 
	@RequestMapping(value="/update/saveChange",method=RequestMethod.PUT)
	public int saveChange(HttpServletRequest request,HttpServletResponse response,@RequestBody Map map) throws Exception{ //,@RequestBody List<MenuInfo> unAsignMenuList,@RequestBody List<MenuInfo> asignMenuList
 		List asignMenuList_ = (List<MenuInfo>) map.get("asignMenuList_");
		List asignMenu = (List<MenuInfo>) map.get("asignMenu");
		String roleId = (String) map.get("roleId");
		//add
		for(Object menu: asignMenu) {
			HashMap menuInfo_ = (HashMap) menu;
			if(!asignMenuList_.contains(menu)) {
				RoleMenuLink roleMenuLink = new RoleMenuLink();
				roleMenuLink.setRoleId(roleId);
				roleMenuLink.setMenuId(menuInfo_.get("menuId").toString());
				
				service.insertRoleMenuLink(roleMenuLink);
			}
		}
		// delete
		for(Object menu: asignMenuList_) {
			HashMap menuInfo_ = (HashMap) menu;
			if(!asignMenu.contains(menu)) {
				RoleMenuLink roleMenuLink = new RoleMenuLink();
				roleMenuLink.setRoleId(roleId);
				roleMenuLink.setMenuId(menuInfo_.get("menuId").toString());
				
				service.deleteRoleMenuLink(roleMenuLink);
			}
		}
		 
		return 0;
	}
	
	@RequestMapping(value="/update/saverolemenu",method=RequestMethod.PUT)
	public int saveRoleMenu(HttpServletRequest request,HttpServletResponse response,@RequestBody Map map) throws Exception{ //,@RequestBody List<MenuInfo> unAsignMenuList,@RequestBody List<MenuInfo> asignMenuList
 		List<String> menuList = (List<String>) map.get("menuList");
 		List<String> tmpMenuList = (List<String>) map.get("tmpMenuList");//修改前的数据
		String roleId = (String) map.get("roleId");
		//add 
		for(String menuId: menuList) {
 			if(!tmpMenuList.contains(menuId)) {
				RoleMenuLink roleMenuLink = new RoleMenuLink();
				roleMenuLink.setRoleId(roleId);
				roleMenuLink.setMenuId(menuId);
				
				service.insertRoleMenuLink(roleMenuLink);
			}
		}
		//delete
		for(String menuId: tmpMenuList) {
 			if(!menuList.contains(menuId)) {
				RoleMenuLink roleMenuLink = new RoleMenuLink();
				roleMenuLink.setRoleId(roleId);
				roleMenuLink.setMenuId(menuId);
				
				service.deleteRoleMenuLink(roleMenuLink);
			}
		}
		 
		return 0;
	}
}
