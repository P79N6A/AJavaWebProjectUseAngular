package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ModuleWipFirstVO")
public class ModuleWipFirstVO {
	
	private String month;
	private String datename;
	private double productsize;
	private String operationdesc;
	private String wotype;
	private String type;
	private int glassqty;
	private int panelqty;
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getDatename() {
		return datename;
	}
	public void setDatename(String datename) {
		this.datename = datename;
	}
	public double getProductsize() {
		return productsize;
	}
	public void setProductsize(double productsize) {
		this.productsize = productsize;
	}
	
	public String getWotype() {
		return wotype;
	}
	public void setWotype(String wotype) {
		this.wotype = wotype;
	}
	public String getOperationdesc() {
		return operationdesc;
	}
	public void setOperationdesc(String operationdesc) {
		this.operationdesc = operationdesc;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getGlassqty() {
		return glassqty;
	}
	public void setGlassqty(int glassqty) {
		this.glassqty = glassqty;
	}
	public int getPanelqty() {
		return panelqty;
	}
	public void setPanelqty(int panelqty) {
		this.panelqty = panelqty;
	}
	
	

}
