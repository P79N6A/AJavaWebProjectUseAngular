package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfMoveHourBasicinfoVO")
public class CfMoveHourBasicinfoVO {
	private String rownum;
	
	private String factory;
	private String product;
	private String productname;
	private String modeltype;
	private String flag;
	
	private String nums;

	
	
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

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getModeltype() {
		return modeltype;
	}

	public void setModeltype(String modeltype) {
		this.modeltype = modeltype;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getNums() {
		return nums;
	}

	public void setNums(String nums) {
		this.nums = nums;
	}

	

	public CfMoveHourBasicinfoVO(String rownum, String factory, String product, String productname, String modeltype,
			String flag, String nums) {
		super();
		this.rownum = rownum;
		this.factory = factory;
		this.product = product;
		this.productname = productname;
		this.modeltype = modeltype;
		this.flag = flag;
		this.nums = nums;
	}

	public CfMoveHourBasicinfoVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CfMoveHourBasicinfoVO [rownum=" + rownum + ", factory=" + factory + ", product=" + product
				+ ", productname=" + productname + ", modeltype=" + modeltype + ", flag=" + flag + ", nums=" + nums
				+ "]";
	}

	
	

}
