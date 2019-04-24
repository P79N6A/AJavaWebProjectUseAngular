package com.boe.idm.project.model.mybatis;

import java.util.Objects;

import org.apache.ibatis.type.Alias;

@Alias("CfWipMovePlanVO")
public class CfWipMovePlanVO {
	private String factory;
	private String hourtimekey;
	private String opercode;
	private String line;
	private String qty;
	private String owner;
	
	private Integer nums;

	public String getFactory() {
		return factory;
	}

	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getHourtimekey() {
		return hourtimekey;
	}

	public void setHourtimekey(String hourtimekey) {
		this.hourtimekey = hourtimekey;
	}

	public String getOpercode() {
		return opercode;
	}

	public void setOpercode(String opercode) {
		this.opercode = opercode;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public Integer getNums() {
		return nums;
	}

	public void setNums(Integer nums) {
		this.nums = nums;
	}

	public CfWipMovePlanVO(String factory, String hourtimekey, String opercode, String line, String qty, String owner,
			Integer nums) {
		super();
		this.factory = factory;
		this.hourtimekey = hourtimekey;
		this.opercode = opercode;
		this.line = line;
		this.qty = qty;
		this.owner = owner;
		this.nums = nums;
	}

	public CfWipMovePlanVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CfWipMovePlanVO [factory=" + factory + ", hourtimekey=" + hourtimekey + ", opercode=" + opercode
				+ ", line=" + line + ", qty=" + qty + ", owner=" + owner + ", nums=" + nums + "]";
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

        // 类型相同, 比较内容是否相同:
        CfWipMovePlanVO other = (CfWipMovePlanVO) obj;
        boolean isequal = Objects.equals(factory, other.factory) 
        					&& Objects.equals(hourtimekey, other.hourtimekey)
        					&& Objects.equals(opercode, other.opercode)
        					&&Objects.equals(line, other.opercode)
        					&& Objects.equals(owner, other.owner);

        return isequal;
	}
	
	
	

}
