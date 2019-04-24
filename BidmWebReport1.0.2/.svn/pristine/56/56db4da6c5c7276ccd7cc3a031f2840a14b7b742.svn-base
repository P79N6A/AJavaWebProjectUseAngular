package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.RoleInfo;

public interface RoleInfoService {
//	
//	//1.查询所有角色
//	public List<RoleInfo> selectAllRole(Map<String, Object> map) throws Exception;
//	
//	//2.查询一个角色
//	public RoleInfo selectRoleInfo(RoleInfo roleInfo) throws Exception;
//	
//	//3.添加一个角色
//	public int insertRoleInfo(RoleInfo roleInfo) throws Exception;
//	
//	//4.删除一个角色
//	public int deleteRoleInfo(RoleInfo roleInfo) throws Exception;
//	
//	//5.更新一个角色
//	public int updateRoleInfo(RoleInfo roleInfo) throws Exception;
//	
//	//6.查询 Aviliable 的角色信息
//	public List<RoleInfo> selectAvailableRole();
//	
//	//7.查询 被用户绑定的角色信息
//	public List<RoleInfo> getAsignedRoleByUserId(String userAccount);
	

	public List<RoleInfo> selectAllRole(Map<String, Object> map) throws Exception;
	
	public int insertRoleInfo(RoleInfo roleInfo) throws Exception;
	
	public RoleInfo selectRoleInfo(RoleInfo roleInfo) throws Exception;
	
	public int updateRoleInfo(RoleInfo roleInfo) throws Exception;
	
	public int deleteRoleInfo(RoleInfo roleInfo) throws Exception;

	public List<RoleInfo> selectAvailableRole();

	public List<RoleInfo> getAsignedRoleByUserId(String userAccount);

	public int getTotCount(String roleId);

}
