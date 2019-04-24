package com.boe.idm.project.config;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class PrimaryJpaConfig {
	
	//private static final String DEFAULT_NAMING_STRATEGY = "org.springframework.boot.orm.jpa.hibernate.SpringNamingStrategy";
	
	@Autowired
	Environment env;
	
	@Autowired
	DataSource primaryDataSource;
	
	@Bean(name = "entityManagerFactory")
	@Primary
	public LocalContainerEntityManagerFactoryBean entityManagerFactory(EntityManagerFactoryBuilder builder) {

		Map<String, String> propertiesHashMap = new HashMap<>();
		propertiesHashMap.put("hibernate.ejb.naming_strategy", env.getProperty("hibernate.dialect"));
		//propertiesHashMap.put("hibernate.hbm2ddl.auto","create");
		propertiesHashMap.put("hibernate.show_sql",env.getProperty("hibernate.show_sql"));
		propertiesHashMap.put("hibernate.dialect",env.getProperty("hibernate.dialect"));
		return builder.dataSource(primaryDataSource)
				.packages(env.getProperty("hibernate.entitymanager.packages"))
				.properties(propertiesHashMap)
				.build();
	}
	@Bean(name = "sessionFactory")
	@Primary
	public SessionFactory sessionFactory(@Qualifier("entityManagerFactory") EntityManagerFactory emf) {
	    return emf.unwrap(SessionFactory.class);
	}
	@Bean(name = "jpaJdbcTemplate")
	@Primary
	public JdbcTemplate getJdbcTemplate() {
	    return new JdbcTemplate(primaryDataSource);
	}
	
	@Bean(name = "jpaTransactionManager")
	@Primary
	PlatformTransactionManager transactionManager(EntityManagerFactoryBuilder builder) {
		return new JpaTransactionManager(entityManagerFactory(builder).getObject());
	}

	@Configuration
	@EnableJpaRepositories(basePackages="com.boe.idm.**.dao",
			entityManagerFactoryRef = "entityManagerFactory", transactionManagerRef = "jpaTransactionManager")
	static class DbArticleJpaRepositoriesConfig {
	}
}
