package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfMoveCurrentVO")
public class CfMoveCurrentVO {

	private String hourtimekey;
	private String operationdesc;
	private String modeltype;
	private double glassqty;
	public String getHourtimekey() {
		return hourtimekey;
	}
	public void setHourtimekey(String hourtimekey) {
		this.hourtimekey = hourtimekey;
	}
	
	public String getModeltype() {
		return modeltype;
	}
	public void setModeltype(String modeltype) {
		this.modeltype = modeltype;
	}
	public double getGlassqty() {
		return glassqty;
	}
	public String getOperationdesc() {
		return operationdesc;
	}
	public void setOperationdesc(String operationdesc) {
		this.operationdesc = operationdesc;
	}
	public void setGlassqty(double glassqty) {
		this.glassqty = glassqty;
	}
	
	
}