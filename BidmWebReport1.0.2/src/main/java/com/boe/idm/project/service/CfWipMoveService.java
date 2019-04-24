package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfWipMoveBasicinfoVO;
import com.boe.idm.project.model.mybatis.CfWipMoveMoveVO;
import com.boe.idm.project.model.mybatis.CfWipMovePlanVO;
import com.boe.idm.project.model.mybatis.CfWipMoveVO;
import com.boe.idm.project.model.mybatis.CfWipMoveWipVO;

public interface CfWipMoveService {
	
	//1.查询 生管 日计划完成情况的操作
	public List<CfWipMoveVO> queryNumbers(String timedate,String timehour);
	
	//2.查询 wip 的数据信息
	public List<CfWipMoveWipVO> queryWipNumbers(String timehour);
	
	//3.查询 move的数据信息
	public List<CfWipMoveMoveVO> queryMoveNumbers(String timehour);
	

	/**********下面是 关于基础信息维护的方法*****************************/
	//4.查询所有的数据
	public List<CfWipMoveBasicinfoVO> queryAllBasicinfo();
	//5.添加一个对象
	public int insertOne(CfWipMoveBasicinfoVO cfWipMoveBasicinfoVO);
	//6.更新一个对象 : 直接写参数了
	public int updateOne(String factorynew,String productspecnew,String linenew,String factoryold,String productspecold,String lineold);
	//7.删除一个对象
	public int deleteOne(CfWipMoveBasicinfoVO cfWipMoveBasicinfoVO);
	
	/**********下面是 关于计划倒入的的方法*****************************/
	//8.读取excel表格中的数据信息
	public List<CfWipMovePlanVO> readExcel(String filePath) throws Exception;
	
	//9.倒入计划到数据库
	public int insertPlanOne(List<CfWipMovePlanVO> list);
	
	//9.查询
	public List<CfWipMovePlanVO> queryPlanByHourtimekey(String hourtimekey);
}
