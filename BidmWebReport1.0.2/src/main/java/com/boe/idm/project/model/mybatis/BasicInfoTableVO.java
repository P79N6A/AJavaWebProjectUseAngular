package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("BasicInfoTableVO")
public class BasicInfoTableVO {
	
	private String factory;
	private String oper_code;
	private String oper_name;
	private String operation;
	private String operationdesc;
	private String no;
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getOper_code() {
		return oper_code;
	}
	public void setOper_code(String oper_code) {
		this.oper_code = oper_code;
	}
	public String getOper_name() {
		return oper_name;
	}
	public void setOper_name(String oper_name) {
		this.oper_name = oper_name;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public String getOperationdesc() {
		return operationdesc;
	}
	public void setOperationdesc(String operationdesc) {
		this.operationdesc = operationdesc;
	}
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}

}
