package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfProStkRtoVO")
public class CfProStkRtoVO {

	private String machinename;
	private double fullqty;
	private double fullratio;

	public String getMachinename() {
		return machinename;
	}

	public void setMachinename(String machinename) {
		this.machinename = machinename;
	}

	public double getFullqty() {
		return fullqty;
	}

	public void setFullqty(double fullqty) {
		this.fullqty = fullqty;
	}

	public double getFullratio() {
		return fullratio;
	}

	public void setFullratio(double fullratio) {
		this.fullratio = fullratio;
	}

}
