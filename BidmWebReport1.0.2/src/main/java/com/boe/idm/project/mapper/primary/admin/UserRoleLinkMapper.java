package com.boe.idm.project.mapper.primary.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.boe.idm.project.model.mybatis.UserRoleLink;

@Mapper
public interface UserRoleLinkMapper {

	public List<UserRoleLink> selectAllUser() throws Exception;
	
	public List<UserRoleLink> selectUserRoleLink(UserRoleLink userRoleLink) throws Exception;
	
	public int deleteUserRoleLink(UserRoleLink userRoleLink) throws Exception;

	public int insertUserRoleLink(UserRoleLink userRoleLink);

	public List<UserRoleLink> selectUserRoleLinkForDelete(UserRoleLink userRoleLink);
}
