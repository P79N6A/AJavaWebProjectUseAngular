package com.boe.idm.project.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.admin.OUserRoleLinkMapper;
import com.boe.idm.project.model.mybatis.UserRoleLink;
import com.boe.idm.project.service.UserRoleLinkService;

@Service
public class UserRoleLinkServiceImpl implements UserRoleLinkService {
	
	@Autowired
	private OUserRoleLinkMapper userRoleLinkMapper;

	@Override
	public List<UserRoleLink> selectAllUser() throws Exception {
		return userRoleLinkMapper.selectAllUser();
	}

	@Override
	public int insertUserRoleLink(UserRoleLink userRoleLink) throws Exception {
		return userRoleLinkMapper.insertUserRoleLink(userRoleLink);
	}

	@Override
	public List<UserRoleLink> selectUserRoleLink(UserRoleLink userRoleLink) throws Exception {
		String userAccount = userRoleLink.getUserAccount();
		String roleId = userRoleLink.getRoleId();
				
				
		if(userAccount != null && !"".equals(userAccount)) {
			userAccount = "%" + userAccount + "%";
		}
		if(roleId != null && !"".equals(roleId)) {
			roleId = "%" + roleId + "%";
		}
		userRoleLink.setUserAccount(userAccount);
		userRoleLink.setRoleId(roleId);
		return this.userRoleLinkMapper.selectUserRoleLink(userRoleLink);
	}

	@Override
	public int deleteUserRoleLink(UserRoleLink userRoleLink) throws Exception {
		return userRoleLinkMapper.deleteUserRoleLink(userRoleLink);
	}

 
}
