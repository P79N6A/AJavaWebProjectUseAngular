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

import com.boe.idm.project.mapper.primaryOracle.dev.ArImportPlanMapper;
import com.boe.idm.project.model.mybatis.ArCellInPlanVO;
import com.boe.idm.project.service.ArImportPlanService;

@Service
public class ArImportPlanServiceImpl implements ArImportPlanService {

	@Autowired
	private ArImportPlanMapper mapper;

	@Override
	public List<ArCellInPlanVO> readExcelData(String localpath) throws Exception {
		// 1.准备一个list用来保存读取到的数据
		List<ArCellInPlanVO> list = new ArrayList<ArCellInPlanVO>();
		// 2.把参数中的文件路径转换一下，并根据文件路径创建一个新的文件
		File file = new File(localpath.replaceAll("\\\\", "/"));
		// 3.如果文件没有什么错误，则继续执行
		if (file != null && file.exists()) {
			// 4.获取workbook对象,如果没有什么错误，则继续执行
			Workbook workbook = this.getWorkbook(file);
			if (workbook != null) {
				// 5.获取第一个sheet,如果没有什么错误，则继续执行
				Sheet sheet = workbook.getSheetAt(0);
				if (sheet != null) {
					// 6.循环整个sheet,一行一行的读书据，一个单元格一个单元格的毒数据,
					// 一行就是一个对象，一个单元格就是一个属性
					for (int i = sheet.getFirstRowNum() + 1; i <= sheet.getLastRowNum(); i++) {
						Row row = sheet.getRow(i);
						// 如果这一行是空的，则接着读取下一跳的数据
						if (row == null) {
							continue;
						}
						// 如果这一行不是空的，那么就会创建对象，并且正常的赋值
						ArCellInPlanVO arCellInPlanVO = new ArCellInPlanVO();
						int firstcellnum = row.getFirstCellNum();
						arCellInPlanVO.setFactory(
								row.getCell(firstcellnum) != null ? String.valueOf(row.getCell(firstcellnum)) : null);
						String datenamestr = String.valueOf(row.getCell(firstcellnum + 1)).trim();
						if (datenamestr == null || datenamestr.equals("")) { // 这个地方需要特殊的处理一下
							arCellInPlanVO.setDatename(null);
						} else {
							Double aa = Double.parseDouble(datenamestr);
							BigDecimal bb = new BigDecimal(aa);
							arCellInPlanVO.setDatename(row.getCell(firstcellnum + 1) != null ? bb.toString() : null);
						}

						arCellInPlanVO.setProductspecname(row.getCell(firstcellnum + 2) != null
								? String.valueOf(row.getCell(firstcellnum + 2)).trim() : null);
						arCellInPlanVO.setQty(row.getCell(firstcellnum + 3) != null
								? String.valueOf(row.getCell(firstcellnum + 3)).trim() : null);

						// 属性赋值完毕，把对象放入到list集合中去，ok
						if (arCellInPlanVO != null) {
							list.add(arCellInPlanVO);
						}

					}
				}
			}

		}

		return list;
	}

	public Workbook getWorkbook(File file) throws IOException {
		String fileType = file.getName().substring(file.getName().lastIndexOf("."), file.getName().length());
		Workbook wb = null;
		FileInputStream in = new FileInputStream(file);
		if (fileType.toUpperCase().endsWith("XLS")) { // Excel&nbsp;2003
			wb = new HSSFWorkbook(in);
		} else if (fileType.toUpperCase().endsWith("XLSX")) { // Excel 2007/2010
			wb = new XSSFWorkbook(in);
		}
		return wb;
	}

	@Override
	public int insert(List<ArCellInPlanVO> list) {
		// TODO Auto-generated method stub
		List<ArCellInPlanVO> objects = new ArrayList<>();
		// 2.用来保存需要删除的信息对象
		List<ArCellInPlanVO> deleteobjects = new ArrayList<>();
		// 3.循环所有的list,进行对象的创建
		for (Object object : list) {
			HashMap map = (HashMap) object;
			// System.out.println(map);
			ArCellInPlanVO aa = new ArCellInPlanVO();
			ArCellInPlanVO bb = new ArCellInPlanVO();
			// 创建对象
			aa.setFactory(map.get("factory") != null ? String.valueOf(map.get("factory")).trim() : "");
			aa.setDatename(map.get("datename") != null ? String.valueOf(map.get("datename")).trim() : "");
			aa.setProductspecname(
					map.get("productspecname") != null ? String.valueOf(map.get("productspecname")).trim() : "");
			aa.setQty(map.get("qty") != null ? String.valueOf(map.get("qty")).trim() : "0");
			aa.setOwner("AR");
			// 创建要删除的对象
			bb.setFactory(aa.getFactory());
			bb.setDatename(aa.getDatename());
			if (!deleteobjects.contains(bb)) {
				deleteobjects.add(bb);
			}

			if (aa != null) {
				objects.add(aa); // 把对象保存起来，准备后面的写入数据库操作
			}
		}
		// 1.先删除
		for (ArCellInPlanVO aa : deleteobjects) {
			mapper.delete(aa);
		}
		// 2.再插入
		for (ArCellInPlanVO aa : objects) {
			mapper.insert(aa);
		}

		return 0;
	}

	@Override
	public List<ArCellInPlanVO> query(String startdate, String enddate) {
		return mapper.query(startdate, enddate);
	}

}
