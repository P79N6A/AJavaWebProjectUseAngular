package com.boe.idm.project.model.mybatis;

import java.util.Date;

public class UserInfo {

	private String userAccount;
	private String userName;
	private boolean state;
	private String createUser;
	private Date createTime;
	private String updateUser;
	private Date updateTime;
	
	private String userFactory;
	private String userDepartment;
	
	private int count;
	
	
	
	public String getUserFactory() {
		return userFactory;
	}
	public void setUserFactory(String userFactory) {
		this.userFactory = userFactory;
	}
	public String getUserDepartment() {
		return userDepartment;
	}
	public void setUserDepartment(String userDepartment) {
		this.userDepartment = userDepartment;
	}
	public String getCreateUser() {
		return createUser;
	}
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public String getUpdateUser() {
		return updateUser;
	}
	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	public String getUserAccount() {
		return userAccount;
	}
	public void setUserAccount(String userAccount) {
		this.userAccount = userAccount;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public boolean getState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "UserInfo [userAccount=" + userAccount + ", userName=" + userName + ", state=" + state + ", createUser="
				+ createUser + ", createTime=" + createTime + ", updateUser=" + updateUser + ", updateTime="
				+ updateTime + ", userFactory=" + userFactory + ", userDepartment=" + userDepartment + ", count="
				+ count + "]";
	}
	
	
}
