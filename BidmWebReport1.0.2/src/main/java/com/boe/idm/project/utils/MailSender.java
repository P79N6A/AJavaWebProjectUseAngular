package com.boe.idm.project.utils;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.boe.bidm.exception.BoeException;
import com.boe.bidm.utils.MailUtils;

public class MailSender {
	
	//配置 邮件发送人
	public static MailUtils getMailUtils() {
		return new MailUtils("wangzhenwz@boe.com.cn","password");
	}
	
	/**
	 * 
	 * @param subject 邮件主题
	 * @param addressTo  接收方
	 * @param carbonCopy 抄送列表
	 * @param content  内容
	 */
	public static void send(String subject,String addressTo,String carbonCopy,String content) {
		MailUtils mail = MailSender.getMailUtils();
		
		mail.setSubject(subject);
		mail.addTo(addressTo);
		mail.addCc(carbonCopy);
		mail.setContent(content);
	}
	
	public static void main(List<LinkedHashMap<String,Object>> timeSpec, Double actvalue, String time) throws BoeException {
		
 		MailUtils mail = MailSender.getMailUtils();
 		String subject="【异常】"+timeSpec.get(0).get("PRODUCTID").toString()+"--"+timeSpec.get(0).get("STEPID").toString()+"--"+timeSpec.get(0).get("DEFECTNAME").toString();
 		String mail1=timeSpec.get(0).get("ALARMRECEIVERID2").toString();
		mail.setSubject(subject);
		mail.addTo(mail1);
		mail.addCc("liangzhengzheng@boe.com.cn");
		mail.setContent(getContent(timeSpec,actvalue,time));
		
		mail.send();
		 
	}
	
	
	/**
	 * 邮件内容 html拼接例子
	 * @param timeSpec 
	 * @param actvalue 
	 * @param time 
	 * @return
	 */
	static String getContent(List<LinkedHashMap<String,Object>> timeSpec, Double actvalue, String time){
		StringBuffer sbf = new StringBuffer();
		String alarmtype=timeSpec.get(0).get("ALARMTYPE2").toString();
		String subject="【异常】"+timeSpec.get(0).get("PRODUCTID").toString()+"--"+timeSpec.get(0).get("STEPID").toString()+"--"+timeSpec.get(0).get("DEFECTNAME").toString()+"不良高发";
		String PRODUCTID=timeSpec.get(0).get("PRODUCTID").toString();
		String STEPID=timeSpec.get(0).get("STEPID").toString();
		String DEFECTNAME=timeSpec.get(0).get("DEFECTNAME").toString();
		String CONTROL2=">="+timeSpec.get(0).get("CONTROL2").toString();
		String Actvalue=actvalue.toString();
		String Time=time.toString();
		sbf.append("<body>");
		sbf.append("<table width='100%' style='border:1px'>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<ul><li");
		sbf.append("style='font-family:\"微软雅黑\";font-weight:600'");
		sbf.append(">");
		sbf.append("报警方式：");
		sbf.append(alarmtype);
		sbf.append("</li></ul>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append(subject);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("发生时间：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(Time);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("产品名：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(PRODUCTID);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("Product ID：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(PRODUCTID);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("Step ID：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(STEPID);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("Defect Name：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(DEFECTNAME);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("报警线：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(CONTROL2);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("<tr>");
		sbf.append("<td>");
		sbf.append("<div>");
		sbf.append("<span style='font-family:\"微软雅黑\";font-weight:600'>");
		sbf.append("发生值：");
		sbf.append("</span>");
		sbf.append("<span style='font-family:\"微软雅黑\";'>");
		sbf.append(Actvalue);
		sbf.append("</span>");
		sbf.append("</div>");
		sbf.append("</td>");
		sbf.append("</tr>");
		sbf.append("</table></body>");
		/*
		String return_ =
		"<body style='font-family:\"微软雅黑\"'><table width='100%' >"+ //style='text-align:center'
		"<tr>"+
		"	<td>"+
		"		<div sytle='text-align:left'> " +
		"			<ul>"+
		"				<li style='font-family:\"微软雅黑\";font-weight:600'>报警邮件&微信发送格式</li> " +
		"			</ul> " +
		"		</div>"+
		"	</td>"+
		"</tr>"+
		"<tr>"+
		"	<td>"+
		"		<div>"+
		"			<span style='font-family:\"微软雅黑\";font-weight:600'>【产线异常提醒-55UHD黑点不良高发】</span>"+
		"		</div>"+
		"	</td>"+
		" </tr>"+
		"<tr>"+
		"	<td>"+
		"		<div>"+
		"			<span style='font-family:\"微软雅黑\";font-weight:600'>发生时间：</span><span style='font-family:\"微软雅黑\"'>2019/1/8 10:30 </span>"+
		"		</div>"+
		"	</td>"+
		" </tr>"+
		"<tr>"+
		"	<td>"
		+"		<div>"
		+"			<span style='font-family:\"微软雅黑\";font-weight:600'>产品名：</span><span style='font-family:\"微软雅黑\"'>55UHD </span>"
		+"		</div>"
		+"	</td>"
		+"</tr>"
		+"<tr>"
		+"	<td>"
		+"		<div>"
		+"			<span style='font-family:\"微软雅黑\";font-weight:600'>Product ID：</span><span style='font-family:\"微软雅黑\"'>B5P550QU5VP14 </span>"
		+"		</div>"
		+"	</td>"
		+"</tr>"
		+"<tr>"
		+"	<td>"
		+"		<div>"
		+"			<span style='font-family:\"微软雅黑\";font-weight:600'>Step ID：</span><span style='font-family:\"微软雅黑\"'>C700-00 </span>"
		+"		</div>"
		+"	</td>"
		+"</tr>"
		+"<tr>"
		+"	<td>"
		+"		<div>"
		+"			<span style='font-family:\"微软雅黑\";font-weight:600'>Defect Name：</span><span style='font-family:\"微软雅黑\"'>黑点 </span>"
		+"		</div>"
		+"	</td>"
		+"</tr>"
		+"<tr>"
		+"	<td>"
		+"		<div>"
		+"			<span style='font-family:\"微软雅黑\";font-weight:600'>报警线：</span><span style='font-family:\"微软雅黑\"'>>= 0.50% </span>"
		+"		</div>"
		+"	</td>"
		+"</tr>"
		+"<tr>"
		+"	<td>"
		+"		<div>"
		+"			<span style='font-family:\"微软雅黑\";font-weight:600'>发生值：</span><span style='font-family:\"微软雅黑\"'>0.80% </span>"
		+"		</div>"
		+"	</td>"
		+"</tr>"+
	"</table></body>";
	*/
	return sbf.toString();
	}
	
	
 
}
