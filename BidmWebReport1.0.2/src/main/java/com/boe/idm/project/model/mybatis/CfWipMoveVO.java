package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfWipMoveVO")
public class CfWipMoveVO {
	
	private String item;
	private Integer act;
	private Integer plan;
	private Integer bal;
	private String factoryname;
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public Integer getAct() {
		return act;
	}
	public void setAct(Integer act) {
		this.act = act;
	}
	public Integer getPlan() {
		return plan;
	}
	public void setPlan(Integer plan) {
		this.plan = plan;
	}
	public Integer getBal() {
		return bal;
	}
	public void setBal(Integer bal) {
		this.bal = bal;
	}
	public String getFactoryname() {
		return factoryname;
	}
	public void setFactoryname(String factoryname) {
		this.factoryname = factoryname;
	}
	public CfWipMoveVO(String item, Integer act, Integer plan, Integer bal, String factoryname) {
		super();
		this.item = item;
		this.act = act;
		this.plan = plan;
		this.bal = bal;
		this.factoryname = factoryname;
	}
	public CfWipMoveVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "CfWipMoveVO [item=" + item + ", act=" + act + ", plan=" + plan + ", bal=" + bal + ", factoryname="
				+ factoryname + "]";
	}
	
	
	

}
