package com.boe.idm.project.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.admin.OMenuInfoMapper;
import com.boe.idm.project.mapper.primaryOracle.admin.ORoleMenuLinkMapper;
import com.boe.idm.project.model.mybatis.MenuInfo;
import com.boe.idm.project.model.mybatis.RoleMenuLink;
import com.boe.idm.project.service.RoleMenuLinkService;

@Service
public class RoleMenuLinkServiceImpl implements RoleMenuLinkService {
	
	@Autowired
	private ORoleMenuLinkMapper roleMenuLinkMapper;
	@Autowired
	private OMenuInfoMapper menuInfoMapper;

	@Override
	public List<RoleMenuLink> selectAllUser() throws Exception {
		return roleMenuLinkMapper.selectAllUser();
	}

	@Override
	public int insertRoleMenuLink(RoleMenuLink roleMenuLink) throws Exception {
		return roleMenuLinkMapper.insertRoleMenuLink(roleMenuLink);
	}

	@Override
	public List<RoleMenuLink> selectRoleMenuLink(RoleMenuLink roleMenuLink) throws Exception {
/*		String userAccount = roleMenuLink.getUserAccount();
		String roleId = roleMenuLink.getRoleId();
				
				
		if(userAccount != null && !"".equals(userAccount)) {
			userAccount = "%" + userAccount + "%";
		}
		if(roleId != null && !"".equals(roleId)) {
			roleId = "%" + roleId + "%";
		}
		roleMenuLink.setUserAccount(userAccount);
		roleMenuLink.setRoleId(roleId);*/
		return this.roleMenuLinkMapper.selectRoleMenuLink(roleMenuLink);
	}

	@Override
	public int deleteRoleMenuLink(RoleMenuLink roleMenuLink) throws Exception {
		return roleMenuLinkMapper.deleteRoleMenuLink(roleMenuLink);
	}

	@Override
	public List<MenuInfo> getSignedMenu(RoleMenuLink roleMenuLink) {		
 		return menuInfoMapper.getSignedMenu(roleMenuLink != null ? roleMenuLink.getRoleId():"");
	} 
}
