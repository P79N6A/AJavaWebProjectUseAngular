package com.boe.idm.project.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.MenuClickInfo;
import com.boe.idm.project.model.mybatis.ReportLoadInfo;
import com.boe.idm.project.model.mybatis.UserLoginInfo;

public interface UserLogService {

	public int update(UserLoginInfo userLoginInfo);

	public int insert(UserLoginInfo userLoginInfo);

	public int insertMenuClick(MenuClickInfo menuClickInfo);

	public List<UserLoginInfo> userLoginPagenate(Map<String, Object> map);

	public int getMenuClickInfoCount(String menuId,String userAccount,String userName, Date startTime, Date endTime);

	public List<MenuClickInfo> menuClickInfoPagenate(Map<String, Object> map);

	public int getUserLoginInfoCount(String userAccount, String userName, Date date, Date date2);
	
	public int insertReportLoadInfo(ReportLoadInfo reportLoadInfo);

	public int getReportLoadInfoCount(String menuId,String userAccount,String userName, Date startTime, Date endTime);

	public List<ReportLoadInfo> reportLoadPagenate(Map<String, Object> map);

	public List<Map<String,Object>> getUserLogin_Top();

	public List<Map<String,Object>> getMenuClick_Top();
}
