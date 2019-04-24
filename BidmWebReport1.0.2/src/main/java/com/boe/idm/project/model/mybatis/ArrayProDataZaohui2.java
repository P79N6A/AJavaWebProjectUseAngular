package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArrayProDataZaohui2")
public class ArrayProDataZaohui2 {
	private String datename;
	private double ar_in;
	private double ar_out;
	private double cl_in;

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public double getAr_in() {
		return ar_in;
	}

	public void setAr_in(double ar_in) {
		this.ar_in = ar_in;
	}

	public double getAr_out() {
		return ar_out;
	}

	public void setAr_out(double ar_out) {
		this.ar_out = ar_out;
	}

	public double getCl_in() {
		return cl_in;
	}

	public void setCl_in(double cl_in) {
		this.cl_in = cl_in;
	}

}
