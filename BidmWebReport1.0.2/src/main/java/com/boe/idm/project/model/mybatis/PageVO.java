package com.boe.idm.project.model.mybatis;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.type.Alias;

@Alias("PageVO")
public class PageVO {

	private String gridName; 
	
	private Map<String, Object> search;
	private Map<String, Object> sort;
	
	private int startRow;
	private int endRow;
	private int totRow;
	
	private int pageRow;
	private int nowPage;
	
	private List resultList;
	

	public String getGridName() {
		return gridName;
	}

	public void setGridName(String gridName) {
		this.gridName = gridName;
	}

	public Map<String, Object> getSearch() {
		return search;
	}

	public void setSearch(Map<String, Object> search) {
		this.search = search;
	}

	public Map<String, Object> getSort() {
		return sort;
	}

	public void setSort(Map<String, Object> sort) {
		this.sort = sort;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getTotRow() {
		return totRow;
	}

	public void setTotRow(int totRow) {
		this.totRow = totRow;
	}

	public int getPageRow() {
		return pageRow;
	}

	public void setPageRow(int pageRow) {
		this.pageRow = pageRow;
	}

	public int getNowPage() {
		return nowPage;
	}

	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}

	public List getResultList() {
		return resultList;
	}

	public void setResultList(List resultList) {
		this.resultList = resultList;
	}
	
	
	
}
