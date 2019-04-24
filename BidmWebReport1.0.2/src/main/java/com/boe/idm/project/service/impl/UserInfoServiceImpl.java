package com.boe.idm.project.service.impl;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.admin.UserInfoMapper;
import com.boe.idm.project.mapper.primary.admin.UserRoleLinkMapper;
import com.boe.idm.project.mapper.primaryOracle.admin.OUserInfoMapper;
import com.boe.idm.project.mapper.primaryOracle.admin.OUserRoleLinkMapper;
import com.boe.idm.project.model.mybatis.UserInfo;
import com.boe.idm.project.model.mybatis.UserRoleLink;
import com.boe.idm.project.service.UserInfoService;

@Service
public class UserInfoServiceImpl implements UserInfoService {
	
	@Autowired 
	private OUserInfoMapper userInfoMapper;
	
	@Autowired
	private OUserRoleLinkMapper userRoleLinkMapper;
	
	@Override
	public List<UserInfo> selectAllUser(Map<String, Object> map) throws Exception { 
		return userInfoMapper.selectAllUser(map);
	}

	@Override
	public int insertUserInfo(UserInfo userInfo) throws Exception {
		return userInfoMapper.saveOrUpdate(userInfo);
	}

	@Override
	public UserInfo selectUserInfo(UserInfo userInfo) throws Exception {
		return userInfoMapper.selectUserInfo(userInfo);
	}

	@Override
	public int updateUserInfo(UserInfo userInfo) throws Exception {
		return userInfoMapper.updateUserInfo(userInfo);
	}

	@Override
	public int deleteUserInfo(UserInfo userInfo) throws Exception {
		//delete userrole link table
		UserRoleLink ul = new UserRoleLink();
		ul.setUserAccount(userInfo.getUserAccount());
		
		List<UserRoleLink> list = userRoleLinkMapper.selectUserRoleLinkForDelete(ul);
		for (Iterator iterator = list.iterator(); iterator.hasNext();) {
			UserRoleLink userRoleLink2 = (UserRoleLink) iterator.next();
			userRoleLinkMapper.deleteUserRoleLink(userRoleLink2);
		}
 		
		return userInfoMapper.deleteUserInfo(userInfo);
	}

	@Override
	public List<UserInfo> selectAvailableUser() throws Exception {
 		return this.userInfoMapper.selectAvailableUser();
	}

	@Override
	public int getTotCount(UserInfo user) {
 		return userInfoMapper.getTotCount(user);
	}

 
}
