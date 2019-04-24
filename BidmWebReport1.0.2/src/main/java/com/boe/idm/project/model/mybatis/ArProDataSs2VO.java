package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArProDataSs2VO")
public class ArProDataSs2VO {

	private String machinename;
	private double fullratio;

	public String getMachinename() {
		return machinename;
	}

	public void setMachinename(String machinename) {
		this.machinename = machinename;
	}

	public double getFullratio() {
		return fullratio;
	}

	public void setFullratio(double fullratio) {
		this.fullratio = fullratio;
	}

}
