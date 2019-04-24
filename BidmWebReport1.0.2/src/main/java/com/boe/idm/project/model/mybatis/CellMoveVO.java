package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CellMoveVO")
public class CellMoveVO {
	private String oper_desc;
	private double date_before_3;
	private double date_before_2;
	private double date_before_1;
	private double date_current;
	public String getOper_desc() {
		return oper_desc;
	}
	public void setOper_desc(String oper_desc) {
		this.oper_desc = oper_desc;
	}
	public double getDate_before_3() {
		return date_before_3;
	}
	public void setDate_before_3(double date_before_3) {
		this.date_before_3 = date_before_3;
	}
	public double getDate_before_2() {
		return date_before_2;
	}
	public void setDate_before_2(double date_before_2) {
		this.date_before_2 = date_before_2;
	}
	public double getDate_before_1() {
		return date_before_1;
	}
	public void setDate_before_1(double date_before_1) {
		this.date_before_1 = date_before_1;
	}
	public double getDate_current() {
		return date_current;
	}
	public void setDate_current(double date_current) {
		this.date_current = date_current;
	}
	
	
}
