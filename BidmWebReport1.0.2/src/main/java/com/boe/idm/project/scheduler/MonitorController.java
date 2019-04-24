package com.boe.idm.project.scheduler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.boe.idm.project.entity.Notify;
import com.boe.idm.project.enumeration.NotifyLevel;
import com.boe.idm.project.handler.BroadcastHandler;
import com.boe.idm.project.test.Params;

@Controller
public class MonitorController {
	
	private final Logger logger = LoggerFactory.getLogger(MonitorController.class);
	
	@Autowired
	BroadcastHandler broadcast;
	
	@Scheduled(cron="0/2 * * * * *")
	public void monitorParam() {
//		logger.debug("monitor info");
		int value = Params.getValue();
		int limit = Params.getLimitline();
		if (value >= limit && !Params.getAlready()) {
			Params.setAlreadyNotify(true);
			int cha = value-limit;
			String content = "";
			NotifyLevel level = NotifyLevel.WARN;
			if (cha <= 10) {
				content = "那个值超了";
				level = NotifyLevel.WARN;
			} else {
				content = "！！！那个值爆了！！！";
				level = NotifyLevel.ERROR;
			}
			Notify notify = new Notify();
			notify.setTitle("超限提醒");
			notify.setContent(content);
			notify.setNotifyLevel(level);
			broadcast.msgSend(notify);
		} else {
//			System.out.println("value="+Params.getValue()+" limit="+Params.getLimitline()+" notify="+Params.getAlready());
		}
	}

}
