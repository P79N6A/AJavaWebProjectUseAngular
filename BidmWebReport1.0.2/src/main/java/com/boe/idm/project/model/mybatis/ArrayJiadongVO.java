package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArrayJiadongVO")
public class ArrayJiadongVO {
	private String eqp_id;
	private String eqp_state;
	private double duration;
	public String getEqp_id() {
		return eqp_id;
	}
	public void setEqp_id(String eqp_id) {
		this.eqp_id = eqp_id;
	}
	public String getEqp_state() {
		return eqp_state;
	}
	public void setEqp_state(String eqp_state) {
		this.eqp_state = eqp_state;
	}
	public double getDuration() {
		return duration;
	}
	public void setDuration(double duration) {
		this.duration = duration;
	}
}
