package com.boe.idm.project.handler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.boe.idm.project.entity.Notify;

@Component
public class BroadcastHandler extends TextWebSocketHandler {
	
	private final Logger log = LoggerFactory.getLogger(BroadcastHandler.class);
	
	private static Map<String, WebSocketSession> userSession = new HashMap<String, WebSocketSession>();
	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) {
		;
	}
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) {
		userSession.put(session.getId(), session);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		userSession.remove(session.getId());
	}
	
	public void msgSend(Notify notify) {
		log.debug("======Notify Send======");
		for (Entry<String, WebSocketSession> map : userSession.entrySet()) {
			try {
				map.getValue().sendMessage(new TextMessage(notify.toJson().toString()));
			} catch (IOException e) {
				e.printStackTrace();
				continue;
			}
		}
	}

}
