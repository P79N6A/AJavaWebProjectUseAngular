package com.boe.idm.project.service;

import java.util.List;


import com.boe.idm.project.model.mybatis.ModuleWipVO;

public interface ModuleWipService {
	//1.查询module的wip
		public List<ModuleWipVO> getModuleList( String hourtimekey,
				String[] lines, String[] checkincodes,String[] productsizes);
		//2.查询s2的wip
		public List<ModuleWipVO> getS2List(String hourtimekey,
				String[] lines,String[] checkincodes,String[] productsizes,String[] producttyes);

}
