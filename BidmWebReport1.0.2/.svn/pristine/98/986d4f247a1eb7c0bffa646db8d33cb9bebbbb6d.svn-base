package com.boe.idm.project.mapper.primaryOracle.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.RoleInfo;

@Mapper
public interface ORoleInfoMapper {

	public RoleInfo selectRoleInfo(RoleInfo roleInfo) throws Exception;
	
	public int updateRoleInfo(RoleInfo roleInfo) throws Exception;
	
	public int deleteRoleInfo(RoleInfo roleInfo) throws Exception;

	public int saveOrUpdate(RoleInfo roleInfo);

	public List<RoleInfo> selectAvailableRole();

	public List<RoleInfo> getAsignedRoleByUserId(@Param(value="userAccount") String userAccount);

	public List<RoleInfo> selectAllRole(Map<String, Object> map) throws Exception;

	public int getTotCount(@Param(value="roleId") String roleId);
}
