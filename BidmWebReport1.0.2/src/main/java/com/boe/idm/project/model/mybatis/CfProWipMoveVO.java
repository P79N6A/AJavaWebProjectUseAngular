package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CfProWipMoveVO")
public class CfProWipMoveVO {

	private String productname;
	private String oper_desc;
	private Integer no;
	private double wip;
	private double move;

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getOper_desc() {
		return oper_desc;
	}

	public void setOper_desc(String oper_desc) {
		this.oper_desc = oper_desc;
	}

	public Integer getNo() {
		return no;
	}

	public void setNo(Integer no) {
		this.no = no;
	}

	public double getWip() {
		return wip;
	}

	public void setWip(double wip) {
		this.wip = wip;
	}

	public double getMove() {
		return move;
	}

	public void setMove(double move) {
		this.move = move;
	}

}
