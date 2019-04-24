package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CellProkb3VO")
public class CellProkb3VO {

	private String datename;
	private String oper_code;
	private String productname;
	private double glsqty;

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public String getOper_code() {
		return oper_code;
	}

	public void setOper_code(String oper_code) {
		this.oper_code = oper_code;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public double getGlsqty() {
		return glsqty;
	}

	public void setGlsqty(double glsqty) {
		this.glsqty = glsqty;
	}

}
