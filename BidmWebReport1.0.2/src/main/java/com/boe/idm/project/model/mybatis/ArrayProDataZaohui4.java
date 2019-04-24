package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArrayProDataZaohui4")
public class ArrayProDataZaohui4 {

	private String datename;
	private String eqp_state;
	private double ratio;

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public String getEqp_state() {
		return eqp_state;
	}

	public void setEqp_state(String eqp_state) {
		this.eqp_state = eqp_state;
	}

	public double getRatio() {
		return ratio;
	}

	public void setRatio(double ratio) {
		this.ratio = ratio;
	}

}
