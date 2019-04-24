package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ProductNameInfoMapper;
import com.boe.idm.project.model.mybatis.ProductNameInfo;
import com.boe.idm.project.service.ProductNameInfoService;

@Service
public class ProductNameInfoServiceImple implements ProductNameInfoService {

	@Autowired
	private ProductNameInfoMapper productNameInfoMapper;
	
	@Override
	public List<ProductNameInfo> queryAll() {
		return productNameInfoMapper.queryAll();
	}

	@Override
	public List<ProductNameInfo> queryByName(String factoryname) {
		return productNameInfoMapper.queryByName(factoryname);
	}

	//查询之前需要先把相同的数据给删除掉
	@Override
	public int insertOne(ProductNameInfo productNameInfo) {
		int numbs = productNameInfoMapper.queryObjectNumbers(productNameInfo);
		if (numbs != 0) { // 当去查询的时候发现有一条完全重复的数据，则返回 555 提示值
			//productNameInfoMapper.delteteOne(productNameInfo);
			return 555; // 这个地方是固定写成这样的
		}
		int res = productNameInfoMapper.insertOne(productNameInfo);
		return res;
	}

	@Override
	public int delteteOne(ProductNameInfo productNameInfo) {
		return productNameInfoMapper.delteteOne(productNameInfo);
	}

	@Override
	public int updateOne(ProductNameInfo productNameInfo) {
		return productNameInfoMapper.updateOne(productNameInfo);
	}

}
