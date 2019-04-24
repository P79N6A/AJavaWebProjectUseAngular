package com.boe.idm.project.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.admin.OUserLogMapper;
import com.boe.idm.project.model.mybatis.MenuClickInfo;
import com.boe.idm.project.model.mybatis.ReportLoadInfo;
import com.boe.idm.project.model.mybatis.UserLoginInfo;
import com.boe.idm.project.service.UserLogService;

@Service()
public class UserLogServiceImpl implements UserLogService {

	@Autowired
	private OUserLogMapper userLogMapper;

	@Override
	public int update(UserLoginInfo userLoginInfo) {
		return userLogMapper.update(userLoginInfo);
	}

	@Override
	public int insert(UserLoginInfo userLoginInfo) {
		return userLogMapper.insert(userLoginInfo);
	}

	@Override
	public int insertMenuClick(MenuClickInfo menuClickInfo) {
		return userLogMapper.insertMenuClick(menuClickInfo);
	}

	@Override
	public int getUserLoginInfoCount(String userAccount,String userName, Date startTime, Date endTime) {
		return userLogMapper.getUserLoginInfoCount(userAccount,userName,startTime,endTime);
	}

	@Override
	public List<UserLoginInfo> userLoginPagenate(Map<String, Object> map) {
		return userLogMapper.userLoginPagenate(map);
	}

	@Override
	public int getMenuClickInfoCount(String menuId,String userAccount,String userName, Date startTime, Date endTime) {
		return userLogMapper.getMenuClickInfoCount(menuId,userAccount,userName,startTime,endTime);
	}

	@Override
	public List<MenuClickInfo> menuClickInfoPagenate(Map<String, Object> map) {
		return userLogMapper.menuClickInfoPagenate(map);
	}

	@Override
	public int insertReportLoadInfo(ReportLoadInfo reportLoadInfo) {
		return userLogMapper.insertReportLoadInfo(reportLoadInfo);
	}

	@Override
	public int getReportLoadInfoCount(String menuId,String userAccount,String userName, Date startTime, Date endTime) {
		return userLogMapper.getReportLoadInfoCount(menuId,userAccount,userName,startTime,endTime);
	}

	@Override
	public List<ReportLoadInfo> reportLoadPagenate(Map<String, Object> map) {
		return userLogMapper.reportLoadPagenate(map);
	}

	@Override
	public List<Map<String, Object>> getUserLogin_Top() {
		return userLogMapper.getUserLogin_Top();
	}

	@Override
	public List<Map<String, Object>> getMenuClick_Top() {
		return userLogMapper.getMenuClick_Top();
	}


}
