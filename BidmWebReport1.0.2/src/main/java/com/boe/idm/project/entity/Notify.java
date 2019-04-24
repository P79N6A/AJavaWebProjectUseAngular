package com.boe.idm.project.entity;

import java.util.ArrayList;
import java.util.List;

import com.boe.idm.project.enumeration.NotifyLevel;
import com.boe.utils.json.JsonGenerator;
import com.boe.utils.json.JsonIgnore;

public class Notify implements JsonGenerator {
	
	private String title;
	private String content;
	@JsonIgnore	private NotifyLevel notifyLevel = NotifyLevel.INFO;
	private String level = notifyLevel.getDesc();
	private List<String> receiver = new ArrayList<String>();
	private boolean allUser = true;
	private long alarmTime = System.currentTimeMillis();
	private boolean dbSave = false;
	
	public Notify() {}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public NotifyLevel getNotifyLevel() {
		return notifyLevel;
	}

	public void setNotifyLevel(NotifyLevel notifyLevel) {
		this.notifyLevel = notifyLevel;
		this.level = notifyLevel.getDesc();
	}

	public String getLevel() {
		return level;
	}

	public List<String> getReceiver() {
		return receiver;
	}

	public void setReceiver(List<String> receiver) {
		this.receiver = receiver;
		this.allUser = false;
	}
	
	public void addReceiver(String receiver) {
		this.receiver.add(receiver);
		this.allUser = false;
	}

	public boolean isAllUser() {
		return allUser;
	}

	public void setAllUser(boolean allUser) {
		this.allUser = allUser;
	}

	public long getAlarmTime() {
		return alarmTime;
	}

	public void setAlarmTime(long alarmTime) {
		this.alarmTime = alarmTime;
	}

	public boolean isDbSave() {
		return dbSave;
	}

	public void setDbSave(boolean dbSave) {
		this.dbSave = dbSave;
	}

}
