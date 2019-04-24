package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ArProDataSs3VO")
public class ArProDataSs3VO {

	private String start_time;
	private String eqp_id;
	private String eqp_state;
	private double duration;

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

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
