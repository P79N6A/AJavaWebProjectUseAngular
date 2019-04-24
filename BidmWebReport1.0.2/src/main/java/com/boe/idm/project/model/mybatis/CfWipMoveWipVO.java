package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfWipMoveWipVO")
public class CfWipMoveWipVO {
	
	private String line;
	private String lineState;
	private String operdesc;
	
	private String productname;
	
	private Integer wip;
	private Integer wiptotal;
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	public String getLineState() {
		return lineState;
	}
	public void setLineState(String lineState) {
		this.lineState = lineState;
	}
	public String getOperdesc() {
		return operdesc;
	}
	public void setOperdesc(String operdesc) {
		this.operdesc = operdesc;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public Integer getWip() {
		return wip;
	}
	public void setWip(Integer wip) {
		this.wip = wip;
	}
	public Integer getWiptotal() {
		return wiptotal;
	}
	public void setWiptotal(Integer wiptotal) {
		this.wiptotal = wiptotal;
	}
	public CfWipMoveWipVO(String line, String lineState, String operdesc, String productname, Integer wip,
			Integer wiptotal) {
		super();
		this.line = line;
		this.lineState = lineState;
		this.operdesc = operdesc;
		this.productname = productname;
		this.wip = wip;
		this.wiptotal = wiptotal;
	}
	public CfWipMoveWipVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "CfWipMoveWipVO [line=" + line + ", lineState=" + lineState + ", operdesc=" + operdesc + ", productname="
				+ productname + ", wip=" + wip + ", wiptotal=" + wiptotal + "]";
	}
	
	

}
