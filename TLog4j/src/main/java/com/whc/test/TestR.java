package com.whc.test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import com.whc.mapper.B_Rmapper;
import com.whc.model.Usera;


public class TestR {
	
	@Test
	public void testqueryOne() throws IOException{
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		
		SqlSession session = sessionFactory.openSession();
		try {
			B_Rmapper mapper = session.getMapper(B_Rmapper.class);
			Usera aa =  mapper.queryOne(2);
			System.out.println(aa);
		} finally {
			session.close();
		}
	}


	
	@Test
	public void testqueryOne2() throws IOException{
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		
		SqlSession session = sessionFactory.openSession();
		try {
			B_Rmapper mapper = session.getMapper(B_Rmapper.class);
			Usera aa = mapper.queryOne2(3, "user");
			System.out.println(aa);
		} finally {
			session.close();
		}
	}
	
	@Test
	public void testqueryOne3() throws IOException{
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		
		SqlSession session = sessionFactory.openSession();
		try {
			B_Rmapper mapper = session.getMapper(B_Rmapper.class);
			Usera aa = mapper.queryOne3(2);
			System.out.println(aa);
		} finally {
			session.close();
		}
	}
	
	
	@Test
	public void testqueryForList1() throws IOException{
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		
		SqlSession session = sessionFactory.openSession();
		try {
			B_Rmapper mapper = session.getMapper(B_Rmapper.class);
			List<Usera> lists = mapper.queryForList1(2);
			
			for (Usera usera : lists) {
				System.out.println(usera);
			}
			//System.out.println(lists);
		} finally {
			session.close();
		}
	}
	@Test
	public void testqueryForList2() throws IOException{
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		
		SqlSession session = sessionFactory.openSession();
		try {
			B_Rmapper mapper = session.getMapper(B_Rmapper.class);
			int[] ids = {1,2,4};
			List<Usera> lists = mapper.queryForList2(ids);
			
			for (Usera usera : lists) {
				System.out.println(usera);
			}
			//System.out.println(lists);
		} finally {
			session.close();
		}
	}
	
	@Test
	public void testqueryForList3() throws IOException{
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		
		SqlSession session = sessionFactory.openSession();
		try {
			B_Rmapper mapper = session.getMapper(B_Rmapper.class);
			List<Usera> lists = mapper.queryForList3(3);
			
			for (Usera usera : lists) {
				System.out.println(usera);
			}
			//System.out.println(lists);
		} finally {
			session.close();
		}
	}
	
//
//	@Test
//	public void test01() throws IOException{
//		String resource = "mybatis-config.xml";
//		InputStream inputStream = Resources.getResourceAsStream(resource);
//		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
//		
//		SqlSession session = sessionFactory.openSession();
//		try {
//			UserClassMapper mapper = session.getMapper(UserClassMapper.class);
//			UserClass userClass  = mapper.queryForOneClass(1);
//			
//			System.out.println(userClass);
//			System.out.println(userClass.getUseras());
//			//System.out.println(lists);
//		} finally {
//			session.close();
//		}
//	}
//	
//	@Test
//	public void test02() throws IOException{
//		String resource = "mybatis-config.xml";
//		InputStream inputStream = Resources.getResourceAsStream(resource);
//		SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
//		
//		SqlSession session = sessionFactory.openSession();
//		try {
//			UserClassMapper mapper = session.getMapper(UserClassMapper.class);
//			UserClass userClass  = mapper.queryForOneClass2(1);
//			
//			System.out.println(userClass.getCname());
//			System.out.println(userClass.getUseras());
//		} finally {
//			session.close();
//		}
//	}
}
