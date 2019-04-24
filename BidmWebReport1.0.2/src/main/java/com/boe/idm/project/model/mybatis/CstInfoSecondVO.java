package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CstInfoSecondVO")
public class CstInfoSecondVO {
	
	private String cst_id;
	private double days;
	private String operation;
	private String eqp;
	private String lot_id;
	private String product;
	private double qty;
	private String holdstate;
	private String lot_comment;
	private String lot_time;
	private String cst_comment;
	private String cst_time;
	public String getCst_id() {
		return cst_id;
	}
	public void setCst_id(String cst_id) {
		this.cst_id = cst_id;
	}
	public double getDays() {
		return days;
	}
	public void setDays(double days) {
		this.days = days;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public String getEqp() {
		return eqp;
	}
	public void setEqp(String eqp) {
		this.eqp = eqp;
	}
	public String getLot_id() {
		return lot_id;
	}
	public void setLot_id(String lot_id) {
		this.lot_id = lot_id;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public double getQty() {
		return qty;
	}
	public void setQty(double qty) {
		this.qty = qty;
	}
	public String getHoldstate() {
		return holdstate;
	}
	public void setHoldstate(String holdstate) {
		this.holdstate = holdstate;
	}
	public String getLot_comment() {
		return lot_comment;
	}
	public void setLot_comment(String lot_comment) {
		this.lot_comment = lot_comment;
	}
	public String getLot_time() {
		return lot_time;
	}
	public void setLot_time(String lot_time) {
		this.lot_time = lot_time;
	}
	public String getCst_comment() {
		return cst_comment;
	}
	public void setCst_comment(String cst_comment) {
		this.cst_comment = cst_comment;
	}
	public String getCst_time() {
		return cst_time;
	}
	public void setCst_time(String cst_time) {
		this.cst_time = cst_time;
	}
}
