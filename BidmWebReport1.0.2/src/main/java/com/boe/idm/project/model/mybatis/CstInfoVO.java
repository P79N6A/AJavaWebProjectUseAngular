package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

import com.boe.utils.json.JsonGenerator;

@Alias("CstInfoVO")
public class CstInfoVO implements JsonGenerator {
	private String cst_spec;
	private String factory;
	private String type;
	private String full_ratio;
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

	public String getFull_ratio() {
		return full_ratio;
	}

	public void setFull_ratio(String full_ratio) {
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

	@Override
	public String toString() {
		return "CstInfoVO [cst_spec=" + cst_spec + ", factory=" + factory + ", type=" + type + ", full_ratio="
				+ full_ratio + ", pro=" + pro + ", eng=" + eng + ", dev=" + dev + ", dum=" + dum + "]";
	}
	
	
}
