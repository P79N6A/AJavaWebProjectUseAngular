package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfWipMoveBasicinfoVO")
public class CfWipMoveBasicinfoVO {
	
	private String rownum;

	private String factory;
	private String productspecname;
	private String line;
	
	
	public String getRownum() {
		return rownum;
	}
	public void setRownum(String rownum) {
		this.rownum = rownum;
	}
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getProductspecname() {
		return productspecname;
	}
	public void setProductspecname(String productspecname) {
		this.productspecname = productspecname;
	}
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	public CfWipMoveBasicinfoVO(String rownum, String factory, String productspecname, String line) {
		super();
		this.rownum = rownum;
		this.factory = factory;
		this.productspecname = productspecname;
		this.line = line;
	}
	public CfWipMoveBasicinfoVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "CfWipMoveBasicinfoVO [rownum=" + rownum + ", factory=" + factory + ", productspecname="
				+ productspecname + ", line=" + line + "]";
	}

	

}
