package com.boe.idm.project.service.impl;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.admin.ORoleInfoMapper;
import com.boe.idm.project.mapper.primaryOracle.admin.ORoleMenuLinkMapper;
import com.boe.idm.project.mapper.primaryOracle.admin.OUserRoleLinkMapper;
import com.boe.idm.project.model.mybatis.RoleInfo;
import com.boe.idm.project.model.mybatis.RoleMenuLink;
import com.boe.idm.project.model.mybatis.UserRoleLink;
import com.boe.idm.project.service.RoleInfoService;

@Service
public class RoleInfoServiceImpl implements RoleInfoService {
	
//	@Autowired
//	private ORoleInfoMapper roleInfoMapper;
//
//	@Override
//	public List<RoleInfo> selectAllRole(Map<String, Object> map) throws Exception {
//		return roleInfoMapper.selectAllRole(map);
//	}
//
//	@Override
//	public RoleInfo selectRoleInfo(RoleInfo roleInfo) throws Exception {
//		return null;
//	}
//
//	@Override
//	public int insertRoleInfo(RoleInfo roleInfo) throws Exception {
//		return roleInfoMapper.saveOrUpdate(roleInfo);
//	}
//
//	@Override
//	public int deleteRoleInfo(RoleInfo roleInfo) throws Exception {
//		return roleInfoMapper.deleteRoleInfo(roleInfo);
//	}
//
//	@Override
//	public int updateRoleInfo(RoleInfo roleInfo) throws Exception {
//		return roleInfoMapper.updateRoleInfo(roleInfo);
//	}
//
//	@Override
//	public List<RoleInfo> selectAvailableRole() {
//		return roleInfoMapper.selectAvailableRole();
//	}
//	
//	@Override
//	public List<RoleInfo> getAsignedRoleByUserId(String userAccount) {
//		return roleInfoMapper.getAsignedRoleByUserId(userAccount);
//	}
	
	@Autowired
	private ORoleInfoMapper roleInfoMapper;
  	@Autowired
	private OUserRoleLinkMapper userRoleLinkMapper;
  	@Autowired
  	private ORoleMenuLinkMapper roleMenuLinkMapper;

	@Override
	public List<RoleInfo> selectAllRole(Map<String, Object> map) throws Exception {
		return roleInfoMapper.selectAllRole(map);
	}

	@Override
	public int insertRoleInfo(RoleInfo roleInfo) throws Exception {
		return roleInfoMapper.saveOrUpdate(roleInfo);
	}

	@Override
	public RoleInfo selectRoleInfo(RoleInfo roleInfo) throws Exception {
		return null;
	}

	@Override
	public int updateRoleInfo(RoleInfo roleInfo) throws Exception {
		return roleInfoMapper.updateRoleInfo(roleInfo);
	}

	@Override
	public int deleteRoleInfo(RoleInfo roleInfo) throws Exception {
		//delete userrole link table
		
		UserRoleLink ur = new UserRoleLink();
		ur.setRoleId(roleInfo.getRoleId());
		List<UserRoleLink> li = userRoleLinkMapper.selectUserRoleLinkForDelete(ur);
		for (Iterator iterator = li.iterator(); iterator.hasNext();) {
			UserRoleLink userRoleLink = (UserRoleLink) iterator.next();
			userRoleLinkMapper.deleteUserRoleLink(userRoleLink);			
		}
		
		//delete rolemenu link table
		
		RoleMenuLink rm = new RoleMenuLink();
		rm.setRoleId(roleInfo.getRoleId());
		
		List<RoleMenuLink> list_ = roleMenuLinkMapper.selectRoleMenuLinkForDelete(rm);
		for (Iterator iterator = list_.iterator(); iterator.hasNext();) {
			RoleMenuLink roleMenuLink = (RoleMenuLink) iterator.next();
			roleMenuLinkMapper.deleteRoleMenuLink(roleMenuLink);			
		}
		return roleInfoMapper.deleteRoleInfo(roleInfo);
	}

	@Override
	public List<RoleInfo> selectAvailableRole() {
		return roleInfoMapper.selectAvailableRole();
	}

	@Override
	public List<RoleInfo> getAsignedRoleByUserId(String userAccount) {
		return roleInfoMapper.getAsignedRoleByUserId(userAccount);
	}

	@Override
	public int getTotCount(String roleId) {
		return roleInfoMapper.getTotCount(roleId);
	}

 
}
