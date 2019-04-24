package com.boe.idm.project.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.mybatis.FavoriteMenu;
import com.boe.idm.project.model.mybatis.MenuInfo;
import com.boe.idm.project.model.mybatis.RoleInfo;
import com.boe.idm.project.model.mybatis.UserRoleLink;
import com.boe.idm.project.service.MenuInfoService;


@RestController
@RequestMapping("/api/menuinfo")
public class MenuInfoController {

	@Autowired
	private MenuInfoService service;
	
	@RequestMapping(value="/getAllMenu" , method=RequestMethod.GET)
	public @ResponseBody List<MenuInfo> selectAllPtable(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String menuId) throws Exception{
		return service.selectAllMenu(menuId);
	}
	
	@RequestMapping(value="/getAllAvalidMenu" , method=RequestMethod.GET)
	public @ResponseBody List<MenuInfo> getAllAvalidMenu(HttpServletRequest request, HttpServletResponse response) throws Exception{
		return service.getAllAvalidMenu();
	}
	
	
	@RequestMapping(value="/getmenu")
	public String getMenuList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		return  service.getUserMenu(request.getHeader("userCode"));
	}
	
	@RequestMapping(value="/getMenuInfoByMenuId")
	public  @ResponseBody List<MenuInfo> getMenuInfoListByMenuId(HttpServletRequest request, HttpServletResponse response,@RequestParam String menuId) throws Exception{
		
		return  service.getMenuInfoListByMenuId(menuId);
	}
	
	@RequestMapping(value="/update/updateMenuInfo", method=RequestMethod.PUT)
	public  int update(HttpServletRequest request, HttpServletResponse response,@RequestBody MenuInfo  menuInfo) throws Exception{
 		menuInfo.setUpdateTime(new Date());
		menuInfo.setUpdateUser(request.getHeader("userCode"));
		return  service.updateMenuInfo(menuInfo);
	}
	
	@RequestMapping(value="/insert/menuInfo",method=RequestMethod.POST)
	public int insertMenuInfo(HttpServletRequest request,HttpServletResponse response,
			@RequestBody MenuInfo menuInfo) throws Exception{
		menuInfo.setCreateTime(new Date());
		menuInfo.setCreateUser(request.getHeader("userCode"));
		return service.insertMenuInfo(menuInfo);
	}
	
	@RequestMapping(value="/delete/deleteMenuInfo", method=RequestMethod.DELETE)
	public  int delete(HttpServletRequest request, HttpServletResponse response,@RequestBody MenuInfo  menuInfo) throws Exception{
		return  service.deleteMenuInfo(menuInfo);
	}
	// tree list
	@RequestMapping(value="/getmenutree")
	public String getMenuListForTree(HttpServletRequest request, HttpServletResponse response) throws Exception{
 		return  service.getAllUsableMenuForTree();
	}
	
	@RequestMapping(value="/getasignmenutree")
	public List<String> getAsignMenuListForTree(HttpServletRequest request, HttpServletResponse response,@RequestParam String menuId) throws Exception{
 		String roleId = menuId;
		return  service.getAsignMenuListForTree(roleId);
	}
	
	@RequestMapping(value="/pagenate" , method=RequestMethod.GET)
	public @ResponseBody Map<String, Object> pagenate(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="pageRow") Integer pageRow,
			@RequestParam(value="startRow") Integer startRow,
 			@RequestParam(value="menuId") String menuId) throws Exception{
		Map<String,Object> map = new HashMap<>();
		map.put("pageRow", pageRow);
		map.put("startRow", startRow);
		map.put("menuId", "%"+menuId+"%");
		return service.pagenate(map);
	}
	
	@RequestMapping(value="/getcount", method = RequestMethod.GET)
	public int gridListCount(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="menuId") String menuId
			) throws Exception {
		return service.getTotCount("%"+menuId+"%");
	}
	
	/**
	 * 获取登陆用户的菜单权限，返回字符串数组
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/getMenuByuser", method = RequestMethod.GET)
	public List<String> getMenuByUser(HttpServletRequest request, HttpServletResponse response) throws Exception{
		return  service.getMenuByUser(request.getHeader("userCode"));
	}
		

	/**
	 * 
	 * @param userAccount
	 * @return get avaliable  menu by login user (left join table: roleinfo)
	 * @throws Exception
	 */
	@RequestMapping(value="/getFavoriteMenuByuser", method = RequestMethod.GET)
	public List<MenuInfo> getFavoriteMenuByuser(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userAccount") String userAccount) throws Exception{
		return  service.getFavoriteMenuByuser(userAccount);
	}
	/**
	 * 
	 * @param userAccount
	 * @return get last 6  menu from  menuclick table  
	 * @throws Exception
	 */
	@RequestMapping(value="/getTop6MenuByuser", method = RequestMethod.GET)
	public List<MenuInfo> getTop6MenuByuser(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userAccount") String userAccount) throws Exception{
		return  service.getTop6MenuByuser(userAccount);
	}
		
	/**
	 * 获取登陆用户的菜单权限，返回MenuInfo list
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/getMenuByuser_favorite", method = RequestMethod.GET)
	public List<MenuInfo> getMenuByUser_FavoriteMenu(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="userAccount") String userAccount) throws Exception{
		return  service.getMenuByUser_FavoriteMenu(userAccount);
	}
	
 
	@RequestMapping(value="/update/saveChange",method=RequestMethod.PUT)
	public int saveChange(HttpServletRequest request,HttpServletResponse response,@RequestBody Map map) throws Exception{ //,@RequestBody List<MenuInfo> unAsignMenuList,@RequestBody List<MenuInfo> asignMenuList
 		List selectMenu_cache = (List<MenuInfo>) map.get("selectMenu_cache");
		List selectMenuInfoList = (List<MenuInfo>) map.get("selectMenuInfoList");
		String userAccount = (String) map.get("userAccount");
		//add
		for(Object menu: selectMenuInfoList) {
			HashMap menuInfo_ = (HashMap) menu;
			if(!selectMenu_cache.contains(menu)) {
				FavoriteMenu fm = new FavoriteMenu();
				fm.setUserAccount(userAccount);
				fm.setMenuId(menuInfo_.get("menuId").toString());
				
				service.insertFavoriteMenu(fm);
			}
		}
		// delete
		for(Object menu: selectMenu_cache) {
			HashMap menuInfo_ = (HashMap) menu;
			if(!selectMenuInfoList.contains(menu)) {
				FavoriteMenu fm = new FavoriteMenu();
				fm.setUserAccount(userAccount);
				fm.setMenuId(menuInfo_.get("menuId").toString());
				
				service.deleteFavoriteMenuk(fm);
			}
		}
		 
		return 0;
	}
}
