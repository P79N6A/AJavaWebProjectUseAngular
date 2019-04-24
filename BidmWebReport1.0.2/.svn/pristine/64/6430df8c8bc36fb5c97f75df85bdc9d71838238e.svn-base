package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ArrayMoveScrollVO;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;

public interface ArrayMoveScrollService {
	//1.按照时间和productiontype来进行操作
	public List<ArrayMoveScrollVO> queryAllData(String month,int nowhour,String productiontype);
	//2.keyin功能的写入操作
	public int insertRemark(String month,String opercode,String productiontype,String ratio,String content);
	//3.把keyin的内容读出来
	public List<KeyInRemarkVO> readRemark(String month,String productiontype,String ratio);
}
