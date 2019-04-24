package com.boe.idm.project.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.item.ItemMapper;
import com.boe.idm.project.model.mybatis.ItemVO;
import com.boe.idm.project.service.ItemService;

@Service
public class ItemServiceImple implements ItemService {

	@Resource
	private ItemMapper itemMapper;
	
	@Override
	public List<ItemVO> itemList(String itemTable) throws Exception {
		Map<String, Object> map = new HashMap<>();
		map.put("itemTable",itemTable);
		return itemMapper.itemList(map);
	}
	
	@Override
	public int insertItem(ItemVO itemVO) throws Exception {
		return itemMapper.insertItem(itemVO);
	}

	@Override
	public int updateItem(ItemVO itemVO) throws Exception {
		return itemMapper.updateItem(itemVO);
	}
	
	@Override
	public int deleteItem(ItemVO itemVO) throws Exception {
		return itemMapper.deleteItem(itemVO);
	}

}
