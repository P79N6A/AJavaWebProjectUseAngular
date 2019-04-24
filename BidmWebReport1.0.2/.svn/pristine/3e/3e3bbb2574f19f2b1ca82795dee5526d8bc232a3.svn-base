package com.boe.idm.project.mapper.primary.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.boe.idm.project.model.mybatis.FavoriteMenu;
import com.boe.idm.project.model.mybatis.MenuInfo;
import com.boe.idm.project.model.mybatis.RoleMenuLink;


@Mapper
public interface MenuInfoMapper {

	public List<MenuInfo> selectAllMenu(@Param(value = "menuId") String menuId) throws Exception;
	
	public MenuInfo selectMenuInfo(MenuInfo menuInfo) throws Exception;
	
	public int updateMenuInfo(MenuInfo menuInfo) throws Exception;
	
	public int deleteMenuInfo(MenuInfo menuInfo) throws Exception;

	public List<MenuInfo> getUserMenu(@Param(value = "userAccount") String userAccount);

	public List<MenuInfo> getMenuInfoListByMenuId(@Param(value = "menuId") String menuId);

	public int saveOrUpdate(MenuInfo menuInfo);
	
	public List<MenuInfo> getAllAvalidMenu();

	public List<MenuInfo> getMenyByRole(@Param(value = "roleId") String roleId);

	public List<MenuInfo> pagenate(Map<String, Object> map);

	public int getTotCount(@Param(value = "menuId") String menuId);
	
	public List<MenuInfo> getSignedMenu(@Param(value = "menuId") String roleId);

	public List<MenuInfo> getFavoriteMenuByuser(String userAccount);

	public List<MenuInfo> getTop6MenuByuser(String userAccount);

	public void insertFavoriteMenu(FavoriteMenu favoriteMenu);

	public void deleteFavoriteMenuk(FavoriteMenu favoriteMenu);

	public List<MenuInfo> getMenuByUser_FavoriteMenu(String userAccount);
}
