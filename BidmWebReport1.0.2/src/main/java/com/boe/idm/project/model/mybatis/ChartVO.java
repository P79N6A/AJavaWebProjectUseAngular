package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ChartVO")
public class ChartVO {
	
	private int chartKey;
	private double col1;
	private double col2;
	private double col3;
	private double col4;
	private double col5;
	private double col6;
	private double col7;
	private double col8;
	private double col9;
	
	private int totalRecords;
	
	
	public int getChartKey() {
		return chartKey;
	}
	public void setChartKey(int chartKey) {
		this.chartKey = chartKey;
	}
	public double getCol1() {
		return col1;
	}
	public void setCol1(double col1) {
		this.col1 = col1;
	}
	public double getCol2() {
		return col2;
	}
	public void setCol2(double col2) {
		this.col2 = col2;
	}
	public double getCol3() {
		return col3;
	}
	public void setCol3(double col3) {
		this.col3 = col3;
	}
	public double getCol4() {
		return col4;
	}
	public void setCol4(double col4) {
		this.col4 = col4;
	}
	public double getCol5() {
		return col5;
	}
	public void setCol5(double col5) {
		this.col5 = col5;
	}
	public double getCol6() {
		return col6;
	}
	public void setCol6(double col6) {
		this.col6 = col6;
	}
	public double getCol7() {
		return col7;
	}
	public void setCol7(double col7) {
		this.col7 = col7;
	}
	public double getCol8() {
		return col8;
	}
	public void setCol8(double col8) {
		this.col8 = col8;
	}
	public double getCol9() {
		return col9;
	}
	public void setCol9(double col9) {
		this.col9 = col9;
	}
	public int getTotalRecords() {
		return totalRecords;
	}
	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}
}
