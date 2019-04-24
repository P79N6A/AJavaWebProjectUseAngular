package com.boe.idm.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.ItemVO;
import com.boe.idm.project.service.ItemService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@RequestMapping(value="/item/list", method = RequestMethod.GET)
	public List<ItemVO> itemList(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="itemTable", required=false) String itemTable	
			) throws Exception{
		return itemService.itemList(itemTable);
	}
	
	@RequestMapping(value="/item/insert", method = RequestMethod.POST)
	public int insertItem(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody ItemVO itemVO
			) throws Exception{
		return itemService.insertItem(itemVO);
	}
	
	@RequestMapping(value="/item/update", method = RequestMethod.PUT)
	public int updateItem(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody ItemVO itemVO
			) throws Exception{
		return itemService.updateItem(itemVO);
	}
	
	@RequestMapping(value="/item/delete", method = RequestMethod.DELETE)
	public int deleteItem(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestBody ItemVO itemVO
			) throws Exception{
		return itemService.deleteItem(itemVO);
	}
	
}
