package com.boe.idm.project.scheduler;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.boe.idm.project.boeweixin.tool.BoeWeixinToAll;
import com.boe.idm.project.model.mybatis.AlarmAct;
import com.boe.idm.project.model.mybatis.AlarmInfo;
import com.boe.idm.project.model.mybatis.AlarmReceiver;
import com.boe.idm.project.model.mybatis.AlarmSpec;
import com.boe.idm.project.service.AlarmActService;
import com.boe.idm.project.service.AlarmInfoService;
import com.boe.idm.project.service.AlarmReceiverService;
import com.boe.idm.project.service.AlarmSpecService;

@Controller
public class AlarmCstSchedulerController {

	@Autowired
	private AlarmActService actService;

	@Autowired
	private AlarmSpecService specService;

	@Autowired
	private AlarmReceiverService receiverService;

	@Autowired
	private AlarmInfoService infoService;

	private final Logger logger = LoggerFactory.getLogger(AlarmCstSchedulerController.class);

	@Scheduled(cron = "0 8 0/1 * * ? ")
	// @Scheduled(cron = "0/5 * * * * ? ")
	public void refresh() throws Exception {
		System.out.println("------定时任务开启--------");
		List<AlarmAct> alarmActList = actService.getAct();

		Set<Integer> set = new HashSet<Integer>();

		for (AlarmAct alarmAct : alarmActList) {
			set.add(alarmAct.getSpec_id());
		}

		for (Integer specId : set) {
			alarm(specId, alarmActList);
		}

		System.out.println("------定时任务结束--------");

	}

	public void alarm(Integer specID, List<AlarmAct> alarmActList) throws Exception {
		List<Boolean> spec1 = new ArrayList<>();

		String receiverGroup = null;
		for (AlarmAct act : alarmActList) {
			if (act.getSpec_id() == (specID)) {
				Map<String, Object> paraMap = new HashMap<String, Object>();
				paraMap.put("item", act.getItem());
				paraMap.put("type", act.getType());
				paraMap.put("flag", act.getFlag());
				double actQty = act.getQty();
				List<AlarmSpec> alarmSpec = specService.getSpec(paraMap);
				System.out.println("标准值:" + alarmSpec);
				System.out.println("实际值:" + actQty);
				receiverGroup = alarmSpec.get(0).getGroup_id();
				boolean specFlag;
				if (alarmSpec.get(0).getCompare().equals("小于")) {
					specFlag = actQty < alarmSpec.get(0).getSpec_limit();
				} else if (alarmSpec.get(0).getCompare().equals("大于")) {
					specFlag = actQty > alarmSpec.get(0).getSpec_limit();
				} else {
					specFlag = false;
				}
				spec1.add(specFlag);
			}
		}

		boolean spec = spec1.get(0);
		for (boolean b : spec1) {
			spec = spec && b;
		}

		if (spec) {
			List<AlarmReceiver> list = receiverService.getReceiver(receiverGroup);

			List<AlarmInfo> alarmInfoList = infoService.getInfoList(specID);
			List<AlarmInfo> alarmInfoHist = infoService.getInfoHist(specID);
			// System.out.println(alarmInfoList);
			// System.out.println(alarmInfoHist);

			Set<AlarmInfo> infoSet = new TreeSet<AlarmInfo>(new Comparator<AlarmInfo>() {
				@Override
				public int compare(AlarmInfo o1, AlarmInfo o2) {
					return o1.getNo() - o2.getNo();
				}
			});

			for (AlarmInfo info : alarmInfoList) {
				infoSet.add(info);
			}
			for (AlarmInfo info : alarmInfoHist) {
				infoSet.add(info);
			}

			System.out.println(infoSet);

			DecimalFormat decimalFormat = new DecimalFormat("###################.###########");
			StringBuilder sendContent = new StringBuilder("");
			for (AlarmInfo info : infoSet) {
				sendContent.append(info.getName()).append(":  ").append(decimalFormat.format(info.getQty()))
						.append("\n");
			}

			// boe微信消息最后不加空格，消息显示不全，
			sendContent.append(
					"                                                                                                                      ");

			StringBuilder title = new StringBuilder("");
			if (specID == 1) {
				title.append("ACN卡夹报警");
			} else if (specID == 2) {
				title.append("FCW卡夹报警");
			} else if (specID >= 3 && specID <= 6) {
				title.append("T区Stock报警");
			} else if (specID >= 7 && specID <= 10) {
				title.append("T区Stock+EQP报警");
			}
			BoeWeixinToAll.sendToAll(list, title.toString(), sendContent.toString(), "");

		}
	}

}
