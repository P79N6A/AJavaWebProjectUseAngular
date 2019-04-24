package com.boe.idm.project.handler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class WebsocketHandler extends TextWebSocketHandler {
    private final Logger log = LoggerFactory.getLogger(WebsocketHandler.class);
    
	private Map<String, WebSocketSession> userSession = new HashMap<>();
    
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		try {
			for(Entry<String, WebSocketSession> map : userSession.entrySet()) 
			{
				map.getValue().sendMessage(new TextMessage( "hello" ));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		userSession.put(session.getId(), session);			
	}
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		userSession.remove(session.getId());
	}
	
	public void msgSend(String data) throws Exception{
		try {
			for(Entry<String, WebSocketSession> map : userSession.entrySet()) 
			{
				map.getValue().sendMessage(new TextMessage(data));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}	

}