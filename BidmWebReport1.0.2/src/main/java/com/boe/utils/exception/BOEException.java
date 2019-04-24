package com.boe.utils.exception;

public class BOEException extends Exception {

	private static final long serialVersionUID = -3454499080056161228L;
	
	private String message;
	
	public BOEException(String message) {
		this.message = message;
	}
	
	public String getMessage() {
		return this.message;
	}

}
