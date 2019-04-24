package com.boe.idm.project.model.mybatis;

import java.util.Date;

public class TimingQuery {

	private String productname;
	private String productspecname;
	private String processflowname;
	private String processoperationname;
	private String defectname;
	private Date   eventtime;
	private Float  actvalue;
	
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProductspecname() {
		return productspecname;
	}
	public void setProductspecname(String productspecname) {
		this.productspecname = productspecname;
	}
	public String getProcessflowname() {
		return processflowname;
	}
	public void setProcessflowname(String processflowname) {
		this.processflowname = processflowname;
	}
	public String getProcessoperationname() {
		return processoperationname;
	}
	public void setProcessoperationname(String processoperationname) {
		this.processoperationname = processoperationname;
	}
	public String getDefectname() {
		return defectname;
	}
	public void setDefectname(String defectname) {
		this.defectname = defectname;
	}
	public Date getEventtime() {
		return eventtime;
	}
	public void setEventtime(Date eventtime) {
		this.eventtime = eventtime;
	}
	public Float getActvalue() {
		return actvalue;
	}
	public void setActvalue(Float actvalue) {
		this.actvalue = actvalue;
	}
	
	
}
