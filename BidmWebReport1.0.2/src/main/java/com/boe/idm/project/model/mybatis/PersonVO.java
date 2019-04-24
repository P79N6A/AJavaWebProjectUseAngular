package com.boe.idm.project.model.mybatis;

public class PersonVO {
	private String name;
	private String sex;
	private int age;
	
	public PersonVO(String name, String sex, int age) {
		super();
		this.name = name;
		this.sex = sex;
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "PersonVO [name=" + name + ", sex=" + sex + ", age=" + age + "]";
	}
	
}
