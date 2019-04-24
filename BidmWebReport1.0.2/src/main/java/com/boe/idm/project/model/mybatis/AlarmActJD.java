package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("AlarmActJD")
public class AlarmActJD {
	private int spec_id;
	private String slot;
	private String eqp_id;
	private String eqp_state;
	private double duration;
	private String group_id;

	public int getSpec_id() {
		return spec_id;
	}

	public void setSpec_id(int spec_id) {
		this.spec_id = spec_id;
	}

	public String getSlot() {
		return slot;
	}

	public void setSlot(String slot) {
		this.slot = slot;
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

	public String getGroup_id() {
		return group_id;
	}

	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}

	@Override
	public String toString() {
		return "AlarmActJD [spec_id=" + spec_id + ", slot=" + slot + ", eqp_id=" + eqp_id + ", eqp_state=" + eqp_state
				+ ", duration=" + duration + ", group_id=" + group_id + "]";
	}

}