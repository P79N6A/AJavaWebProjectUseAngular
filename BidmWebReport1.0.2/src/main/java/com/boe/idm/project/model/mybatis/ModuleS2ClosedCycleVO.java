package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ModuleS2ClosedCycleVO")
public class ModuleS2ClosedCycleVO {
	private String factory;
	private double closeCycle;
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public double getCloseCycle() {
		return closeCycle;
	}
	public void setCloseCycle(double closeCycle) {
		this.closeCycle = closeCycle;
	}
	
	
}
