package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("CstInfoPanelVO")
public class CstInfoPanelVO {
	
	private String durablespecname;
	private String cstspec;
	private int cstqty;
	private int ct_inline;
	private int ct_scrap;
	private int ct_packing;
	private int bank_n;
	private int bank_y;
	private double ct_ratio;
	private double bank_ratio;
	private int engi;
	private int dev;
	private int ttl;
	private int dirty;
	private int oneqp;
	private int moving;
	private int instk;
	private int outstk;
	private int empty;
	private int others;
	public String getDurablespecname() {
		return durablespecname;
	}
	public void setDurablespecname(String durablespecname) {
		this.durablespecname = durablespecname;
	}
	public String getCstspec() {
		return cstspec;
	}
	public void setCstspec(String cstspec) {
		this.cstspec = cstspec;
	}
	public int getCstqty() {
		return cstqty;
	}
	public void setCstqty(int cstqty) {
		this.cstqty = cstqty;
	}
	public int getCt_inline() {
		return ct_inline;
	}
	public void setCt_inline(int ct_inline) {
		this.ct_inline = ct_inline;
	}
	public int getCt_scrap() {
		return ct_scrap;
	}
	public void setCt_scrap(int ct_scrap) {
		this.ct_scrap = ct_scrap;
	}
	public int getCt_packing() {
		return ct_packing;
	}
	public void setCt_packing(int ct_packing) {
		this.ct_packing = ct_packing;
	}
	public int getBank_n() {
		return bank_n;
	}
	public void setBank_n(int bank_n) {
		this.bank_n = bank_n;
	}
	public int getBank_y() {
		return bank_y;
	}
	public void setBank_y(int bank_y) {
		this.bank_y = bank_y;
	}
	public double getCt_ratio() {
		return ct_ratio;
	}
	public void setCt_ratio(double ct_ratio) {
		this.ct_ratio = ct_ratio;
	}
	public double getBank_ratio() {
		return bank_ratio;
	}
	public void setBank_ratio(double bank_ratio) {
		this.bank_ratio = bank_ratio;
	}
	public int getEngi() {
		return engi;
	}
	public void setEngi(int engi) {
		this.engi = engi;
	}
	public int getDev() {
		return dev;
	}
	public void setDev(int dev) {
		this.dev = dev;
	}
	public int getTtl() {
		return ttl;
	}
	public void setTtl(int ttl) {
		this.ttl = ttl;
	}
	public int getDirty() {
		return dirty;
	}
	public void setDirty(int dirty) {
		this.dirty = dirty;
	}
	public int getOneqp() {
		return oneqp;
	}
	public void setOneqp(int oneqp) {
		this.oneqp = oneqp;
	}
	public int getMoving() {
		return moving;
	}
	public void setMoving(int moving) {
		this.moving = moving;
	}
	public int getInstk() {
		return instk;
	}
	public void setInstk(int instk) {
		this.instk = instk;
	}
	public int getOutstk() {
		return outstk;
	}
	public void setOutstk(int outstk) {
		this.outstk = outstk;
	}
	public int getEmpty() {
		return empty;
	}
	public void setEmpty(int empty) {
		this.empty = empty;
	}
	public int getOthers() {
		return others;
	}
	public void setOthers(int others) {
		this.others = others;
	}
	
	
}
