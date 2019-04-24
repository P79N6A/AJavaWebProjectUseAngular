package com.boe.idm.project.boeweixin.tool;

import java.util.List;

import com.boe.bidm.notify.BoeWeixin;
import com.boe.idm.project.model.mybatis.AlarmReceiver;

public class BoeWeixinToAll extends BoeWeixin {

	private final static BoeWeixin boe = new BoeWeixin("10049479");

	public static void sendToAll(List<AlarmReceiver> list, String title, String content, String handleUrl)
			throws Exception {
		for (AlarmReceiver receiver : list) {
			boe.sendMsg(receiver.getUser_id(), title, content, handleUrl);
		}
	}

}
