package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CstInfoRatio")
public class CstInfoRatio {
	private String cst_spec;
	private String factory;
	private String type;
	private double full_ratio;
	private double pro;
	private double eng;
	private double dev;
	private double dum;

	public String getCst_spec() {
		return cst_spec;
	}

	public void setCst_spec(String cst_spec) {
		this.cst_spec = cst_spec;
	}

	public String getFactory() {
		return factory;
	}

	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getFull_ratio() {
		return full_ratio;
	}

	public void setFull_ratio(double full_ratio) {
		this.full_ratio = full_ratio;
	}

	public double getPro() {
		return pro;
	}

	public void setPro(double pro) {
		this.pro = pro;
	}

	public double getEng() {
		return eng;
	}

	public void setEng(double eng) {
		this.eng = eng;
	}

	public double getDev() {
		return dev;
	}

	public void setDev(double dev) {
		this.dev = dev;
	}

	public double getDum() {
		return dum;
	}

	public void setDum(double dum) {
		this.dum = dum;
	}
}
