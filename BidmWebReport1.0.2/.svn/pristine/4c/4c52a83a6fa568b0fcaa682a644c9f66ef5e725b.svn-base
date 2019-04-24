package com.boe.idm.project.scheduler;



import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.boe.idm.project.handler.CSTinfoWebsocketHandler;

@Controller
public class CSTinfoWebsocketController {
	
	private static Logger log = LoggerFactory.getLogger(CSTinfoWebsocketController.class); 
	
	@Autowired
	private CSTinfoWebsocketHandler csTinfoWebsocketHandler;
	
	/**
	 * 此方法 定时执行，每一分钟执行一次，调用了 handler中的方法，查询数据，然后发送到前端去
	 * @throws Exception
	 */
	@Scheduled(cron="0 0/10 * * * *")
	public void testSEndMsg() throws Exception{
		log.info("testSEndMsg 成功进入到这个方法。。。");
		JSONObject jsonObject = csTinfoWebsocketHandler.queryCSTinfoPageData();
		csTinfoWebsocketHandler.msgSend(jsonObject);
	}

}
