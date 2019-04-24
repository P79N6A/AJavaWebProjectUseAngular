package com.boe.idm.project.handler;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.boe.idm.project.model.mybatis.CstInfo4VO;
import com.boe.idm.project.model.mybatis.CstInfoEmptyVO;
import com.boe.idm.project.model.mybatis.CstInfoVO;
import com.boe.idm.project.model.mybatis.CstStockerInfoVO;
import com.boe.idm.project.service.CstInfoService;

@Component
public class CSTinfoWebsocketHandler extends TextWebSocketHandler {

	//这个是进行日志打印的内容
	private final Logger log = LoggerFactory.getLogger(CSTinfoWebsocketHandler.class);
	
	//这个是用来保存 usersession的内容
	Map<String, WebSocketSession> userSession = new HashMap<String, WebSocketSession>();
	
	//用来调用 方法的对象 ，查询 页面上需要的数据信息的 
	@Autowired
	private CstInfoService cstinfoService;
	
	//1.建立完成连接之后的方法
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		
		log.info("CSTinfoWebsocketHandler 连接！" );
		userSession.put(session.getId(), session);
		log.info("CSTinfoWebsocketHandler userSession put 成功！");
	}
	
	//2.关闭连接时的方法 
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		
		log.info("CSTinfoWebsocketHandler 关闭连接！");
		userSession.remove(session.getId());
		log.info("CSTinfoWebsocketHandler 关闭连接成功！");
		
	}

	//3.处理 信息的方法 ： 其中可能要调用自己写的方法进行 信息的传递
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		session.sendMessage(message);
	}

	//4.处理传输时候的异常的方法：先不写
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		super.handleTransportError(session, exception);
	}
	
	//5.自己定义的传输信息的方法
	public void msgSend(JSONObject jsonObject){
		for(Entry<String, WebSocketSession> map : userSession.entrySet()){
			try {
				System.out.println("传进来的 数据是  ：   ===================〉"+jsonObject);
				map.getValue().sendMessage(new TextMessage(jsonObject.toString()));
			
			} catch (IOException e) {
				log.warn(map.getKey()+ " : 传送信息时出现错误 ；传送的信息为 ： "+jsonObject);
				e.printStackTrace();
			}
		}
	}
	

	/**
	 * 6.定义的查询数据的方法 ： 返回值是一个JSONObject形式的 
	 * @throws Exception :　调用的方法中可能有异常，直接抛出
	 * 
	 */	
	public JSONObject queryCSTinfoPageData() throws Exception{
		JSONObject jsonObject = new JSONObject();
		
		List<CstInfoVO> list1 =  cstinfoService.getInit();
		jsonObject.put("cstinfo", list1);
		
		List<CstInfoEmptyVO> list2 = cstinfoService.getInit1();
		jsonObject.put("cstinfoempty", list2);
		
		List<CstStockerInfoVO> list3 = cstinfoService.getInit2();
		jsonObject.put("cststockereqpinfo", list3);
		
		List<CstStockerInfoVO> list4 = cstinfoService.getInit3();
		jsonObject.put("cststockerinfo", list4);
		
		List<CstInfo4VO> list5 = cstinfoService.getInit4();
		jsonObject.put("cstinfo4vo", list5);
		
		return jsonObject;
	}

	
}
