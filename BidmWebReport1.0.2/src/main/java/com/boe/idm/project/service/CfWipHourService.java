package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.CfWipHourVO;

public interface CfWipHourService {
	//1.根据时间进行查询
		public List<CfWipHourVO> queryAllData(String hourtimekey,String productiontype);

}
