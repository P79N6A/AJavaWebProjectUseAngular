package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CellProkb2VO")
public class CellProkb2VO {

	private String item;
	private double plan_m;
	private double act;
	private double bal;
	private double ratio;

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

	public double getAct() {
		return act;
	}

	public void setAct(double act) {
		this.act = act;
	}

	public double getBal() {
		return bal;
	}

	public void setBal(double bal) {
		this.bal = bal;
	}

	public double getRatio() {
		return ratio;
	}

	public void setRatio(double ratio) {
		this.ratio = ratio;
	}

}
