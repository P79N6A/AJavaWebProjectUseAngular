package com.boe.idm.project.scheduler;

import java.text.DecimalFormat;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.boe.idm.project.boeweixin.tool.BoeWeixinToAll;
import com.boe.idm.project.model.mybatis.AlarmActJD;
import com.boe.idm.project.model.mybatis.AlarmReceiver;
import com.boe.idm.project.service.AlarmActJDService;
import com.boe.idm.project.service.AlarmReceiverService;

@Controller
public class AlarmJDSchedulerController {

	private static Logger log = LoggerFactory.getLogger(AlarmJDSchedulerController.class);

	@Autowired
	private AlarmActJDService actService;

	@Autowired
	private AlarmReceiverService receiverService;

	@Scheduled(cron = "0 1/10 * * * ? ")
	// @Scheduled(cron = "0/5 * * * * ? ")
	public void refresh() throws Exception {
		System.out.println("------定时任务开启--------");

		List<AlarmActJD> actJD = actService.getActJD();

		if (actJD.size() != 0) {
			StringBuilder sendContent = new StringBuilder("");
			String receiver = actJD.get(0).getGroup_id();
			DecimalFormat decimalFormat = new DecimalFormat("###################.###########");

			List<AlarmReceiver> list = receiverService.getReceiver(receiver);
			for (AlarmActJD alarmActJD : actJD) {
				sendContent.append("层数: ").append(alarmActJD.getSlot()).append("    设备: ")
						.append(alarmActJD.getEqp_id()).append("    状态: ").append(alarmActJD.getEqp_state())
						.append("    时间: ").append(decimalFormat.format(alarmActJD.getDuration())).append("\n");
			}

			BoeWeixinToAll.sendToAll(list, "设备稼动报警", sendContent.toString(), "");

		}

		System.out.println("------定时任务结束--------");

	}
}
