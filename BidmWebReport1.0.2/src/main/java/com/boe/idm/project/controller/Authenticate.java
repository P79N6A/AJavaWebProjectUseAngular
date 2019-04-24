package com.boe.idm.project.controller;

import java.util.ResourceBundle;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boe.bidm.auth.UnifiedAuth;
import com.boe.idm.project.model.data.BidmRsp;
import com.boe.idm.project.model.data.BidmRspUser;
import com.boe.idm.project.model.data.BidmUser;
import com.boe.idm.project.model.mybatis.UserInfo;
import com.boe.idm.project.service.UserInfoService;
import com.boe.idm.project.utils.DateUtils;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping("/api")
public class Authenticate {
	private final Logger logger = LoggerFactory.getLogger(Authenticate.class);
	@Autowired
	private UserInfoService userInfoService;
//	@RequestMapping(value="/authenticate", method = RequestMethod.POST)
//	public UserVO authenticate(
//			HttpServletRequest request, 
//			HttpServletResponse response,
//			@RequestBody UserVO userVO
//			) throws Exception {
//		
//		userVO.setToken("fake-jwt-token");
//		userVO.setLoginTime(DateUtils.getCurrentTimeStamp());
//		logger.debug("return userVO : "+userVO);
//		
//		return userVO;
//	}
	
	@RequestMapping(value="/authenticate", method = RequestMethod.POST)
	public String authenticate(
			HttpServletRequest request, 
			HttpServletResponse response,
			String username, String password
			) throws Exception {

		BidmRspUser rsp = new BidmRspUser();
		
		ResourceBundle bundle = ResourceBundle.getBundle("application");
		if (Boolean.parseBoolean(bundle.getString("unifiedauth.enable"))) {
			UserInfo userParam = new UserInfo();
			userParam.setUserAccount(username);
			UserInfo tmp = userInfoService.selectUserInfo(userParam);
			
			if(tmp == null) {
				//用户不存在 返回false
				String result = "{\"result\":false,\"message\":\"用户未注册\"}";
				rsp.setResult(false);
				JSONObject objResult = new JSONObject(result);
 				rsp.setMessage(JsonUtils.getString(objResult, "message"));
				return rsp.toJson().toString();
			}
 //			System.out.println(result);
			//admin user
			if (username.equals("admin")) {
				if(!"admin9527".equals(password)) {
					String result = "{\"result\":false,\"message\":\"密码不正确\"}";
					rsp.setResult(false);
					JSONObject objResult = new JSONObject(result);
	 				rsp.setMessage(JsonUtils.getString(objResult, "message"));
					return rsp.toJson().toString();
				}
				rsp.setResult(true);
				BidmUser user = new BidmUser();
				user.setUserCode("admin");
				user.setToken("fake-jwt-token");
				user.setLoginTime(DateUtils.getCurrentTimeStamp());
				rsp.setUser(user);
				
				return rsp.toJson().toString();
			}else {
				String result = UnifiedAuth.login(username, password);
			
				JSONObject objResult = new JSONObject(result);
				boolean bRes = objResult.getBoolean("result");
				rsp.setResult(bRes);
				
				if (bRes) {
					BidmUser user = new BidmUser();
					user.setLoginTime(DateUtils.getCurrentTimeStamp());
					user.setUserId(JsonUtils.getString(objResult, "userId"));
					user.setUserCode(JsonUtils.getString(objResult, "userCode"));
					user.setUserName(JsonUtils.getString(objResult, "userName"));
					user.setToken(JsonUtils.getString(objResult, "token"));
					user.setMobile(JsonUtils.getString(objResult, "mobile"));
					user.setEmail(JsonUtils.getString(objResult, "email"));
					user.setOrgPath(JsonUtils.getString(objResult, "orgPath"));
					rsp.setUser(user);
				} else {
					rsp.setMessage(JsonUtils.getString(objResult, "message"));
				}
			}
		} else {
			rsp.setResult(true);
			BidmUser user = new BidmUser();
			user.setUserCode("bidm");
			user.setToken("fake-jwt-token");
			user.setLoginTime(DateUtils.getCurrentTimeStamp());
			rsp.setUser(user);
		}
		
//		user.setToken("fake-jwt-token");
//		user.setLoginTime(DateUtils.getCurrentTimeStamp());
//		logger.debug("return userVO : "+userVO);
		
		return rsp.toJson().toString();
	}
	
	@RequestMapping(value="/authenticate/token", method = RequestMethod.POST)
	public boolean authenticateToken(
			HttpServletRequest request, 
			HttpServletResponse response,
			String username, String token
			) throws Exception {
		BidmRsp rsp = new BidmRsp();
		
		ResourceBundle bundle = ResourceBundle.getBundle("application");
		if (Boolean.parseBoolean(bundle.getString("unifiedauth.enable")) && !username.toLowerCase().equals("admin")) {
			String result = UnifiedAuth.tokenAuth(token);
			JSONObject objResult = new JSONObject(result);
			boolean bRes = objResult.getBoolean("result");
			rsp.setResult(bRes);
			if (!bRes) {
				rsp.setMessage(JsonUtils.getString(objResult, "message"));
			}
		} else {
			rsp.setResult(true);
		}
		
//		return rsp.toJson().toString();
		return rsp.isResult();
	}
}
