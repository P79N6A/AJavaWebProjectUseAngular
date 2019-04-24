package com.boe.idm.project.service;

import java.util.List;
import java.util.Map;

import com.boe.idm.project.model.mybatis.FavoriteMenu;
import com.boe.idm.project.model.mybatis.MenuInfo;

public interface MenuInfoService {

	public int insertMenuInfo(MenuInfo menuInfo) throws Exception;
	
	public MenuInfo selectMenuInfo(MenuInfo menuInfo) throws Exception;
	
	public int updateMenuInfo(MenuInfo menuInfo) throws Exception;
	
	public int deleteMenuInfo(MenuInfo menuInfo) throws Exception;

	public String getUserMenu(String userName);

	public List<MenuInfo> getMenuInfoListByMenuId(String menuId);

	public List<MenuInfo> getAllAvalidMenu();

	public List<MenuInfo> selectAllMenu(String menuId) throws Exception;

	public String getAllUsableMenuForTree();

	public List<String> getAsignMenuListForTree(String roleId);

	public Map<String, Object> pagenate(Map<String, Object> map);

	public int getTotCount(String menuId);
	
	public List<String> getMenuByUser(String userAccount);

	public List<MenuInfo> getFavoriteMenuByuser(String userAccount);

	public List<MenuInfo> getTop6MenuByuser(String userAccount);
	
	public List<MenuInfo> getMenuByUser_FavoriteMenu(String userAccount);

	public void insertFavoriteMenu(FavoriteMenu favoriteMenu);

	public void deleteFavoriteMenuk(FavoriteMenu favoriteMenu);
}
