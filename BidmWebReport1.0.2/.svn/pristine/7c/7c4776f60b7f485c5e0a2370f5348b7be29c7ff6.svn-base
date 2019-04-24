package com.boe.idm.project.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boe.idm.project.mapper.primaryOracle.dev.ModuleWipPlanMapper;
import com.boe.idm.project.model.mybatis.ModuleWipPlanVO;
import com.boe.idm.project.service.ModuleWipPlanService;

@Service
@Transactional
public class ModuleWipPlanServiceImple implements ModuleWipPlanService {

	@Value("${bidm.upload.file.directory}")
	private String fileDirectory;
	
	@Autowired
	private ModuleWipPlanMapper modulewipplanmapper;
	
	
	
	//1.这个方法是用来读取 excel文件的操作
	@Override
	public List<ModuleWipPlanVO> importExcel(String localPath) throws IOException {
		
		List<ModuleWipPlanVO> moduleWipPlanVOlist = new ArrayList<ModuleWipPlanVO>();
		File excel = new File(localPath.replaceAll("\\\\", "/"));
		if (excel != null && excel.isFile()) {
			Workbook workbook = getWorkbok(excel);
			if (workbook != null) {
				Sheet sheet =  workbook.getSheetAt(0);
				if (sheet != null) {
					
					DecimalFormat df = new DecimalFormat("0");
					
					for(int i = sheet.getFirstRowNum()+1;i <= sheet.getLastRowNum();i++){
						Row row = sheet.getRow(i);
						if (row == null) {
							continue;
						}
						
						ModuleWipPlanVO moduleWipPlanVO = new ModuleWipPlanVO();
						
						int firstCell = row.getFirstCellNum();
						moduleWipPlanVO.setFactory(row.getCell(firstCell)!=null ? String.valueOf(row.getCell(firstCell)).trim():null);
						moduleWipPlanVO.setOperation(row.getCell(firstCell+1)!=null ? String.valueOf(row.getCell(firstCell+1)).trim():null);
						moduleWipPlanVO.setQty(row.getCell(firstCell+2)!=null ? String.valueOf(row.getCell(firstCell+2)).trim():null);
						
						if (moduleWipPlanVO != null) {
							moduleWipPlanVOlist.add(moduleWipPlanVO);
						}
					}
					
					
				}
			}
			
		}
		return moduleWipPlanVOlist;
	}
	
	 /**
     * 工具方法  ： 这里就用刀了 IO流的操作
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

    
    //2.这个方法是用来向数据库中插入数据的方法
	@Override
	public int insertObjects(List<ModuleWipPlanVO> moduleWipPlanVOs) {
		int flag = 0;
		//1.用来保存需要插入的数据
		List<ModuleWipPlanVO> list = new ArrayList<>();
		//2.用来保存需要删除的对象
		List<ModuleWipPlanVO> deletelist = new ArrayList<>();
		
		//3.循环遍历创建对象 
		for(Object object : moduleWipPlanVOs){
			//将对象转换为一个map,用来取值操作
			HashMap map = (HashMap) object;
			ModuleWipPlanVO aa = null;
			//ModuleWipPlanVO bb = new ModuleWipPlanVO();
			
			if (map.get("factory") != null && map.get("operation") != null && map.get("qty") != null) {
				aa = new ModuleWipPlanVO();
				aa.setFactory(map.get("factory") != null ? map.get("factory").toString():"");
				aa.setOperation(map.get("operation") != null ? map.get("operation").toString():"");
				aa.setQty(map.get("qty") != null ? map.get("qty").toString():"0");
				aa.setOwner("MODULE");
			}
			
			if (aa != null) {
				flag = modulewipplanmapper.insertObject(aa);
			}
			
			
		}
		return flag;
	}

	//3. 从数据库中读取 数据的方法
	@Override
	public List<ModuleWipPlanVO> queryObjects(String factory) {
		return modulewipplanmapper.queryObjects(factory);
	}

}
