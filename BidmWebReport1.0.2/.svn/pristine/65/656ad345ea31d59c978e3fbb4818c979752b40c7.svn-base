package com.boe.idm.project.controller;

import java.util.ArrayList;
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

import com.boe.idm.project.entity.SelectItem;
import com.boe.idm.project.model.mybatis.RoleInfo;
import com.boe.idm.project.model.mybatis.UserInfo;
import com.boe.idm.project.model.mybatis.UserRoleLink;
import com.boe.idm.project.service.RoleInfoService;
import com.boe.idm.project.service.UserInfoService;
import com.boe.idm.project.service.UserRoleLinkService;

@RestController
@RequestMapping("/api/userrolelink")
public class UserRoleLinkController {

	@Autowired
	private UserRoleLinkService service;
	@Autowired
	private UserInfoService userInfoService;
	@Autowired
	private RoleInfoService roleInfoService;
	 
	@RequestMapping(value="/selectAllUser" , method=RequestMethod.GET)
	public @ResponseBody List<UserRoleLink> selectAllUser(HttpServletRequest request, HttpServletResponse response, @RequestParam String userAccount) throws Exception{
		List<UserRoleLink> list = new ArrayList<>();
		list = service.selectAllUser();
		return list;
	}
	
	@RequestMapping(value="/selectUserRoleLink" , method=RequestMethod.GET)
	public @ResponseBody List<UserRoleLink> selectUserRoleLink(HttpServletRequest request, HttpServletResponse response,@RequestParam String userAccount,@RequestParam String roleId) throws Exception{
		List<UserRoleLink> list = new ArrayList<>();
		UserRoleLink userRoleLink = new UserRoleLink();
		userRoleLink.setUserAccount(userAccount);
		userRoleLink.setRoleId(roleId);
		list = (List<UserRoleLink>) service.selectUserRoleLink(userRoleLink);
		return list;
	}

	@RequestMapping(value="/insert/userRoleLink",method=RequestMethod.POST)
	public int insertUserRoleLink(HttpServletRequest request,HttpServletResponse response,
			@RequestBody UserRoleLink userRoleLink) throws Exception{		
		return service.insertUserRoleLink(userRoleLink);
	}
	
	@RequestMapping(value="/delete/deleteUserRoleLink", method=RequestMethod.DELETE)
	public  int delete(HttpServletRequest request, HttpServletResponse response,@RequestBody UserRoleLink  userRoleLink) throws Exception{
		return  service.deleteUserRoleLink(userRoleLink);
	}
	
	@RequestMapping(value="/getUserList" , method=RequestMethod.GET)
	public List<SelectItem> getUserList(HttpServletRequest request,HttpServletResponse response) throws Exception {
		List<UserInfo> users = userInfoService.selectAvailableUser();
		List<SelectItem> items = new ArrayList<SelectItem>();
		
		if(users != null && users.size()>0) {
			 for(UserInfo user:users) {
				 SelectItem item = new SelectItem(user.getUserAccount() + "&" + user.getUserName(),user.getUserAccount());
				 items.add(item);
			 }
 		} 
		
		return items;
	}
	
	@RequestMapping(value="/getRoleList" , method=RequestMethod.GET)
	public @ResponseBody List<SelectItem> getRoleList(HttpServletRequest request,HttpServletResponse response) throws Exception {
		List<RoleInfo> roleList = roleInfoService.selectAvailableRole();
		List<SelectItem> items = new ArrayList<SelectItem>();

		if(roleList != null && roleList.size()>0) {
			for(RoleInfo roleInfo:roleList) {
				SelectItem item = new SelectItem(roleInfo.getRoleId() + "&" + roleInfo.getDesc(),roleInfo.getRoleId());
				items.add(item);
			}
		} 

		return items;
	}
	
	@RequestMapping(value="/getRoleList_List" , method=RequestMethod.GET)
	public @ResponseBody   List<RoleInfo> getAllRoleList(HttpServletRequest request,HttpServletResponse response) throws Exception {
 		return roleInfoService.selectAvailableRole();
	}
	
	@RequestMapping(value="/getAsignedRoleByUserId" , method=RequestMethod.GET)
	public @ResponseBody   List<RoleInfo> getAsignedRoleByUserId(HttpServletRequest request,HttpServletResponse response,@RequestParam String userAccount) throws Exception {
 		return roleInfoService.getAsignedRoleByUserId(userAccount);
	}
	
	@RequestMapping(value="/update/saveChange",method=RequestMethod.PUT)
	public int saveChange(HttpServletRequest request,HttpServletResponse response,@RequestBody Map map) throws Exception{ //,@RequestBody List<MenuInfo> unAsignMenuList,@RequestBody List<MenuInfo> asignMenuList
 		List asignRoleList_ = (List<RoleInfo>) map.get("asignRoleList_");
		List asignRole = (List<RoleInfo>) map.get("asignRole");
		String userAccount = (String) map.get("userAccount");
		//add
		for(Object role: asignRole) {
			HashMap roleInfo_ = (HashMap) role;
			if(!asignRoleList_.contains(role)) {
				UserRoleLink userRoleLink = new UserRoleLink();
				userRoleLink.setUserAccount(userAccount);
				userRoleLink.setRoleId(roleInfo_.get("roleId").toString());
				
				service.insertUserRoleLink(userRoleLink);
			}
		}
		// delete
		for(Object role: asignRoleList_) {
			HashMap roleInfo_ = (HashMap) role;
			if(!asignRole.contains(role)) {
				UserRoleLink userRoleLink = new UserRoleLink();
				userRoleLink.setUserAccount(userAccount);
				userRoleLink.setRoleId(roleInfo_.get("roleId").toString());
				
				service.deleteUserRoleLink(userRoleLink);
			}
		}
		 
		return 0;
	}
}
