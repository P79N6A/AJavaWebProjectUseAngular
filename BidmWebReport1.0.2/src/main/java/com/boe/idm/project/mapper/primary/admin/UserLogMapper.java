package com.boe.idm.project.mapper.primary.admin;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.MenuClickInfo;
import com.boe.idm.project.model.mybatis.ReportLoadInfo;
import com.boe.idm.project.model.mybatis.UserLoginInfo;

@Mapper
public interface UserLogMapper {

	public int update(UserLoginInfo userLoginInfo);

	public int insert(UserLoginInfo userLoginInfo);

	public int insertMenuClick(MenuClickInfo menuClickInfo);

	public List<UserLoginInfo> userLoginPagenate(Map<String, Object> map);

	public int getMenuClickInfoCount(@Param(value = "menuId") String menuId,@Param(value = "userAccount") String userAccount, @Param(value = "userName") String userName, @Param(value = "startTime")Date startTime,@Param(value = "endTime") Date endTime);

	public List<MenuClickInfo> menuClickInfoPagenate(Map<String, Object> map);

	public int getUserLoginInfoCount(@Param(value = "userAccount") String userAccount, @Param(value = "userName") String userName, @Param(value = "startTime") Date startTime,@Param(value = "endTime") Date endTime);

	public int insertReportLoadInfo(ReportLoadInfo reportLoadInfo);

	public int getReportLoadInfoCount(@Param(value = "menuId") String menuId,@Param(value = "userAccount") String userAccount, @Param(value = "userName") String userName, @Param(value = "startTime")Date startTime,@Param(value = "endTime") Date endTime);

	public List<ReportLoadInfo> reportLoadPagenate(Map<String, Object> map);
	
	public List<Map<String,Object>> getUserLogin_Top();

	public List<Map<String,Object>> getMenuClick_Top();
}
