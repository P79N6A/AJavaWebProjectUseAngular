package com.boe.idm.project.service.impl;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primaryOracle.spec.OSpecMapper;
import com.boe.idm.project.model.mybatis.SpecVO;
import com.boe.idm.project.service.SpecService;

@Service
public class SpecServiceImple implements SpecService {
	@Value("${bidm.upload.file.directory}")
	private String fileDirectory;
	
	@Autowired
	private OSpecMapper specMapper;
	
	@Override
	public List<SpecVO> specList() throws Exception {	
		return specMapper.specList();
	}
	
	@Override
	public int specUpdate(SpecVO specVO) throws Exception{
		return specMapper.specUpdate(specVO);
	}
	
	@Override
	public int specDelete(List<SpecVO> specVOList) throws Exception{
		int rslt = 0;
		for(SpecVO specVO:specVOList) {
			rslt = specMapper.specDelete(specVO);
			if(rslt!=1) {
				new Exception();
				return 0;
			}
		}
		return 0;
	}
	
	@Override
	public int specInsert(SpecVO specVO) throws Exception{
		return specMapper.specInsert(specVO);
	}
	
	@Override
	public List<LinkedHashMap<String, Object>> alarmList(Map<String, Object> paraMap)throws Exception{
		return specMapper.specAlarm(paraMap);
	}
	
	@Override
	public List<LinkedHashMap<String, Object>> alarmFreshList(Map<String, Object> paraMap)throws Exception{
		return specMapper.specFreshAlarm(paraMap);
	}


	@Override
	public List<SpecVO> specInsert_excel(String fileName) throws Exception{
		List<SpecVO> specList = new ArrayList<SpecVO>();

		File excelFile = new File(this.fileDirectory.replaceAll("\\\\", "/") + "/" + fileName);
		//System.out.println("IMPLE ==> LOCALPATH : "+this.fileDirectory.replaceAll("\\\\", "/") + "/" + fileName);
		if(excelFile != null && excelFile.isFile()) { //判断文件是否存在
			
			//workbook 是 poi中的一个接口，用来读取excel文件的
			Workbook wb = getWorkbok(excelFile);

			if(wb != null) {  //判断文件是否是excel格式
				Sheet sheet = wb.getSheetAt(0);
				if(sheet != null) { // 判断第一个sheet是否有内容
					DecimalFormat df = new DecimalFormat("0");

					for (int i = sheet.getFirstRowNum()+2; i <= sheet.getLastRowNum();i++){
						Row row = sheet.getRow(i);

						if(row == null) {
							continue;
						}
						SpecVO specVO = new SpecVO();

						int firstCell = row.getFirstCellNum();
						specVO.setProductid(row.getCell(firstCell) != null ? String.valueOf(row.getCell(firstCell)).trim():null);
						specVO.setStepid(row.getCell(firstCell+1) != null ? String.valueOf(row.getCell(firstCell+1)).trim():null);
						specVO.setDefectname(row.getCell(firstCell+2) != null ? String.valueOf(row.getCell(firstCell+2)).trim():null);
						specVO.setControl1(row.getCell(firstCell+3) != null ? String.valueOf(row.getCell(firstCell+3)).trim():null);
						specVO.setAlarmtype1(row.getCell(firstCell+4) != null ? String.valueOf(row.getCell(firstCell+4)).trim():null);
						specVO.setAlarmreceivername1(row.getCell(firstCell+5) != null ? String.valueOf(row.getCell(firstCell+5)).trim():null);
						//工号  
						if(row.getCell(firstCell+6) != null ) {

							// df.format(row.getCell(firstCell+6).getNumericCellValue());
							specVO.setAlarmreceiverid1(row.getCell(firstCell+6) != null ? String.valueOf(row.getCell(firstCell+6)).trim():null);
						}
						specVO.setControl2(row.getCell(firstCell+7) != null ? String.valueOf(row.getCell(firstCell+7)).trim():null);
						specVO.setAlarmtype2(row.getCell(firstCell+8) != null ? String.valueOf(row.getCell(firstCell+8)).trim():null);
						specVO.setAlarmreceivername2(row.getCell(firstCell+9) != null ? String.valueOf(row.getCell(firstCell+9)).trim():null);
						specVO.setAlarmreceiverid2(row.getCell(firstCell+10) != null ? String.valueOf(row.getCell(firstCell+10)).trim():null);
						//刷新频率 整数
						if(row.getCell(firstCell+11) != null ) {
							df.format(row.getCell(firstCell+11).getNumericCellValue());
							specVO.setFreshtime(df.format(row.getCell(firstCell+11).getNumericCellValue()));
						}

						if(specVO != null) {
							specList.add(specVO);
							//this.specMapper.saveOrUpdate(specVO);
						}
					}
				}
			}
		}
		return specList;

	}
	//自己写的这个方法 ： 同时传入 文件名和文件路径的方式，这样就可以导入任意路径下的文件了
	@Override
	public List<SpecVO> specInsert_excel_path(String localPath) throws Exception{
		List<SpecVO> specList = new ArrayList<SpecVO>();
		
		//System.out.println("IMPLE ==>  localPath : "+localPath);
		File excelFile = new File(localPath.replaceAll("\\\\", "/")); // localpath 可以直接获得文件的完整路径，包括文件名称
		//System.out.println("Imple ==> LOCALPATH2 : "+localPath.replaceAll("\\\\", "/"));
		
		if(excelFile != null && excelFile.isFile()) { //判断文件是否存在
			
			//workbook 是 poi中的一个接口，用来读取excel文件的
			Workbook wb = getWorkbok(excelFile);

			if(wb != null) {  //判断文件是否是excel格式
				Sheet sheet = wb.getSheetAt(0);
				if(sheet != null) { // 判断第一个sheet是否有内容
					DecimalFormat df = new DecimalFormat("0");

					for (int i = sheet.getFirstRowNum()+2; i <= sheet.getLastRowNum();i++){
						Row row = sheet.getRow(i);

						if(row == null) {
							continue;
						}
						SpecVO specVO = new SpecVO();
						
						//这是获取第一个格子的坐标位置，下面的属性的赋值，都是通过getCell方法，进行操作的
						int firstCell = row.getFirstCellNum();
						specVO.setProductid(row.getCell(firstCell) != null ? String.valueOf(row.getCell(firstCell)).trim():null);
						specVO.setStepid(row.getCell(firstCell+1) != null ? String.valueOf(row.getCell(firstCell+1)).trim():null);
						specVO.setDefectname(row.getCell(firstCell+2) != null ? String.valueOf(row.getCell(firstCell+2)).trim():null);
						specVO.setControl1(row.getCell(firstCell+3) != null ? String.valueOf(row.getCell(firstCell+3)).trim():null);
						specVO.setAlarmtype1(row.getCell(firstCell+4) != null ? String.valueOf(row.getCell(firstCell+4)).trim():null);
						specVO.setAlarmreceivername1(row.getCell(firstCell+5) != null ? String.valueOf(row.getCell(firstCell+5)).trim():null);
						//工号  
						if(row.getCell(firstCell+6) != null ) {

							// df.format(row.getCell(firstCell+6).getNumericCellValue());
							specVO.setAlarmreceiverid1(row.getCell(firstCell+6) != null ? String.valueOf(row.getCell(firstCell+6)).trim():null);
						}
						specVO.setControl2(row.getCell(firstCell+7) != null ? String.valueOf(row.getCell(firstCell+7)).trim():null);
						specVO.setAlarmtype2(row.getCell(firstCell+8) != null ? String.valueOf(row.getCell(firstCell+8)).trim():null);
						specVO.setAlarmreceivername2(row.getCell(firstCell+9) != null ? String.valueOf(row.getCell(firstCell+9)).trim():null);
						specVO.setAlarmreceiverid2(row.getCell(firstCell+10) != null ? String.valueOf(row.getCell(firstCell+10)).trim():null);
						//刷新频率 整数
						if(row.getCell(firstCell+11) != null ) {
							df.format(row.getCell(firstCell+11).getNumericCellValue());
							specVO.setFreshtime(df.format(row.getCell(firstCell+11).getNumericCellValue()));
						}

						if(specVO != null) {
							specList.add(specVO);
							//this.specMapper.saveOrUpdate(specVO);
						}
					}
				}
			}
		}
		return specList;

	}
	
/*	public Object getCellByType(Cell cell) {
		switch (cell.getCellType()) {
		case Cell.CELL_TYPE_STRING:
			return cell.getRichStringCellValue().getString();
		case Cell.CELL_TYPE_NUMERIC:
			//仅仅只检查Excel内部的日期格式,
			if (DateUtil.isCellDateFormatted(cell)) {
				return cell.getDateCellValue();
			} else {
				//输出数字
				
				DecimalFormat df = new DecimalFormat("0");
				return df.format(cell.getNumericCellValue());
			}
		case Cell.CELL_TYPE_BOOLEAN://Boolean类型
			return cell.getBooleanCellValue();
		case Cell.CELL_TYPE_FORMULA://公式
			//输出公式
			return cell.getCellFormula();
		default:
		}
		
		return null;
	}*/
	
	
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

