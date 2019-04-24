package com.boe.idm.project.filter;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.boe.idm.project.model.mybatis.ReportLoadInfo;
import com.boe.idm.project.service.UserLogService;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.Date;
@Component//注入ioc容器
//@WebFilter(filterName = "reportLoadFilter",urlPatterns = "/tbload/*")//配置拦截路径
public class ReportLoadFilter implements Filter {
	@Autowired
	private UserLogService userLogService;

   //filter初始化的时候调用，即web容器启动时调用
   //web容器启动时根据web.xml文件，依次加载ServletContext----》listener---》filter----》servlet
   @Override
   public void init(FilterConfig filterConfig) throws ServletException {
   }
   
   //filter执行功能，根据参数来看，可以对request,response和chain（是否放行）进行操作
   @Override
   public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
	   HttpServletRequest httpRequest = (HttpServletRequest)request;
	   
	   
	   ReportLoadInfo reportLoadInfo = new ReportLoadInfo();
	   
	   if(httpRequest.getRequestURI().indexOf("/tbload")>=0) {
		   String reportName = httpRequest.getParameter("log_reportName");
		   
		   if(reportName != null && !"".equals(reportName)) {

			   try {
				   reportLoadInfo.setUserAccount(httpRequest.getHeader("userCode"));
			   } catch (Exception e) {
				   // TODO Auto-generated catch block
				   e.printStackTrace();
			   }


			   reportLoadInfo.setReportName(reportName);
			   reportLoadInfo.setMenuId(httpRequest.getParameter("log_menuId"));
			   
			   Date startTime = new Date();
			   
			   reportLoadInfo.setStartTime(startTime);
			   
			   chain.doFilter(request,response);//请求放行，允许进入servlet，可手动禁止放行
			   
			   Date endTime = new Date();
			   
			   reportLoadInfo.setEndTime(endTime);
			   reportLoadInfo.setLoadTime(endTime.getTime() - startTime.getTime());
			   
			   userLogService.insertReportLoadInfo(reportLoadInfo);
		   }
	   }else {
		   chain.doFilter(request,response);//请求放行，允许进入servlet，可手动禁止放行
	   }
   }
   
   //filter在服务器正常关闭(比如System.exit(0))等情况下会调用。
   @Override
   public void destroy() {
   }
}
