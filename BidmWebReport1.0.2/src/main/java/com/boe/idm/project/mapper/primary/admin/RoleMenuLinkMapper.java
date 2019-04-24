package com.boe.idm.project.mapper.primary.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boe.idm.project.model.mybatis.MenuInfo;
import com.boe.idm.project.model.mybatis.RoleMenuLink;

@Mapper
public interface RoleMenuLinkMapper {

	public List<RoleMenuLink> selectAllUser() throws Exception;
	
	public List<RoleMenuLink> selectRoleMenuLink(RoleMenuLink roleMenuLink) throws Exception;
	
	public int deleteRoleMenuLink(RoleMenuLink roleMenuLink) throws Exception;

	public int insertRoleMenuLink(RoleMenuLink roleMenuLink);

	public List<RoleMenuLink> selectRoleMenuLinkForDelete(RoleMenuLink roleMenuLink); 
}
