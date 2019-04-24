package com.boe.idm.project.model.mybatis;

import java.util.Objects;

import org.apache.ibatis.type.Alias;

@Alias("CellImportDataVO")
public class CellImportPlanVO {
	private String factory;
	private String item;
	private String datename;
	private String productspecname;
	private String qty;
	private String owner;
	
	
	
	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	private Integer numbs;

	public String getFactory() {
		return factory;
	}

	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getDatename() {
		return datename;
	}

	public void setDatename(String datename) {
		this.datename = datename;
	}

	public String getProductspecname() {
		return productspecname;
	}

	public void setProductspecname(String productspecname) {
		this.productspecname = productspecname;
	}

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public Integer getNumbs() {
		return numbs;
	}

	public void setNumbs(Integer numbs) {
		this.numbs = numbs;
	}

	

	public CellImportPlanVO(String factory, String item, String datename, String productspecname, String qty,
			Integer numbs) {
		super();
		this.factory = factory;
		this.item = item;
		this.datename = datename;
		this.productspecname = productspecname;
		this.qty = qty;
		this.numbs = numbs;
	}

	public CellImportPlanVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CellImportPlanVO [factory=" + factory + ", item=" + item + ", datename=" + datename
				+ ", productspecname=" + productspecname + ", qty=" + qty + ", owner=" + owner + ", numbs=" + numbs
				+ "]";
	}

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
        CellImportPlanVO other = (CellImportPlanVO) obj;
        boolean isequal = Objects.equals(factory, other.factory) && Objects.equals(datename, other.datename);

        return isequal;
	}


	
	
	
}
