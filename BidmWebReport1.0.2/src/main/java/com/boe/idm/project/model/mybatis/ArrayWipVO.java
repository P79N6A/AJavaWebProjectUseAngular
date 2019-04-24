package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArrayWipVO")
public class ArrayWipVO {
	private String oper_desc;
	private double date_before_2;
	private double date_before_1;
	private double date_before_0;
	private double date_current;
	private double date_move_current;
	
	public double getDate_move_current() {
		return date_move_current;
	}
	public void setDate_move_current(double date_move_current) {
		this.date_move_current = date_move_current;
	}
	public double getDate_move() {
		return date_move;
	}
	public void setDate_move(double date_move) {
		this.date_move = date_move;
	}
	private double date_move;
	public String getOper_desc() {
		return oper_desc;
	}
	public void setOper_desc(String oper_desc) {
		this.oper_desc = oper_desc;
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
	public double getDate_before_0() {
		return date_before_0;
	}
	public void setDate_before_0(double date_before_0) {
		this.date_before_0 = date_before_0;
	}
	public double getDate_current() {
		return date_current;
	}
	public void setDate_current(double date_current) {
		this.date_current = date_current;
	}
	

	

}
