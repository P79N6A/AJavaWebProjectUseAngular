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

import com.boe.idm.project.model.mybatis.UserInfo;
import com.boe.idm.project.service.UserInfoService;

@RestController
@RequestMapping("/api/userinfo")
public class UserInfoController {

	@Autowired
	private UserInfoService service;
	
	/**
	 * 
	 * 查询 所有用户的信息 
	 * @param request
	 * @param response
	 * @param pageRow
	 * @param startRow
	 * @param userName
	 * @param userAccount
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value="/selectAllUser" , method=RequestMethod.GET)
	public @ResponseBody List<UserInfo> selectAllUser(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="pageRow") Integer pageRow,
			@RequestParam(value="startRow") Integer startRow,
			@RequestParam(value="userName") String userName,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userFactory") String userFactory,
			@RequestParam(value="userDepartment") String userDepartment) throws Exception{
		Map<String,Object> map = new HashMap<>();
		map.put("pageRow", pageRow);
		map.put("startRow", startRow);
		map.put("userAccount", userAccount != null && !"".equals(userAccount)?"%"+userAccount+"%":"");
		map.put("userName", userName != null && !"".equals(userName)?"%"+userName+"%":"");
		map.put("userFactory", userFactory != null && !"".equals(userFactory)?"%"+userFactory+"%":"");
		map.put("userDepartment", userDepartment != null && !"".equals(userDepartment)?"%"+userDepartment+"%":"");
		return service.selectAllUser(map);
	}
	
	/**
	 * 这个方法是在页面上编辑 用户的信息之后，更新信息到数据库中的操作
	 * @param request
	 * @param response
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value="/update/updateUserInfo", method=RequestMethod.PUT)
	public  int update(HttpServletRequest request, HttpServletResponse response,
			@RequestBody UserInfo  userInfo) throws Exception {
		userInfo.setUpdateTime(new Date());
		userInfo.setUpdateUser(request.getHeader("userCode"));
		return  service.updateUserInfo(userInfo);
	}
	
	/**
	 * 创建一个新的用户的操作
	 * @param request
	 * @param response
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/insert/userInfo",method=RequestMethod.POST)
	public int insertUserInfo(HttpServletRequest request,HttpServletResponse response,
			@RequestBody UserInfo userInfo) throws Exception{
		userInfo.setCreateTime(new Date());
		userInfo.setCreateUser(request.getHeader("userCode"));
		return service.insertUserInfo(userInfo);
	}
	
	@RequestMapping(value="/delete/deleteUserInfo", method=RequestMethod.DELETE)
	public  int delete(HttpServletRequest request, HttpServletResponse response,@RequestBody UserInfo  userInfo) throws Exception{
		return  service.deleteUserInfo(userInfo);
	}
	
	@RequestMapping(value="/selectAvailableUser" , method=RequestMethod.GET)
	public @ResponseBody List<UserInfo> selectAvailableUser(HttpServletRequest request, HttpServletResponse response) throws Exception{
		List<UserInfo> list = new ArrayList<>();
		list = service.selectAvailableUser();
		return list;
	}
	
	/**
	 * 查询 满足条件的 用户的个数
	 * @param request
	 * @param response
	 * @param userAccount
	 * @param userName
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/getcount", method = RequestMethod.GET)
	public int gridListCount(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="userAccount") String userAccount,
			@RequestParam(value="userName") String userName
			) throws Exception {
		UserInfo user = new UserInfo();
		user.setUserName(userName != null && !"".equals(userName)?"%"+userName+"%":"");
		user.setUserAccount(userAccount != null && !"".equals(userAccount)?"%"+userAccount+"%":"");
		return service.getTotCount(user);
	}
}
