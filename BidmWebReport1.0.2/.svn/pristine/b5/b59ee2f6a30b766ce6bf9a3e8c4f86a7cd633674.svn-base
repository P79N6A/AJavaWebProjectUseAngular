package com.boe.idm.project.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Swagger2Config {

	@Value("${spring.bidm.api.default.package}")
	private String defaultPackage;
	
    private static final String TARGET_PATH = "/api/**";

//    @Bean
//    public Docket standardApi() {
//    	return new Docket(DocumentationType.SWAGGER_2)
//    			.groupName("01.standard")
//    			.apiInfo(apiInfo("standard"))
//    			.select()
//    			.apis(RequestHandlerSelectors.basePackage(defaultPackage + ".controllers.standard"))
//    			.paths(PathSelectors.ant(TARGET_PATH))
//    			.build();
//    }
//    
//	@Bean
//    public Docket menuApi() {
//        return new Docket(DocumentationType.SWAGGER_2)
//        		.groupName("02.menu")
//                .apiInfo(apiInfo("menu"))
//                .select()
//                .apis(RequestHandlerSelectors.basePackage(defaultPackage + ".controllers.menu"))
//                .paths(PathSelectors.ant(TARGET_PATH))
//                .build();
//    }
//	
//	@Bean
//    public Docket supportApi() {
//        return new Docket(DocumentationType.SWAGGER_2)
//        		.groupName("03.support")
//                .apiInfo(apiInfo("support"))
//                .select()
//                .apis(RequestHandlerSelectors.basePackage(defaultPackage + ".controllers.support"))
//                .paths(PathSelectors.ant(TARGET_PATH))
//                .build();
//    }
	
	@Bean
    public Docket allApi() {
        return new Docket(DocumentationType.SWAGGER_2)
        		.groupName("All")
                .apiInfo(apiInfo("All"))
                .select()
                .apis(RequestHandlerSelectors.basePackage(defaultPackage + ".controller"))
                .paths(PathSelectors.ant(TARGET_PATH))
                .build();
    }

    private ApiInfo apiInfo(String title) {
        return new ApiInfoBuilder()
                .title("BIDM " + title + " API")
                .description("Welcome to bidm developer API System.")
                .version("1.0")
                .build();
    }
    
}
