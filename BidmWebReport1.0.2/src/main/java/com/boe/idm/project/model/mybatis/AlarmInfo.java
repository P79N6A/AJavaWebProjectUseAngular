package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("AlarmInfo")
public class AlarmInfo {
	private int spec_id;
	private String name;
	private double qty;
	private int no;

	public int getSpec_id() {
		return spec_id;
	}

	public void setSpec_id(int spec_id) {
		this.spec_id = spec_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getQty() {
		return qty;
	}

	public void setQty(double qty) {
		this.qty = qty;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	@Override
	public String toString() {
		return "AlarmInfo [spec_id=" + spec_id + ", name=" + name + ", qty=" + qty + ", no=" + no + "]";
	}

}