    //把数据写入到 数据库中的操作
	@Override
	public int insert_ExcelImport(List<SpecVO> specVOList) {
		int flag = 0;
		try {
			for(Object obj:specVOList) {
				HashMap spec = (HashMap) obj;
				SpecVO specVO_ = new SpecVO();
				
				specVO_.setAlarmreceiverid1(spec.get("alarmreceiverid1")!=null?spec.get("alarmreceiverid1").toString():"");
				specVO_.setAlarmreceiverid2(spec.get("alarmreceiverid2")!=null?spec.get("alarmreceiverid2").toString():"");
				specVO_.setAlarmreceivername1(spec.get("alarmreceivername1")!=null?spec.get("alarmreceivername1").toString():"");
				specVO_.setAlarmreceivername2(spec.get("alarmreceivername2")!=null?spec.get("alarmreceivername2").toString():"");
				specVO_.setAlarmtype1(spec.get("alarmtype1")!=null?spec.get("alarmtype1").toString():"" );
				specVO_.setAlarmtype2(spec.get("alarmtype2")!=null?spec.get("alarmtype2").toString():"" );
				specVO_.setControl1(spec.get("control1")!=null?spec.get("control1").toString():"" );
				specVO_.setControl2(spec.get("control2")!=null?spec.get("control2").toString():"" );
				specVO_.setDefectname(spec.get("defectname")!=null?spec.get("defectname").toString():"" );
				specVO_.setFreshtime(spec.get("freshtime")!=null?spec.get("freshtime").toString():"" );
				specVO_.setProductid(spec.get("productid")!=null?spec.get("productid").toString():"" );
				specVO_.setStepid(spec.get("stepid")!=null?spec.get("stepid").toString():"" );
				
				if(specVO_.getStepid() != null && !"".equals(specVO_.getStepid()) 
						&& specVO_.getProductid() != null && !"".equals(specVO_.getProductid())
							&&	specVO_.getDefectname() !=null && !"".equals(specVO_.getDefectname())){
					//flag = this.specMapper.saveOrUpdate(specVO_);
					//把这一条的数据 插入到数据库中去
					flag = this.specMapper.specInsert(specVO_);
				}
				
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return flag;
	}
}