package com.boe.idm.project.service;

import java.util.List;

import com.boe.idm.project.model.mybatis.ArrayProDataZaohui1;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui2;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui3;
import com.boe.idm.project.model.mybatis.ArrayProDataZaohui4;

public interface ArrayProDataZaohuiService {

	public List<ArrayProDataZaohui1> getData1() throws Exception;

	public List<ArrayProDataZaohui2> getData2() throws Exception;

	public List<ArrayProDataZaohui3> getData3() throws Exception;

	public List<ArrayProDataZaohui4> getData4(String type) throws Exception;

}
