package com.boe.idm.project.model.mybatis;

import java.util.Objects;

import org.apache.ibatis.type.Alias;

@Alias("ModuleWipPlanVO")
public class ModuleWipPlanVO {
	
	private String factory;
	private String operation;
	private String qty;
	private String owner;
	
	private int numbs;
	
	public ModuleWipPlanVO(String factory, String operation, String qty, String owner, int numbs) {
		super();
		this.factory = factory;
		this.operation = operation;
		this.qty = qty;
		this.owner = owner;
		this.numbs = numbs;
	}

	public ModuleWipPlanVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getFactory() {
		return factory;
	}

	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	


	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public int getNumbs() {
		return numbs;
	}

	public void setNumbs(int numbs) {
		this.numbs = numbs;
	}

	@Override
	public String toString() {
		return "ModuleWipPlanVO [factory=" + factory + ", operation=" + operation + ", qty=" + qty + ", numbs=" + numbs
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

        // 类型相同, 比较内容是否相同:因业务需要，只用比较 factory 和 operation 两个属性即可
        ModuleWipPlanVO other = (ModuleWipPlanVO) obj;
        boolean isequal = Objects.equals(factory, other.factory) 
        					&& Objects.equals(operation, other.operation)
        					&&Objects.equals(owner, other.owner);

        return isequal;
	}
	
	

}
