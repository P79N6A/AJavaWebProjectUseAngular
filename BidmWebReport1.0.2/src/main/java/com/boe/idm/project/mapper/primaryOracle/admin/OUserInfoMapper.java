package com.boe.idm.project.mapper.primaryOracle.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.boe.idm.project.model.mybatis.UserInfo;

@Mapper
public interface OUserInfoMapper {
	

	public List<UserInfo> selectAllUser(Map<String, Object> map) throws Exception;
	
	public UserInfo selectUserInfo(UserInfo userInfo) throws Exception;
	
	public int updateUserInfo(UserInfo userInfo) throws Exception;
	
	public int deleteUserInfo(UserInfo userInfo) throws Exception;

	public int saveOrUpdate(UserInfo userInfo);

	public List<UserInfo> selectAvailableUser();

	public int getTotCount(UserInfo user);
}
