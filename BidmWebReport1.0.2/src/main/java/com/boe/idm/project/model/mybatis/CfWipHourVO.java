package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfWipHourVO")
public class CfWipHourVO {

	private String hourtimekey;
	private String productiontype;
	private String productspecname;
	private String modeltype;
	private String opercode;
	private String operdesc;
	private String qty;
	public String getHourtimekey() {
		return hourtimekey;
	}
	public void setHourtimekey(String hourtimekey) {
		this.hourtimekey = hourtimekey;
	}
	public String getProductiontype() {
		return productiontype;
	}
	public void setProductiontype(String productiontype) {
		this.productiontype = productiontype;
	}
	public String getProductspecname() {
		return productspecname;
	}
	public void setProductspecname(String productspecname) {
		this.productspecname = productspecname;
	}
	public String getModeltype() {
		return modeltype;
	}
	public void setModeltype(String modeltype) {
		this.modeltype = modeltype;
	}
	public String getOpercode() {
		return opercode;
	}
	public void setOpercode(String opercode) {
		this.opercode = opercode;
	}
	public String getOperdesc() {
		return operdesc;
	}
	public void setOperdesc(String operdesc) {
		this.operdesc = operdesc;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public CfWipHourVO(String hourtimekey, String productiontype, String productspecname, String modeltype,
			String opercode, String operdesc, String qty) {
		super();
		this.hourtimekey = hourtimekey;
		this.productiontype = productiontype;
		this.productspecname = productspecname;
		this.modeltype = modeltype;
		this.opercode = opercode;
		this.operdesc = operdesc;
		this.qty = qty;
	}
	public CfWipHourVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "CfWipHourVO [hourtimekey=" + hourtimekey + ", productiontype=" + productiontype + ", productspecname="
				+ productspecname + ", modeltype=" + modeltype + ", opercode=" + opercode + ", operdesc=" + operdesc
				+ ", qty=" + qty + "]";
	}
	
	
}
