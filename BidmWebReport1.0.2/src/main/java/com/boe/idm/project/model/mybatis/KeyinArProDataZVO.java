package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("KeyinArProDataZVO")
public class KeyinArProDataZVO {
	public String datename;
	public String report;
	public String item;
	public String remark;

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public String getReport() {
		return report;
	}

	public void setReport(String report) {
		this.report = report;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

}
