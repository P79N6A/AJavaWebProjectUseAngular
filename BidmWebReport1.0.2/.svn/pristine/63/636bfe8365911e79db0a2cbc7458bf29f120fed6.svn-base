package com.boe.idm.project.model.mybatis;

import java.util.Objects;

import org.apache.ibatis.type.Alias;

@Alias("ModulePlanVO")
public class ModulePlanVO {
	
	private String factory;
	private String datename;
	private String item;
	private String qty;
	private String owner;
	private int numbs;
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getDatename() {
		return datename;
	}
	public void setDatename(String datename) {
		this.datename = datename;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public int getNumbs() {
		return numbs;
	}
	public void setNumbs(int numbs) {
		this.numbs = numbs;
	}
	public ModulePlanVO(String factory, String datename, String item, String qty, String owner, int numbs) {
		super();
		this.factory = factory;
		this.datename = datename;
		this.item = item;
		this.qty = qty;
		this.owner = owner;
		this.numbs = numbs;
	}
	public ModulePlanVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ModulePlanVO [factory=" + factory + ", datename=" + datename + ", item=" + item + ", qty=" + qty
				+ ", owner=" + owner + ", numbs=" + numbs + "]";
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (this.getClass() != obj.getClass()) {
			return true;
		}
		
		ModulePlanVO modulePlanVO = (ModulePlanVO) obj;
		boolean isequal = Objects.equals(factory, modulePlanVO.factory)
							&& Objects.equals(datename, modulePlanVO.datename)
							&& Objects.equals(item, modulePlanVO.item)
							&& Objects.equals(qty, modulePlanVO.qty)
							&& Objects.equals(owner, modulePlanVO.owner);
		return isequal;
	}
	
	
}
