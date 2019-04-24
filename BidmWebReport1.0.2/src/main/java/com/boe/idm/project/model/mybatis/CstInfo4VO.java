package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CstInfo4VO")
public class CstInfo4VO {
	
	private String stocker;
	private String cst_spec;
	private double production;
	private double engdev;
	private double dummy;
	private double empty;
	public String getStocker() {
		return stocker;
	}
	public void setStocker(String stocker) {
		this.stocker = stocker;
	}
	public String getCst_spec() {
		return cst_spec;
	}
	public void setCst_spec(String cst_spec) {
		this.cst_spec = cst_spec;
	}
	public double getProduction() {
		return production;
	}
	public void setProduction(double production) {
		this.production = production;
	}
	public double getEngdev() {
		return engdev;
	}
	public void setEngdev(double engdev) {
		this.engdev = engdev;
	}
	public double getDummy() {
		return dummy;
	}
	public void setDummy(double dummy) {
		this.dummy = dummy;
	}
	public double getEmpty() {
		return empty;
	}
	public void setEmpty(double empty) {
		this.empty = empty;
	}
	
}
