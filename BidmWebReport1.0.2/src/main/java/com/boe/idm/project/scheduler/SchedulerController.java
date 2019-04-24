package com.boe.idm.project.scheduler;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import com.boe.idm.project.model.mybatis.TimingQuery;
import com.boe.idm.project.service.SpecService;
import com.boe.idm.project.service.TimerService;
import com.boe.idm.project.utils.MailSender;

@Controller
public class SchedulerController {
	
	
	
  	@Autowired
  	private  TimerService TimerService;
  	
	private final Logger logger = LoggerFactory.getLogger(SchedulerController.class);
	
	/*
	 * http://www.quartz-scheduler.org/documentation/quartz-2.x/tutorials/crontrigger.html
	 * cron=
	 * seq		field  				value 
 		1		seconds      		0~59 , - * /
 		2		minutes		 		0~59 , - * /
 		3		hours		 		0~23 , - * /
		4		day of month 		1~31 , - * ? / L W
		5		month		 		1~12 or JAN-DEC , - * /
		6		day of week	 		1-7 or SUN-SAT , - * ? / L #
		7		years (optional) 	1970~2099 , - * /
	*/
	
	//every day every hour 10minute
	@Scheduled(cron="0 10 * * * *")
    public void scheduledAnnotationCron() {
		String osType = System.getProperty("os.name");
		System.out.println("------测试22222--------");
		logger.debug ("scheduler run os type is {}", osType);
		
        
    }
	

//	@Scheduled(cron="0 */15 * * * ?")
	//@Scheduled(cron="0 */1 * * * ?")
	public void dateMove()throws Exception {
		System.out.println("------定时任务开启--------");
	TimingQuery  TimingQuery= TimerService.TimingQuery();
	Map<String, Object> paraMap = new HashMap<String, Object>();
	String Productspecname=TimingQuery.getProductspecname();
	String Processoperationname=TimingQuery.getProcessoperationname();
	String Defectname=TimingQuery.getDefectname();
	Double Actvalue=TimingQuery.getActvalue().doubleValue();
	String time= TimingQuery.getEventtime().toString();
	paraMap.put("productid",Productspecname);
	paraMap.put("stepid",Processoperationname);
	paraMap.put("defectname",Defectname);
	List<LinkedHashMap<String, Object>> TimeSpec=TimerService.TimeSpec(paraMap);
//	System.out.println(TimeSpec);
	if(TimeSpec.size()!=0)
	{
		Double Control1=Double.valueOf(TimeSpec.get(0).get("CONTROL1").toString());
		Double Control2=Double.valueOf(TimeSpec.get(0).get("CONTROL2").toString());
		if(Control1>Actvalue) {
			logger.debug("-----------Actvalue未超过spec的Control1-------------");
		}
		else if(Actvalue>Control1&Actvalue<Control2)
		{
			logger.debug("-----------Actvalue超过spec的Control1,未超过Control2，此处调用Boe微信接口-------------");
			MailSender.main(TimeSpec,Actvalue,time);
		}
		else if(Actvalue>Control2) {
			MailSender.main(TimeSpec,Actvalue,time);
		}
	}
	else {
	};
	TimerService.TimingStorage(TimingQuery.getProductspecname(), TimingQuery.getProcessflowname(), TimingQuery.getProcessoperationname(),TimingQuery.getDefectname(), TimingQuery.getEventtime(),TimingQuery.getActvalue());
	System.out.println("------定时任务结束--------");
	
	}


}
