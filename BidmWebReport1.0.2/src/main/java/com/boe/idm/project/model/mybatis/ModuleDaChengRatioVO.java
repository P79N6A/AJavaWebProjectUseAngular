package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ModuleDaChengRatioVO")
public class ModuleDaChengRatioVO {
	private String type;
	private String item;
	private String planm;
	private String planmc;
	private String pland;
	private String plandc;
	
	private String actc;
	private String actd;
	
	private String catchupm;
	
	private String balm;
	private String balmc;
	private String bald;
	private String baldc;
	
	private String ratiom;
	private String ratiomc;
	private String ratiod;
	private String ratiodc;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getPlanm() {
		return planm;
	}
	public void setPlanm(String planm) {
		this.planm = planm;
	}
	public String getPlanmc() {
		return planmc;
	}
	public void setPlanmc(String planmc) {
		this.planmc = planmc;
	}
	public String getPland() {
		return pland;
	}
	public void setPland(String pland) {
		this.pland = pland;
	}
	public String getPlandc() {
		return plandc;
	}
	public void setPlandc(String plandc) {
		this.plandc = plandc;
	}
	public String getActc() {
		return actc;
	}
	public void setActc(String actc) {
		this.actc = actc;
	}
	public String getActd() {
		return actd;
	}
	public void setActd(String actd) {
		this.actd = actd;
	}
	public String getCatchupm() {
		return catchupm;
	}
	public void setCatchupm(String catchupm) {
		this.catchupm = catchupm;
	}
	public String getBalm() {
		return balm;
	}
	public void setBalm(String balm) {
		this.balm = balm;
	}
	public String getBalmc() {
		return balmc;
	}
	public void setBalmc(String balmc) {
		this.balmc = balmc;
	}
	public String getBald() {
		return bald;
	}
	public void setBald(String bald) {
		this.bald = bald;
	}
	public String getBaldc() {
		return baldc;
	}
	public void setBaldc(String baldc) {
		this.baldc = baldc;
	}
	public String getRatiom() {
		return ratiom;
	}
	public void setRatiom(String ratiom) {
		this.ratiom = ratiom;
	}
	public String getRatiomc() {
		return ratiomc;
	}
	public void setRatiomc(String ratiomc) {
		this.ratiomc = ratiomc;
	}
	public String getRatiod() {
		return ratiod;
	}
	public void setRatiod(String ratiod) {
		this.ratiod = ratiod;
	}
	public String getRatiodc() {
		return ratiodc;
	}
	public void setRatiodc(String ratiodc) {
		this.ratiodc = ratiodc;
	}
	public ModuleDaChengRatioVO(String type, String item, String planm, String planmc, String pland, String plandc,
			String actc, String actd, String catchupm, String balm, String balmc, String bald, String baldc,
			String ratiom, String ratiomc, String ratiod, String ratiodc) {
		super();
		this.type = type;
		this.item = item;
		this.planm = planm;
		this.planmc = planmc;
		this.pland = pland;
		this.plandc = plandc;
		this.actc = actc;
		this.actd = actd;
		this.catchupm = catchupm;
		this.balm = balm;
		this.balmc = balmc;
		this.bald = bald;
		this.baldc = baldc;
		this.ratiom = ratiom;
		this.ratiomc = ratiomc;
		this.ratiod = ratiod;
		this.ratiodc = ratiodc;
	}
	public ModuleDaChengRatioVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ModuleDaChengRatioVO [type=" + type + ", item=" + item + ", planm=" + planm + ", planmc=" + planmc
				+ ", pland=" + pland + ", plandc=" + plandc + ", actc=" + actc + ", actd=" + actd + ", catchupm="
				+ catchupm + ", balm=" + balm + ", balmc=" + balmc + ", bald=" + bald + ", baldc=" + baldc + ", ratiom="
				+ ratiom + ", ratiomc=" + ratiomc + ", ratiod=" + ratiod + ", ratiodc=" + ratiodc + "]";
	}
	
	
	
	

}
