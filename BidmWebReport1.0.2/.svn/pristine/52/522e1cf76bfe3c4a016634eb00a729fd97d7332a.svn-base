package com.boe.idm.project.aop;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.core.JsonProcessingException;

@Aspect
@Component
public class LoggingHandler {

	private Logger log = LoggerFactory.getLogger(LoggingHandler.class);
	
	
	@Pointcut("@target(classRequestMapping) && @annotation(requestMapping) && within(@org.springframework.web.bind.annotation.RestController *)")
	public void controller(RequestMapping classRequestMapping, RequestMapping requestMapping) {
	}

	@Pointcut("execution(* *.*(..))")
	protected void allMethod() {
	}

	@Pointcut("execution(public * *(..))")
	protected void loggingPublicOperation() {
	}

	@Pointcut("execution(* *.*(..))")
	protected void loggingAllOperation() {
	}

	@Pointcut("within(org.learn.log..*)")
	private void logAnyFunctionWithinResource() {
	}

	//before -> Any resource annotated with @Controller annotation 
	//and all method and function taking HttpServletRequest as first parameter
	@Before("controller(classRequestMapping, requestMapping) && allMethod() && args(..,data)")
	public void logBefore(JoinPoint joinPoint, @RequestBody Object data, RequestMapping classRequestMapping, RequestMapping requestMapping) throws JsonProcessingException {
		log.debug("Target Class : " + joinPoint.getTarget().getClass().getName());
		log.debug("Entering in Method :  " + joinPoint.getSignature().getName());
		//log.debug("Entering in data.getClass :  " + data.getClass());
		log.debug("Request Url :  " + classRequestMapping.value()[0] +  requestMapping.value()[0]);
		try {
			//log.debug("Entering in parameter :  " + contentLogging(joinPoint.getArgs(), methodName));
			Class<?> _class = (joinPoint.getArgs()[0]).getClass();
			log.debug("Request Body value of variables "+joinPoint.getArgs()[0]); 
			MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
			HttpServletRequest request=null;
			for (Object obj: joinPoint.getArgs()) {
				if (obj instanceof HttpServletRequest || obj instanceof MultipartHttpServletRequest) {
	                request = (HttpServletRequest) obj;
				}
			}
			if(request != null){
				String[] params = methodSignature.getParameterNames();
				for (String param: params) {
					if(!param.equals("request") && !param.equals("response")) {
						if(param.equals("username")) {
							request.setAttribute(param, request.getParameter(param));
						}
						log.debug("Request Parameters "+param+" : "+request.getParameter(param));
					}
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//log.debug("Arguments :  \n" +  mapper.writerWithDefaultPrettyPrinter().writeValueAsString(data)+ "\r\n");
	}
	
	//After -> All method within resource annotated with @Controller annotation 
	// and return a  value
	@AfterReturning(pointcut = "controller(classRequestMapping, requestMapping) && allMethod()", returning = "result")
	public void logAfter(JoinPoint joinPoint, Object result, RequestMapping classRequestMapping, RequestMapping requestMapping) throws JsonProcessingException {
		log.debug("Reply Url :  " + classRequestMapping.value()[0] +  requestMapping.value()[0]);
		//log.debug("[Method Return value]\r\n" + JacksonUtils.scalingString(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(result), 1, 9000) );
		//log.debug("[Method Return value]\r\n" + mapper.writerWithDefaultPrettyPrinter().writeValueAsString(result));
		log.debug(" ###### Returning for class : {} ; Method : {} ", joinPoint.getTarget().getClass().getName(), joinPoint.getSignature().getName());
		if (result != null) {
			log.debug(" Method Return value : {}", result.toString());
	    } else{
	    	log.debug(" Method Return value null");
	    }
	}
	
	//After -> Any method within resource annotated with @Controller annotation 
	// throws an exception ...Log it
	@AfterThrowing(pointcut = "controller(classRequestMapping, requestMapping) && allMethod()", throwing = "exception")
	public void logAfterThrowing(JoinPoint joinPoint, Throwable exception, RequestMapping classRequestMapping, RequestMapping requestMapping) {
		log.error("An exception has been thrown in " + joinPoint.getSignature().getName() + " ()");
		log.error("Cause : " + exception.getCause());
	}
	
	//Around -> Any method within resource annotated with @Controller annotation 
	@Around("controller(classRequestMapping, requestMapping) && allMethod()")
	public Object logAround(ProceedingJoinPoint joinPoint, RequestMapping classRequestMapping, RequestMapping requestMapping) throws Throwable {
		long start = System.currentTimeMillis();
		try {
			String className = joinPoint.getSignature().getDeclaringTypeName();
			String methodName = joinPoint.getSignature().getName();
			Object result = joinPoint.proceed();
			long elapsedTime = System.currentTimeMillis() - start;
			log.debug("Method " + className + "." + methodName + " ()" + " execution time : " + elapsedTime + " ms");
			return result;
		} catch (IllegalArgumentException e) {
			log.error("Illegal argument " + Arrays.toString(joinPoint.getArgs()) + " in " + joinPoint.getSignature().getName() + "()");
			throw e;
		}
	}
}