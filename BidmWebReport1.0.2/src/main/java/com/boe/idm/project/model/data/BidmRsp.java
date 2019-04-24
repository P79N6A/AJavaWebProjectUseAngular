package com.boe.idm.project.model.data;

import com.boe.utils.json.JsonGenerator;

public class BidmRsp implements JsonGenerator {
	
	protected boolean result;
	protected String message;
	
	public boolean isResult() {
		return result;
	}
	
	public void setResult(boolean result) {
		this.result = result;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}

}
