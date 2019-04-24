package com.boe.idm.project.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleDaChengRatioMapper;
import com.boe.idm.project.model.mybatis.KeyInRemarkVO;
import com.boe.idm.project.model.mybatis.ModuleDaChengRatioVO;
import com.boe.idm.project.model.mybatis.ModulePlanVO;
import com.boe.idm.project.service.ModuleDaChengRatioService;

@Service
public class ModuleDaChengRatioServiceImple implements ModuleDaChengRatioService {

	@Autowired
	private ModuleDaChengRatioMapper mapper;
	
	@Override
	public List<ModuleDaChengRatioVO> queryObjects() {
		return mapper.queryObjects();
	}

	@Override
	public int insertRemark(String item, String remark) {
		return mapper.insertRemark(item, remark);
	}

	@Override
	public List<KeyInRemarkVO> queryRemark() {
		return mapper.queryRemark();
	}

	@Override
	public List<ModulePlanVO> readExcel(String realpath) throws IOException {
		List<ModulePlanVO> list = new ArrayList<ModulePlanVO>();
		File excelfile = new File(realpath.replaceAll("\\\\", "/"));
		if (excelfile != null && excelfile.exists()) {
			Workbook workbook = this.getWorkbok(excelfile);
			if (workbook != null) {
				Sheet sheet = workbook.getSheetAt(0);
				if (sheet != null) {
					for(int i = sheet.getFirstRowNum()+1;i <= sheet.getLastRowNum();i++){
						Row row = sheet.getRow(i);
						if (row != null) {
							ModulePlanVO modulePlanVO = new ModulePlanVO();
							int firstCellNum = row.getFirstCellNum();
							modulePlanVO.setFactory(row.getCell(firstCellNum) != null ? String.valueOf(row.getCell(firstCellNum)) : "Module");
							
							String datenamestr = String.valueOf(row.getCell(firstCellNum+1));
							if (datenamestr.equals("") || datenamestr.trim().equals("")) {
								modulePlanVO.setDatename("");
							}else{
								Double aa = Double.parseDouble(datenamestr);
								BigDecimal bb = new BigDecimal(aa);
								modulePlanVO.setDatename(bb.toString());
							}
							
							modulePlanVO.setItem(row.getCell(firstCellNum+2) != null ? String.valueOf(row.getCell(firstCellNum+2)) : "");
							modulePlanVO.setQty(row.getCell(firstCellNum+3) != null ? String.valueOf(row.getCell(firstCellNum+3)) : "");
							modulePlanVO.setOwner("MDL");
							
							if (!list.contains(modulePlanVO)) {
								list.add(modulePlanVO);
							}
							
						}
					}
					
				}
			}
		}
		return list;
	}

	  /**
     * 判断Excel的版本,获取Workbook
     * @param File
     * @return Workbook
     * @throws IOException
     */
    public Workbook getWorkbok(File file) throws IOException{
    	String fileType = file.getName().substring(file.getName().lastIndexOf("."), file.getName().length());
        Workbook wb = null;
        FileInputStream in = new FileInputStream(file);
        if(fileType.toUpperCase().endsWith("XLS")){     //Excel&nbsp;2003
            wb = new HSSFWorkbook(in);
        }else if(fileType.toUpperCase().endsWith("XLSX")){    // Excel 2007/2010
            wb = new XSSFWorkbook(in);
        }
        return wb;
    }

	@Override
	public int insertPlan(List<ModulePlanVO> datas) {
		int flag = 0;
		
		List<ModulePlanVO> list = new ArrayList<>();
		
		for(Object object : datas){
			HashMap AAA = (HashMap)object;
			ModulePlanVO bbb = new ModulePlanVO();
			
			bbb.setFactory(AAA.get("factory").toString());
			bbb.setDatename(AAA.get("datename").toString());
			bbb.setItem(AAA.get("item").toString());
			bbb.setQty(AAA.get("qty").toString());
			bbb.setOwner(AAA.get("owner").toString());
			
			list.add(bbb);
			
		}
		
		flag = mapper.insertPlan(list);
		
		return flag;
	}
}
