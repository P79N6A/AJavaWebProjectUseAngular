package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CellWipVO")
public class CellWipVO {
	
	public String oper_desc;
	public int date_before_2;
	public int date_before_1;
	public int date_before_0;
	public int date_current;
	public int date_move;
	private double date_move_current;

	public double getDate_move_current() {
		return date_move_current;
	}
	public void setDate_move_current(double date_move_current) {
		this.date_move_current = date_move_current;
	}
	public int getDate_move() {
		return date_move;
	}
	public void setDate_move(int date_move) {
		this.date_move = date_move;
	}
	public String getOper_desc() {
		return oper_desc;
	}
	public void setOper_desc(String oper_desc) {
		this.oper_desc = oper_desc;
	}
	public int getDate_before_2() {
		return date_before_2;
	}
	public void setDate_before_2(int date_before_2) {
		this.date_before_2 = date_before_2;
	}
	public int getDate_before_1() {
		return date_before_1;
	}
	public void setDate_before_1(int date_before_1) {
		this.date_before_1 = date_before_1;
	}
	public int getDate_before_0() {
		return date_before_0;
	}
	public void setDate_before_0(int date_before_0) {
		this.date_before_0 = date_before_0;
	}
	public int getDate_current() {
		return date_current;
	}
	public void setDate_current(int date_current) {
		this.date_current = date_current;
	}
	
	
	

}
