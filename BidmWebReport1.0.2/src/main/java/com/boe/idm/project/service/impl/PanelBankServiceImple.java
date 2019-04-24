package com.boe.idm.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.PanelBankMapper;
import com.boe.idm.project.model.mybatis.PanelBankInfoVO;
import com.boe.idm.project.model.mybatis.PanelBankVO;
import com.boe.idm.project.model.mybatis.PanelBankkfVO;
import com.boe.idm.project.service.PanelBankService;

@Service
public class PanelBankServiceImple implements PanelBankService {
	
	@Autowired
	private PanelBankMapper panelBankMapper;

	@Override
	public List<PanelBankVO> queryObjects1(String hourtime) {
		return panelBankMapper.queryObjects1(hourtime);
	}

	@Override
	public List<PanelBankVO> queryObjects2(String hourtime) {
		return panelBankMapper.queryObjects2(hourtime);
	}

	@Override
	public List<PanelBankVO> queryObjects3(String hourtime) {
		return panelBankMapper.queryObjects3(hourtime);
	}

	@Override
	public List<PanelBankVO> queryObjects4(String hourtime) {
		return panelBankMapper.queryObjects4(hourtime);
	}

	@Override
	public List<PanelBankkfVO> queryOjbects5(String hourtime) {
		return panelBankMapper.queryOjbects5(hourtime);
	}

	@Override
	public List<PanelBankkfVO> queryOjbects6(String hourtime) {
		return panelBankMapper.queryOjbects6(hourtime);
	}

	@Override
	public List<PanelBankkfVO> queryOjbects7(String hourtime) {
		return panelBankMapper.queryOjbects7(hourtime);
	}

	@Override
	public List<PanelBankInfoVO> queryAllBasicInfo() {
		return panelBankMapper.queryAllBasicInfo();
	}

	@Override
	public int insertOne(PanelBankInfoVO panelBankInfoVO) {
		//1.先查询当前的对象是否存在：如果存在直接返回，如果不存在则 进行插入操作
		PanelBankInfoVO aa = null;
		int res;
		aa = panelBankMapper.queryOneObject(panelBankInfoVO); 
		//System.out.println(aa);
		if (aa == null) { // 如果是 没有查到，则对象仍然为null 
			panelBankMapper.insertOne(panelBankInfoVO);
			res =  666;
		}else{
			res = 555;
		}
		return res;
	}

	@Override
	public int updateOne(PanelBankInfoVO panelBankInfoVO) {
		return panelBankMapper.updateOne(panelBankInfoVO);
	}

	@Override
	public int deleteOne(PanelBankInfoVO panelBankInfoVO) {
		return panelBankMapper.deleteOne(panelBankInfoVO);
	}

}
