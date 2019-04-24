package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("AlarmSpec")
public class AlarmSpec {

	private int spec_id;
	private String item;
	private String type;
	private String flag;
	private String group_id;
	private double spec_limit;
	private String compare;

	public int getSpec_id() {
		return spec_id;
	}

	public void setSpec_id(int spec_id) {
		this.spec_id = spec_id;
	}

	public String getGroup_id() {
		return group_id;
	}

	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public double getSpec_limit() {
		return spec_limit;
	}

	public void setSpec_limit(double spec_limit) {
		this.spec_limit = spec_limit;
	}

	public String getCompare() {
		return compare;
	}

	public void setCompare(String compare) {
		this.compare = compare;
	}

	@Override
	public String toString() {
		return "AlarmSpec [spec_id=" + spec_id + ", item=" + item + ", type=" + type + ", flag=" + flag + ", group_id="
				+ group_id + ", spec_limit=" + spec_limit + ", compare=" + compare + "]";
	}

}
