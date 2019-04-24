package com.boe.idm.project.model.mybatis;

import java.util.Objects;

import org.apache.ibatis.type.Alias;

@Alias("Monitor8VO")
public class Monitor8VO {
	
	private String FACTORY;	
	private String ITEM;	
	private String PRODUCTSPECNAME;	
	private String MODELTYPE;	
	private String HOURTIMEKEY;	
	private String LINE;	
	private String Qty;
	private String DATENAME;

	private Integer numbs;
	
	
	private String owner;
	
	
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getDATENAME() {
		return DATENAME;
	}
	public void setDATENAME(String dATENAME) {
		DATENAME = dATENAME;
	}
	public Integer getNumbs() {
		return numbs;
	}
	public void setNumbs(Integer numbs) {
		this.numbs = numbs;
	}
	public String getFACTORY() {
		return FACTORY;
	}
	public void setFACTORY(String fACTORY) {
		FACTORY = fACTORY;
	}
	public String getITEM() {
		return ITEM;
	}
	public void setITEM(String iTEM) {
		ITEM = iTEM;
	}
	public String getPRODUCTSPECNAME() {
		return PRODUCTSPECNAME;
	}
	public void setPRODUCTSPECNAME(String pRODUCTSPECNAME) {
		PRODUCTSPECNAME = pRODUCTSPECNAME;
	}
	public String getMODELTYPE() {
		return MODELTYPE;
	}
	public void setMODELTYPE(String mODELTYPE) {
		MODELTYPE = mODELTYPE;
	}
	public String getHOURTIMEKEY() {
		return HOURTIMEKEY;
	}
	public void setHOURTIMEKEY(String hOURTIMEKEY) {
		HOURTIMEKEY = hOURTIMEKEY;
	}
	public String getLINE() {
		return LINE;
	}
	public void setLINE(String lINE) {
		LINE = lINE;
	}
	public String getQty() {
		return Qty;
	}
	public void setQty(String qty) {
		Qty = qty;
	}
	public Monitor8VO(String fACTORY, String iTEM, String pRODUCTSPECNAME, String mODELTYPE, String hOURTIMEKEY,
			String lINE, String qty) {
		super();
		FACTORY = fACTORY;
		ITEM = iTEM;
		PRODUCTSPECNAME = pRODUCTSPECNAME;
		MODELTYPE = mODELTYPE;
		HOURTIMEKEY = hOURTIMEKEY;
		LINE = lINE;
		Qty = qty;
	}
	public Monitor8VO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Monitor8VO [FACTORY=" + FACTORY + ", ITEM=" + ITEM + ", PRODUCTSPECNAME=" + PRODUCTSPECNAME
				+ ", MODELTYPE=" + MODELTYPE + ", HOURTIMEKEY=" + HOURTIMEKEY + ", LINE=" + LINE + ", Qty=" + Qty
				+ ", DATENAME=" + DATENAME + ", numbs=" + numbs + "]";
	}
	
	//重写 equals 方法 ，进而判断 两个对象是否是相等的 ：这个方法很关键  ，
	@Override
	public boolean equals(Object obj) {
		// 如果为同一对象的不同引用,则相同
        if (this == obj) {
            return true;
        }
        // 如果传入的对象为空,则返回false
        if (obj == null) {
            return false;
        }

        // 如果两者属于不同的类型,不能相等
        if (getClass() != obj.getClass()) {
            return false;
        }

        // 类型相同, 比较内容是否相同:因业务需要，只用比较 factory 和 datename 两个属性即可
        Monitor8VO other = (Monitor8VO) obj;
        boolean isequal = Objects.equals(FACTORY, other.FACTORY) 
        					&& Objects.equals(DATENAME, other.DATENAME)
        					&& Objects.equals(owner, other.owner);

        return isequal;
	}
	
	
	

}
