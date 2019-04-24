package com.boe.idm.project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ProductNameInfo;
import com.boe.idm.project.service.ProductNameInfoService;

@RestController
@RequestMapping("/api")
public class ProductNameInfoController {
	
	@Autowired
	private ProductNameInfoService service;
	
	//1.查询所有的信息
	@RequestMapping(value="/basicinfo/productNameAll",method=RequestMethod.GET)
	public List<ProductNameInfo> queryAll(HttpServletRequest request,
			HttpServletResponse response){
		return service.queryAll();
	}
	
	//2.查询某个工厂的信息
	@RequestMapping(value="/basicinfo/productName",method=RequestMethod.GET)
	public List<ProductNameInfo> queryByName(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="factoryname",required=true) String factoryname){
		return service.queryByName(factoryname);
	}
	
	//3.插入一个新的对象
	@RequestMapping(value="/basicinfo/insertOne",method=RequestMethod.GET)
	public int insertOne(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="factory",required=true) String factory,
			@RequestParam(value="product",required=true) String product,
			@RequestParam(value="productname",required=true) String productname,
			@RequestParam(value="owner",required=true) String owner
			){
		ProductNameInfo productNameInfo = new ProductNameInfo(factory, product, productname, owner);
		return service.insertOne(productNameInfo);
	}
	
	//4.删除一个对象
	@RequestMapping(value="/basicinfo/deleteOne",method=RequestMethod.DELETE)
	public int deleteOne(HttpServletRequest request,HttpServletResponse response,
			@RequestBody ProductNameInfo productNameInfo){
		return service.delteteOne(productNameInfo);
	}
	
	//5.更新一个对象
	@RequestMapping(value="/basicinfo/updateOne",method=RequestMethod.POST)
	public int updateOne(HttpServletRequest request,HttpServletResponse response,
			@RequestBody ProductNameInfo productNameInfo){
		return service.updateOne(productNameInfo);
	}

}
