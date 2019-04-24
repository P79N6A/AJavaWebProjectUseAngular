package com.boe.idm.project.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.entity.Notify;
import com.boe.idm.project.handler.BroadcastHandler;
import com.boe.idm.project.handler.WebsocketHandler;

@RestController
@RequestMapping("/api")
public class WebsocketPushController {
	
	@Autowired
	private WebsocketHandler websocketHandler;
	
	@Autowired
	private BroadcastHandler broadcastHandler;
	
	@RequestMapping(value="/push/dashboardMsg", method = RequestMethod.GET)
	public int testDahboardMsg(
			HttpServletRequest request, 
			HttpServletResponse response
			) throws Exception {
		
//		real send data
		websocketHandler.msgSend("50");
		return 0;
	}
	
	
	@RequestMapping(value="/push/dashboard", method = RequestMethod.GET)
	public int testDahboard(
			HttpServletRequest request, 
			HttpServletResponse response
			) throws Exception {
		
//		real send data
		//websocketHandler.msgSend("hello");
		Notify notify = new Notify();
		notify.setTitle("50");
		broadcastHandler.msgSend(notify);
		
		return 0;
	}
}
