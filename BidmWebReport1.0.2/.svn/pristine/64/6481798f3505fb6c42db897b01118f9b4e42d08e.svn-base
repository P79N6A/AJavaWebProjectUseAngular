package com.boe.idm.project.controller;

import java.io.BufferedReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.test.Params;

@RestController
@RequestMapping("/api/test")
public class TestController {
	
	public static Logger log = LoggerFactory.getLogger(TestController.class);
	
	@RequestMapping(value="/param/set", method = RequestMethod.POST)
	public String paramSet(HttpServletRequest request, HttpServletResponse response) {
		StringBuffer sb = new StringBuffer();
		String line = null;
		try {
			BufferedReader reader = request.getReader();
			while (null != (line = reader.readLine())) {
				sb.append(line);
			}
		} catch (Exception ex) {
			;
		}
		log.info("receive:" + sb.toString());
		Params.setValue(Integer.parseInt(sb.toString()));
		return "ok";
	}

}
