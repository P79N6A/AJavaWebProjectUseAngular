package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("SortBankTftCfVO")
public class SortBankTftCfVO {

	private int tft_bank_normal;
	private int tft_bank_hold;
	private int tft_bank_en;
	private int cf_bank_normal;
	private int cf_bank_hold;
	private int cf_bank_en;

	public int getTft_bank_normal() {
		return tft_bank_normal;
	}

	public void setTft_bank_normal(int tft_bank_normal) {
		this.tft_bank_normal = tft_bank_normal;
	}

	public int getTft_bank_hold() {
		return tft_bank_hold;
	}

	public void setTft_bank_hold(int tft_bank_hold) {
		this.tft_bank_hold = tft_bank_hold;
	}

	public int getTft_bank_en() {
		return tft_bank_en;
	}

	public void setTft_bank_en(int tft_bank_en) {
		this.tft_bank_en = tft_bank_en;
	}

	public int getCf_bank_normal() {
		return cf_bank_normal;
	}

	public void setCf_bank_normal(int cf_bank_normal) {
		this.cf_bank_normal = cf_bank_normal;
	}

	public int getCf_bank_hold() {
		return cf_bank_hold;
	}

	public void setCf_bank_hold(int cf_bank_hold) {
		this.cf_bank_hold = cf_bank_hold;
	}

	public int getCf_bank_en() {
		return cf_bank_en;
	}

	public void setCf_bank_en(int cf_bank_en) {
		this.cf_bank_en = cf_bank_en;
	}

}
