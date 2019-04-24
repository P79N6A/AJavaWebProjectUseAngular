package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("AlarmAct")
public class AlarmAct {

	private int spec_id;
	private String item;
	private String type;
	private String flag;
	private double qty;

	public int getSpec_id() {
		return spec_id;
	}

	public void setSpec_id(int spec_id) {
		this.spec_id = spec_id;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public double getQty() {
		return qty;
	}

	public void setQty(double qty) {
		this.qty = qty;
	}

}
