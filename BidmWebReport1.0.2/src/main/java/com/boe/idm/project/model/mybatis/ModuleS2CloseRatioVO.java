package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ModuleS2CloseRatioVO")
public class ModuleS2CloseRatioVO {
	
	private String factory;
	private String closedRatio;
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getClosedRatio() {
		return closedRatio;
	}
	public void setClosedRatio(String closedRatio) {
		this.closedRatio = closedRatio;
	}
	
	

}
