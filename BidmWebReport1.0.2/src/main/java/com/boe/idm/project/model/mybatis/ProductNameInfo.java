package com.boe.idm.project.model.mybatis;


import org.apache.ibatis.type.Alias;

@Alias("ProductNameInfo")
public class ProductNameInfo {
	private String factory;
	private String product;
	private String productName;
	private String owner;
	
	private  Integer numb;
	
	
	public Integer getNumb() {
		return numb;
	}
	public void setNumb(Integer numb) {
		this.numb = numb;
	}
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public ProductNameInfo(String factory, String product, String productName, String owner) {
		super();
		this.factory = factory;
		this.product = product;
		this.productName = productName;
		this.owner = owner;
	}
	public ProductNameInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
