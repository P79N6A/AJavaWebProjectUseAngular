package com.boe.idm.project.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.admin.OMenuInfoMapper;
import com.boe.idm.project.mapper.primaryOracle.admin.ORoleMenuLinkMapper;
import com.boe.idm.project.model.mybatis.FavoriteMenu;
import com.boe.idm.project.model.mybatis.GridVO;
import com.boe.idm.project.model.mybatis.MenuInfo;
import com.boe.idm.project.model.mybatis.RoleMenuLink;
import com.boe.idm.project.service.MenuInfoService;

@Service
public class MenuInfoServiceImpl implements MenuInfoService {
	
	@Autowired
	private OMenuInfoMapper menuInfoMapper;
	@Autowired
  	private ORoleMenuLinkMapper roleMenuLinkMapper;

	@Override
	public List<MenuInfo> selectAllMenu(String menuId) throws Exception {
		if(menuId != null && !"".equals(menuId)) {
			menuId = "%" + menuId + "%";
		}
		List<MenuInfo> list = menuInfoMapper.selectAllMenu(menuId);
		return list;
	}

	@Override
	public int insertMenuInfo(MenuInfo menuInfo) throws Exception {
 		return menuInfoMapper.saveOrUpdate(menuInfo);
	}

	@Override
	public MenuInfo selectMenuInfo(MenuInfo menuInfo) throws Exception {
		return menuInfoMapper.selectMenuInfo(menuInfo);
	}

	@Override
	public int updateMenuInfo(MenuInfo menuInfo) throws Exception {
 		return menuInfoMapper.updateMenuInfo(menuInfo);
	}

	@Override
	public int deleteMenuInfo(MenuInfo menuInfo) throws Exception {
		//delete rolemenu link table

		RoleMenuLink rm = new RoleMenuLink();
		rm.setRoleId(menuInfo.getMenuId());

		List<RoleMenuLink> list_ = roleMenuLinkMapper.selectRoleMenuLinkForDelete(rm);
		for (Iterator iterator = list_.iterator(); iterator.hasNext();) {
			RoleMenuLink roleMenuLink = (RoleMenuLink) iterator.next();
			roleMenuLinkMapper.deleteRoleMenuLink(roleMenuLink);			
		}
		return this.menuInfoMapper.deleteMenuInfo(menuInfo);
	}

	@Override
	public String getUserMenu(String userName) {

		List<MenuInfo> menuList = menuInfoMapper.getUserMenu(userName);
		
		JSONObject menu = new JSONObject();
		/*
		menu.put("projectName", "RMS");
		menu.put("basePackage","com.boe.idm");
		menu.put("baseTheme","serenity");
		*/
		try {
			menu.put("items", getDeepMenu(menuList,"root"));
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		return menu.toString();
	}

	/**
	 * 
	 * @param menuList
	 * @param parentId
	 * @return menulist string-json
	 * @throws JSONException 
	 */
	private JSONArray getDeepMenu(List<MenuInfo> menuList, String parentId) throws JSONException {
		JSONArray jsonArray = new JSONArray();
		for(MenuInfo mi : menuList) {
			if(parentId.equals(mi.getParentId())) 
			{
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("label", mi.getMenuId());
 				jsonObject.put("icon", mi.getIcon());
				
				if("Y".equals(mi.getIsLeaf())) //页面
				{
					jsonObject.put("routerLink", mi.getRouterlink());
				}
				else  //菜单
				{
					jsonObject.put("href", "#");
					jsonObject.put("items", getDeepMenu(menuList,mi.getMenuId()));
				}
				
				jsonArray.put(jsonObject);
			}
		}
 		return jsonArray;
	}

	@Override
	public List<MenuInfo> getMenuInfoListByMenuId(String menuId) {
		if(menuId != null && !"".equals(menuId)) {
			menuId = "%" + menuId + "%";
		}
 		return menuInfoMapper.getMenuInfoListByMenuId("%" + menuId + '%');
	}

	@Override
	public List<MenuInfo> getAllAvalidMenu() {
		// TODO Auto-generated method stub
		return this.menuInfoMapper.getAllAvalidMenu();
	}

	@Override
	public String getAllUsableMenuForTree() {
		List<MenuInfo> menuList = menuInfoMapper.getAllAvalidMenu();
		JSONObject menu = new JSONObject();
 
		try {
			menu.put("items", getDeepMenuForTree(menuList,"root"));
		} catch (JSONException e) {
			e.printStackTrace();
		}
		 
		return menu.toString();
	}
	
	private JSONArray getDeepMenuForTree(List<MenuInfo> menuList, String parentId) throws JSONException {
		JSONArray jsonArray = new JSONArray();
		for(MenuInfo mi : menuList) {
			if(parentId.equals(mi.getParentId())) 
			{
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("label", mi.getMenuId());
				jsonObject.put("data", mi.getMenuId());
				
				if("Y".equals(mi.getIsLeaf())) //页面
				{
					jsonObject.put("icon", "fa fa-file-o");
				}
				else  //菜单
				{
					jsonObject.put("expandedIcon", "fa fa-folder-open");
	 				jsonObject.put("collapsedIcon","fa fa-folder");
	 				jsonObject.put("expanded","true");
					jsonObject.put("children", getDeepMenuForTree(menuList,mi.getMenuId()));
				}
				
				jsonArray.put(jsonObject);
			}
		}
 		return jsonArray;
	}

	@Override
	public List<String> getAsignMenuListForTree(String roleId) {
		List<MenuInfo> menuList = menuInfoMapper.getMenyByRole(roleId);
		/*
		JSONObject menu = new JSONObject();
 
		try {
			menu.put("items", getDeepMenuForTree(menuList,"root"));
		} catch (JSONException e) {
			e.printStackTrace();
		}	
 		*/
		
		List<String> menu_= new ArrayList<String>();
		for(MenuInfo menu : menuList) {
			menu_ .add(menu.getMenuId());
		}
		 
		return menu_;
	}

	@Override
	public Map<String, Object> pagenate(Map<String, Object> map) {
		Map<String, Object> rsltMap = new HashMap<>();
		rsltMap = map;
		
		rsltMap.put("data", this.menuInfoMapper.pagenate(map));
 		return rsltMap;
	}

	@Override
	public int getTotCount(String menuId) {
 		return this.menuInfoMapper.getTotCount(menuId);
	}
 
 
	public List<String> getMenuByUser(String userAccount){
		List<MenuInfo> list = this.menuInfoMapper.getUserMenu(userAccount);
		
		List<String> menuList = new ArrayList<String>();
		for(MenuInfo menu : list) {
			String url_ = menu.getRouterlink();
			if(url_ != null && !"".equals(url_)) {
				menuList.add(url_);
			}
		}
		return menuList;
	}

	@Override
	public List<MenuInfo> getFavoriteMenuByuser(String userAccount) {
 		return this.menuInfoMapper.getFavoriteMenuByuser(userAccount);
	}

	@Override
	public List<MenuInfo> getTop6MenuByuser(String userAccount) {
		return this.menuInfoMapper.getTop6MenuByuser(userAccount);
	}
	
	public List<MenuInfo> getMenuByUser_FavoriteMenu(String userAccount){
		return this.menuInfoMapper.getMenuByUser_FavoriteMenu(userAccount);
	}

	@Override
	public void insertFavoriteMenu(FavoriteMenu favoriteMenu) {
		this.menuInfoMapper.insertFavoriteMenu(favoriteMenu);
	}

	@Override
	public void deleteFavoriteMenuk(FavoriteMenu favoriteMenu) {
		this.menuInfoMapper.deleteFavoriteMenuk(favoriteMenu);
	}
}
