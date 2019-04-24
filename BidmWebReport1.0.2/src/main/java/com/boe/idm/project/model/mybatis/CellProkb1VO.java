package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CellProkb1VO")
public class CellProkb1VO {

	private String datename;
	private String item;
	private double plan_m;
	private double plan_d;
	private double act;

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public double getPlan_m() {
		return plan_m;
	}

	public void setPlan_m(double plan_m) {
		this.plan_m = plan_m;
	}

	public double getPlan_d() {
		return plan_d;
	}

	public void setPlan_d(double plan_d) {
		this.plan_d = plan_d;
	}

	public double getAct() {
		return act;
	}

	public void setAct(double act) {
		this.act = act;
	}

}
