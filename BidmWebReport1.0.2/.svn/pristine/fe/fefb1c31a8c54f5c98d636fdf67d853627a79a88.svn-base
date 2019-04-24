package com.boe.idm.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.boe.idm.project.interceptor.HttpInterceptor;


@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    /* (non-Javadoc)
     * @see org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter#addInterceptors(org.springframework.web.servlet.config.annotation.InterceptorRegistry)
     * URL Patter을 정해준다. 나중에가 적용이 안된다. 처음 설정이 먼저 먹힌다.
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new HttpInterceptor())
        		.excludePathPatterns("/api/auth/*")
        		.excludePathPatterns("/swagger-resources/**")
        		.addPathPatterns("/**");
		/*
			이미 설정 된 URL은 이후 설정을 반영 하지 않음

			(예시)
			// user/login 요청에 대해서는 Interceptor 하지 않도록 설정
			.excludePathPatterns("user/login");

			// 모든 요청에 대해 Interceptor 설정
			

			마지막에 모든 요청에 대해 Interceptor 설정을 했지만
			앞에 설정한 user/login에 대한 요청은 Interceptor 하지 않음
		 */
	}
    
    @Bean
	public MappingJackson2JsonView jsonView(){
	    return new MappingJackson2JsonView();
	}
}
