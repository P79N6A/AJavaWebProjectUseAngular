package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("OeeAeInfoVO")
public class OeeAeInfoVO {

	private String datename;
	private String oper;
	private String first_state;
	private String second_state;
	private double ratio;

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public String getOper() {
		return oper;
	}

	public void setOper(String oper) {
		this.oper = oper;
	}

	public String getFirst_state() {
		return first_state;
	}

	public void setFirst_state(String first_state) {
		this.first_state = first_state;
	}

	public String getSecond_state() {
		return second_state;
	}

	public void setSecond_state(String second_state) {
		this.second_state = second_state;
	}

	public double getRatio() {
		return ratio;
	}

	public void setRatio(double ratio) {
		this.ratio = ratio;
	}

}
