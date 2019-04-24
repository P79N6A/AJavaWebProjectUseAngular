package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ItemVO")
public class ItemVO {
	
	
	private int itemKey;
	private String col1;
	private String col2;
	private String col3;
	private String col4;
	private String col5;
	private String col6;
	
	private String itemTable;
	
	public int getItemKey() {
		return itemKey;
	}
	public void setItemKey(int itemKey) {
		this.itemKey = itemKey;
	}
	public String getCol1() {
		return col1;
	}
	public void setCol1(String col1) {
		this.col1 = col1;
	}
	public String getCol2() {
		return col2;
	}
	public void setCol2(String col2) {
		this.col2 = col2;
	}
	public String getCol3() {
		return col3;
	}
	public void setCol3(String col3) {
		this.col3 = col3;
	}
	public String getCol4() {
		return col4;
	}
	public void setCol4(String col4) {
		this.col4 = col4;
	}
	public String getCol5() {
		return col5;
	}
	public void setCol5(String col5) {
		this.col5 = col5;
	}
	public String getCol6() {
		return col6;
	}
	public void setCol6(String col6) {
		this.col6 = col6;
	}
	public String getItemTable() {
		return itemTable;
	}
	public void setItemTable(String itemTable) {
		this.itemTable = itemTable;
	}

	
}
