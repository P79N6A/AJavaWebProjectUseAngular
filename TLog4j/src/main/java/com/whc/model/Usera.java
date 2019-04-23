package com.whc.model;

public class Usera {
	
	private Integer myId;
	private String myName;
	private int myAge;
	private String myEmail;
	
	
	public Integer getMyId() {
		return myId;
	}
	public void setMyId(Integer myId) {
		this.myId = myId;
	}
	public String getMyName() {
		return myName;
	}
	public void setMyName(String myName) {
		this.myName = myName;
	}
	public int getMyAge() {
		return myAge;
	}
	public void setMyAge(int myAge) {
		this.myAge = myAge;
	}
	public String getMyEmail() {
		return myEmail;
	}
	public void setMyEmail(String myEmail) {
		this.myEmail = myEmail;
	}
	
	public Usera(Integer myId, String myName, int myAge, String myEmail) {
		super();
		this.myId = myId;
		this.myName = myName;
		this.myAge = myAge;
		this.myEmail = myEmail;
	}
	public Usera() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Usera [myId=" + myId + ", myName=" + myName + ", myAge=" + myAge + ", myEmail=" + myEmail + "]";
	}
	
	

}
