package com.boe.idm.project.model.mybatis;

import org.apache.ibatis.type.Alias;

@Alias("ScProductInfoVO")
public class ScProductInfoVO {
	private String factory;
	private String productname;
	private String product;
	private String model_type;
	private Double cut_number;
	private String line;
	private Double product_size;
	
	

	public Double getProduct_size() {
		return product_size;
	}

	public void setProduct_size(Double product_size) {
		this.product_size = product_size;
	}

	public String getFactory() {
		return factory;
	}

	public void setFactory(String factory) {
		this.factory = factory;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getModel_type() {
		return model_type;
	}

	public void setModel_type(String model_type) {
		this.model_type = model_type;
	}

	public Double getCut_number() {
		return cut_number;
	}

	public void setCut_number(Double cut_number) {
		this.cut_number = cut_number;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

}
