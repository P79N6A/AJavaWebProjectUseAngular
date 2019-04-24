package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArrayWipKanbanShishiVO")
public class ArrayWipKanbanShishiVO {
	
	 private String productname;
	 private String  modeltype;
	 private String  productiontype;
	 private String  opercode;
	 private String  operdesc;
	 private String  eqpid;
	 private Integer  glsqty;
	 private Integer  lotqty;
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getModeltype() {
		return modeltype;
	}
	public void setModeltype(String modeltype) {
		this.modeltype = modeltype;
	}
	public String getProductiontype() {
		return productiontype;
	}
	public void setProductiontype(String productiontype) {
		this.productiontype = productiontype;
	}
	public String getOpercode() {
		return opercode;
	}
	public void setOpercode(String opercode) {
		this.opercode = opercode;
	}
	public String getOperdesc() {
		return operdesc;
	}
	public void setOperdesc(String operdesc) {
		this.operdesc = operdesc;
	}
	public String getEqpid() {
		return eqpid;
	}
	public void setEqpid(String eqpid) {
		this.eqpid = eqpid;
	}
	public Integer getGlsqty() {
		return glsqty;
	}
	public void setGlsqty(Integer glsqty) {
		this.glsqty = glsqty;
	}
	public Integer getLotqty() {
		return lotqty;
	}
	public void setLotqty(Integer lotqty) {
		this.lotqty = lotqty;
	}
	public ArrayWipKanbanShishiVO(String productname, String modeltype, String productiontype, String opercode,
			String operdesc, String eqpid, Integer glsqty, Integer lotqty) {
		super();
		this.productname = productname;
		this.modeltype = modeltype;
		this.productiontype = productiontype;
		this.opercode = opercode;
		this.operdesc = operdesc;
		this.eqpid = eqpid;
		this.glsqty = glsqty;
		this.lotqty = lotqty;
	}
	public ArrayWipKanbanShishiVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ArrayWipKanbanShishiVO [productname=" + productname + ", modeltype=" + modeltype + ", productiontype="
				+ productiontype + ", opercode=" + opercode + ", operdesc=" + operdesc + ", eqpid=" + eqpid
				+ ", glsqty=" + glsqty + ", lotqty=" + lotqty + "]";
	}
	
	 
	 

}
