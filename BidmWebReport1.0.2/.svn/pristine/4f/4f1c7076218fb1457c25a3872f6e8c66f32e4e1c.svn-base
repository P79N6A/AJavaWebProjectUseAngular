package com.boe.idm.project.config;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.websocket.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.boe.idm.project.handler.BroadcastHandler;
import com.boe.idm.project.handler.WebsocketHandler;


@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{
	
	@Autowired
	WebsocketHandler websocketHandler;
	
	@Autowired
	BroadcastHandler broadcastHandler;
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		//서버가 연결한 끝점 및 모든 요청 허용
		//服务器的连接及所有要求
		registry.addHandler(websocketHandler, "/api/websocket").setAllowedOrigins("*");
		registry.addHandler(broadcastHandler, "/api/broadcast").setAllowedOrigins("*");
//		.withSockJS();	
	}
	
}

