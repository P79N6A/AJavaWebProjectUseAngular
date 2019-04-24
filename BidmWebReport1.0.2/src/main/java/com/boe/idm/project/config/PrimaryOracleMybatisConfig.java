package com.boe.idm.project.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.boot.autoconfigure.SpringBootVFS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@MapperScan(value="com.boe.idm.**.mapper.primaryOracle", sqlSessionFactoryRef="primaryOracleSqlSessionFactory")
@EnableTransactionManagement
public class PrimaryOracleMybatisConfig {
	
	private static Logger logger = Logger.getLogger(PrimaryOracleMybatisConfig.class);
	
	
	@Autowired
	Environment env;
	
	@Bean(name = "primaryOracleSqlSessionFactory")
    public SqlSessionFactory secondSqlSessionFactory(@Qualifier("primaryOracleDataSource") DataSource primaryOracleDataSource, ApplicationContext applicationContext) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(primaryOracleDataSource);
        String basePackage = env.getProperty("spring.bidm.api.default.package");
        sqlSessionFactoryBean.setTypeAliasesPackage(basePackage+".model.mybatis");
        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:mybatis/mapper/primary_oracle/**/*.xml"));
        sqlSessionFactoryBean.setVfs(SpringBootVFS.class);
        return sqlSessionFactoryBean.getObject();
    }
 
    @Bean(name = "primaryOracleSqlSessionTemplate")
    public SqlSessionTemplate secondSqlSessionTemplate(SqlSessionFactory primaryOracleSqlSessionFactory) throws Exception {
 
        return new SqlSessionTemplate(primaryOracleSqlSessionFactory);
    }
}
