package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.PanelBankInfoVO;
import com.boe.idm.project.model.mybatis.PanelBankVO;
import com.boe.idm.project.model.mybatis.PanelBankkfVO;

public interface PanelBankService {
	//1.查询 1条  表格数据的上面的   total 的数据
	public List<PanelBankVO> queryObjects1(String hourtime);
		
	//2.查询 4条  表格数据的上面的 
	public List<PanelBankVO> queryObjects2(String hourtime);
		
	//3.按照时间来进行查询 ：第一个页面的数据 :数据主体部分
	public List<PanelBankVO> queryObjects3(String hourtime);
		
	//4.查询 上面的两个数据
	public List<PanelBankVO> queryObjects4(String hourtime);
	
	//5.查询 二级界面 库房中的 total 数据
	public List<PanelBankkfVO> queryOjbects5(String hourtime);
		
	//6.查询4条
	public List<PanelBankkfVO> queryOjbects6(String hourtime);
		
	//7.查询二级界面的数据主体部分
	public List<PanelBankkfVO> queryOjbects7(String hourtime);
	
	//8.查询所有的 基础信息表
	public List<PanelBankInfoVO> queryAllBasicInfo();
		
	//9.增加一个元素
	public int insertOne(PanelBankInfoVO panelBankInfoVO);
		
	//10.修改一个元素
	public int updateOne(PanelBankInfoVO panelBankInfoVO);
		
	//11.删除一个元素
	public int deleteOne(PanelBankInfoVO panelBankInfoVO);

}
