package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ModuleWipLineVO")
public class ModuleWipLineVO {
	private String line;

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}
	
}
