package com.boe.idm.project.config;

import javax.sql.DataSource;

import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;

@Configuration
public class DataSourceConfig {
 
	@Autowired
	Environment env;
	
    @Bean(name = "primaryDataSource")
    @Primary
    public DataSource createMainDataSource() {
    	PooledDataSource dataSource = new PooledDataSource();

    	String driver = env.getProperty("spring.bidm.primary.db.driver");
    	String url = env.getProperty("spring.bidm.primary.db.url");
    	String username = env.getProperty("spring.bidm.primary.db.username");
    	String password = env.getProperty("spring.bidm.primary.db.password");

    	dataSource.setDriver(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        
        int maxActiveConnections = Integer.parseInt(env.getProperty("spring.max.active.connections"));
        int idleConnections = Integer.parseInt(env.getProperty("spring.idle.connections"));
        
        
        dataSource.setPoolMaximumActiveConnections(maxActiveConnections);//max conn count , default :10
        dataSource.setPoolMaximumIdleConnections(idleConnections);  //conn count , 
        dataSource.setPoolMaximumCheckoutTime(10000);
        dataSource.setPoolPingConnectionsNotUsedFor(1);
        dataSource.setPoolPingEnabled(true);
        //dataSource.setPoolPingConnectionsNotUsedFor(60000);
        dataSource.setPoolPingQuery("SELECT 1 FROM DUAL");
        
        return dataSource;
    }
    // primary_oracle 数据源的配置信息
    @Bean(name = "primaryOracleDataSource")
    public DataSource createPrimaryOracleDataSource() {
    	PooledDataSource dataSource = new PooledDataSource();
    	
    	String driver = env.getProperty("spring.bidm.primary_oracle.db.driver");
    	String url = env.getProperty("spring.bidm.primary_oracle.db.url");
    	String username = env.getProperty("spring.bidm.primary_oracle.db.username");
    	String password = env.getProperty("spring.bidm.primary_oracle.db.password");

    	dataSource.setDriver(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        
        int maxActiveConnections = Integer.parseInt(env.getProperty("spring.max.active.connections"));
        int idleConnections = Integer.parseInt(env.getProperty("spring.idle.connections"));
        
        dataSource.setPoolMaximumActiveConnections(maxActiveConnections);//max conn count , default :10
        dataSource.setPoolMaximumIdleConnections(idleConnections);  //conn count , 
        dataSource.setPoolMaximumCheckoutTime(10000);
        dataSource.setPoolPingConnectionsNotUsedFor(1);
        dataSource.setPoolPingEnabled(true);
        //dataSource.setPoolPingConnectionsNotUsedFor(60000);
        dataSource.setPoolPingQuery("SELECT 1 FROM DUAL");
        
        return dataSource;
    }
    
    
    @Bean(name = "secondDataSource")
    public DataSource createSecondaryDataSource() {
    	PooledDataSource dataSource = new PooledDataSource();
    	
    	String driver = env.getProperty("spring.bidm.second.db.driver");
    	String url = env.getProperty("spring.bidm.second.db.url");
    	String username = env.getProperty("spring.bidm.second.db.username");
    	String password = env.getProperty("spring.bidm.second.db.password");

    	dataSource.setDriver(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        
        int maxActiveConnections = Integer.parseInt(env.getProperty("spring.max.active.connections"));
        int idleConnections = Integer.parseInt(env.getProperty("spring.idle.connections"));
        
        dataSource.setPoolMaximumActiveConnections(maxActiveConnections);//max conn count , default :10
        dataSource.setPoolMaximumIdleConnections(idleConnections);  //conn count , 
        dataSource.setPoolMaximumCheckoutTime(10000);
        dataSource.setPoolPingConnectionsNotUsedFor(1);
        dataSource.setPoolPingEnabled(true);
        //dataSource.setPoolPingConnectionsNotUsedFor(60000);
        dataSource.setPoolPingQuery("SELECT 1 FROM DUAL");
        
        return dataSource;
    }
    
    @Bean(name = "modDataSource")
    public DataSource createModDataSource() {
    	
    	PooledDataSource dataSource = new PooledDataSource();
    	
    	String driver = env.getProperty("spring.bidm.mod.db.driver");
    	String url = env.getProperty("spring.bidm.mod.db.url");
    	String username = env.getProperty("spring.bidm.mod.db.username");
    	String password = env.getProperty("spring.bidm.mod.db.password");

    	dataSource.setDriver(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        
        int maxActiveConnections = Integer.parseInt(env.getProperty("spring.max.active.connections"));
        int idleConnections = Integer.parseInt(env.getProperty("spring.idle.connections"));
        
        dataSource.setPoolMaximumActiveConnections(maxActiveConnections);//max conn count , default :10
        dataSource.setPoolMaximumIdleConnections(idleConnections);  //conn count , 
        dataSource.setPoolMaximumCheckoutTime(10000);
        dataSource.setPoolPingConnectionsNotUsedFor(1);
        dataSource.setPoolPingEnabled(true);
        //dataSource.setPoolPingConnectionsNotUsedFor(60000);
        dataSource.setPoolPingQuery("SELECT 1 FROM DUAL");
        
        return dataSource;
    }
}
