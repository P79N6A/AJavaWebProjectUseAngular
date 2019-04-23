package com.whc.log4j;

import org.apache.log4j.Logger;

public class TestLog4j {
	
	private static Logger logger = Logger.getLogger(TestLog4j.class);

	public static void main(String[] args) {
		logger.fatal("1.This is fatal message...");
		logger.error("2.This is error message...");
		logger.warn("3.This is warn messge...");
		logger.info("4.This is info message...");
		logger.debug("5.This is debug message...");
	}

}
