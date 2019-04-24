package com.boe.idm.project.scheduler;

import java.text.DecimalFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.boe.idm.project.boeweixin.tool.BoeWeixinToAll;
import com.boe.idm.project.model.mybatis.AlarmActSortBank;
import com.boe.idm.project.model.mybatis.AlarmReceiver;
import com.boe.idm.project.service.AlarmActSortBankService;
import com.boe.idm.project.service.AlarmReceiverService;

@Controller
public class AlarmSortBankSchedulerController {

	@Autowired
	private AlarmActSortBankService actSortBankSercie;

	@Autowired
	private AlarmReceiverService receiverService;

	@Scheduled(cron = "0 8 0/1 * * ? ")
	// @Scheduled(cron = "0/5 * * * * ? ")
	public void refresh() throws Exception {
		System.out.println("------定时任务开启--------");

		List<AlarmActSortBank> actSortBank = actSortBankSercie.getActSortBank();

		if (actSortBank.size() != 0) {
			StringBuilder sendContent = new StringBuilder("");
			String receiver = actSortBank.get(0).getGroup_id();
			DecimalFormat decimalFormat = new DecimalFormat("###################.###########");

			List<AlarmReceiver> list = receiverService.getReceiver(receiver);
			for (AlarmActSortBank alarmActSortBank : actSortBank) {
				sendContent.append(alarmActSortBank.getProductname()).append("    TFT: ")
						.append(decimalFormat.format(alarmActSortBank.getTft())).append("    CF: ")
						.append(decimalFormat.format(alarmActSortBank.getCf())).append("    Pair: ")
						.append(decimalFormat.format(alarmActSortBank.getPair())).append("    4H: ")
						.append(decimalFormat.format(alarmActSortBank.getPlanqty_4())).append("\n");
			}

			BoeWeixinToAll.sendToAll(list, "SortBank报警", sendContent.toString(), "");

		}

		System.out.println("------定时任务结束--------");

	}

}
