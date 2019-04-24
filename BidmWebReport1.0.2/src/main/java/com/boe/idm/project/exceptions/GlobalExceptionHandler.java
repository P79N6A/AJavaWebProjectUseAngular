package com.boe.idm.project.exceptions;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class GlobalExceptionHandler {  

	private Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	@ExceptionHandler(value = Exception.class)  
//	public String handleBadRequest(Exception e){  
//		return e.getMessage();
//	}
	
//	@ResponseStatus(HttpStatus.CONFLICT)  
//	@ExceptionHandler(value = Exception.class)  
//	public String handleConflict(Exception e){  
//		return e.getMessage();  
//	}

	@ExceptionHandler(value = Exception.class)  
	public ModelAndView handleException(Exception e, HttpServletRequest req,HttpServletResponse response){
		log.error(e.getMessage(), e);
		//return e.getMessage();
		
		ModelAndView mav = new ModelAndView("jsonView");
   	    mav.addObject("exception", e);
		mav.addObject("url", req.getRequestURL());
		mav.addObject("message", e.getMessage());
		mav.addObject("status", HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		return mav;
		
		
	}

}  
