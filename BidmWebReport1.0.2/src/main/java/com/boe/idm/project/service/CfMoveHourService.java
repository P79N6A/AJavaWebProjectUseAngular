package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfMoveHourBasicinfoVO;
import com.boe.idm.project.model.mybatis.CfMoveHourVO;

public interface CfMoveHourService {
	//1.根据日期名称查询数据的操作
		public List<CfMoveHourVO> queryObjectsByDatename(String datename,String productiontype);
	/********下面是基础信息维护的方法*************/
	//2.查询所有的基础信息
	public List<CfMoveHourBasicinfoVO> queryAllObjects();
	//3.添加一个对象
	public int insertOne(CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO);
	//4.修改一个对象
	public int updateOne(CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO);
		//5.删除一个对象
	public int deleteOne(CfMoveHourBasicinfoVO cfMoveHourBasicinfoVO);
}
