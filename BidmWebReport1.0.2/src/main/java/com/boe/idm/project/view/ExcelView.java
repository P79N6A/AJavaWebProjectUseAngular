package com.boe.idm.project.view;


import java.lang.reflect.Method;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.document.AbstractExcelView;

import com.boe.idm.project.config.Constants;
import com.boe.idm.project.utils.DateUtils;
import com.boe.idm.project.utils.StringUtils;



@Component
public class ExcelView extends AbstractExcelView {

	
	@SuppressWarnings("unchecked")
	@Override
	protected void buildExcelDocument(Map<String, Object> model,
			HSSFWorkbook wb, 
			HttpServletRequest request, 
			HttpServletResponse response)
		throws Exception {

		Map<String, CellStyle> styles = createStyles(wb);
		
		int rownum = Constants.ZERO;
		int column = Constants.ZERO;
		
			// Get ExcelData List
		    List<?> list = (List<?>) model.get("excelList");
		    List<String> headers = (List<String>) model.get("headers");
			String title = (String)model.get("title");
			
			// Make Sheet
			HSSFSheet sheet = wb.createSheet(title);
			
			//turn off gridlines
	        sheet.setDisplayGridlines(true);
	        sheet.setPrintGridlines(true);
	        sheet.setFitToPage(true);
	        sheet.setHorizontallyCenter(true);
	        sheet.setAutobreaks(true);
	        // Insert Blank Row
			sheet.createRow(rownum++);
	
			HSSFRow titleRow = sheet.createRow(0);
	        titleRow.setHeightInPoints(35);
	        for (int i = 0; i <= 3; i++) {
	           titleRow.createCell(i).setCellStyle(styles.get("title"));
	        }
	        Cell titleCell = titleRow.getCell(0);
	        titleCell.setCellValue("Select Time" + DateUtils.getCurrentTimeStamp());
	        //sheet.addMergedRegion(CellRangeAddress.valueOf("$A$1:$H$1"));
	        int mergeHeaderSize = (headers.size()-1); 
	        
	        sheet.addMergedRegion(new CellRangeAddress(0,0,0,mergeHeaderSize));
	        
	        HSSFRow header = sheet.createRow(rownum++);
	        column = Constants.ZERO;
			Cell headerCell;
			
			for(int i=0;i<headers.size();i++){
				String _tmp = headers.get(i);
				
				sheet.setColumnWidth(column, 20*256);
				
				headerCell = header.createCell(column++);
				headerCell.setCellValue(_tmp);
				headerCell.setCellStyle(styles.get("header"));
				
			}
			
			// Make Body
			HSSFRow body;
			Cell bodyCell;
			//model.addAttribute("fields",fields);
			
//			String className = (String)model.get("className");
//			Class c = Class.forName(className);
//			Method m[] = c.getDeclaredMethods();
//			for (int i = 0; i < m.length; i++) {
//				logger.debug("method : "+m[i].toString());
//			}
			List<String> fields = (List<String>)model.get("fields");
			for(int i=0; i<list.size();i++){
				column = Constants.ZERO;
				body = sheet.createRow(rownum++);
				Object _obj = list.get(i);
				Class<?> _class = _obj.getClass();
				//Method[] _methods = _class.getMethods();
				//logger.debug("_class : "+_class.getSimpleName());
				for(int j = 0; j < fields.size(); j++ ){
					bodyCell = body.createCell(column++);
					//String methodName="get"+StringUtils.camelString(fields.get(j), true);
					//method name
					Method meth = _class.getMethod("get"+StringUtils.toUpperCase(fields.get(j), 0,1));
					
					//Field fld = _class.getField(fields.get(j)); private not working
					if(meth.getReturnType().equals(Integer.TYPE)) {
						//method 실행후 결과값
						int methValue = (int)meth.invoke(_obj, null);
						bodyCell.setCellValue(methValue);
						bodyCell.setCellStyle(styles.get("cell_b_right"));
					}else if(meth.getReturnType().equals(Long.TYPE)){
						//method 실행후 결과값
						long methValue = (long)meth.invoke(_obj, null);
						bodyCell.setCellValue(methValue);
						bodyCell.setCellStyle(styles.get("cell_b_right"));
					}else if(meth.getReturnType().equals(Double.TYPE)) {
						double methValue = (double)meth.invoke(_obj, null);
						bodyCell.setCellValue(methValue);
						bodyCell.setCellStyle(styles.get("cell_b_right"));
					}else {
						//method 실행후 결과값
						String methValue = (String)meth.invoke(_obj, null);
						bodyCell.setCellValue(methValue);
						bodyCell.setCellStyle(styles.get("cell_normal"));
					}

				}//end fields
			}//end list
			
			
			response.setCharacterEncoding(Constants.ENCODING);
			response.setContentType(Constants.DEFAUL_XML_CONTENT_TYPE);
			String uid = title+Constants.UNDER_SCORE+DateUtils.getCurrentTimeStamp();
					//new UID().toString().replace(Constants.COLON, Constants.UNDER_SCORE).replace(Constants.DASH, Constants.UNDER_SCORE);
			String h_agent = request.getHeader("User-Agent");
			//logger.debug("h_agent : "+h_agent);
			String docName = "";
			//for korean 
			if (h_agent.contains("MSIE") || h_agent.contains("Trident")) { //for ie
				docName = new String(uid.getBytes());
				docName = URLEncoder.encode(docName,"UTF-8").replaceAll("\\+", "%20");
				response.setHeader("Content-Disposition", "attachment;filename=" + docName +".xls"+ ";");
			}else {
				docName = new String(uid.getBytes("UTF-8"), "ISO-8859-1");
				response.setHeader("Content-Disposition", "attachment; filename=\""+docName+".xls\"");
			}
		
	}

    /**
     * create a library of cell styles
     */
    private static Map<String, CellStyle> createStyles(HSSFWorkbook wb){
        Map<String, CellStyle> styles = new HashMap<String, CellStyle>();
        DataFormat df = wb.createDataFormat();

        CellStyle style;
        /*
        Font titleFont = wb.createFont();
        titleFont.setFontHeightInPoints((short)14);
        titleFont.setFontName("Trebuchet MS");
        style = wb.createCellStyle();
        style.setFont(titleFont);
//        style.setBorderBottom(CellStyle.BORDER_DOTTED);
        style.setBorderBottom(BorderStyle.DOTTED);
        style.setBottomBorderColor(IndexedColors.GREY_40_PERCENT.getIndex());
        styles.put("title", style);

        Font headerFont = wb.createFont();
//        headerFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
        headerFont.setBold(true);
        headerFont.setFontName("Trebuchet MS");
        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_CENTER);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
//        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setFont(headerFont);
        styles.put("header", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_CENTER);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
//        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setFont(headerFont);
        style.setDataFormat(df.getFormat("d-mmm"));
        styles.put("header_date", style);

        Font font1 = wb.createFont();
//        font1.setBoldweight(Font.BOLDWEIGHT_BOLD);
        font1.setBold(true);
        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_LEFT);
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setFont(font1);
        styles.put("cell_b", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_RIGHT);
        style.setAlignment(HorizontalAlignment.RIGHT);
        style.setFont(font1);
        styles.put("cell_b_right", style);
        
        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_CENTER);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setFont(font1);
        styles.put("cell_b_centered", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_RIGHT);
        style.setAlignment(HorizontalAlignment.RIGHT);
        style.setFont(font1);
        style.setDataFormat(df.getFormat("d-mmm"));
        styles.put("cell_b_date", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_RIGHT);
        style.setAlignment(HorizontalAlignment.RIGHT);
        style.setFont(font1);
        style.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
//        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setDataFormat(df.getFormat("d-mmm"));
        styles.put("cell_g", style);

        Font font2 = wb.createFont();
        font2.setColor(IndexedColors.BLUE.getIndex());
//        font2.setBoldweight(Font.BOLDWEIGHT_BOLD);
        font2.setBold(true);
        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_LEFT);
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setFont(font2);
        styles.put("cell_bb", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_LEFT);
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setFont(font1);
        style.setFillForegroundColor(IndexedColors.LIGHT_TURQUOISE.getIndex());
//        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setDataFormat(df.getFormat("d-mmm"));
        styles.put("cell_bg", style);

        Font font3 = wb.createFont();
        font3.setFontHeightInPoints((short)14);
        font3.setColor(IndexedColors.DARK_BLUE.getIndex());
//        font3.setBoldweight(Font.BOLDWEIGHT_BOLD);
        font3.setBold(true);
        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_LEFT);
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setFont(font3);
        style.setWrapText(true);
        styles.put("cell_h", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_LEFT);
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setWrapText(true);
        styles.put("cell_normal", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_CENTER);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setWrapText(true);
        styles.put("cell_normal_centered", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_RIGHT);
        style.setAlignment(HorizontalAlignment.RIGHT);
        style.setWrapText(true);
        styles.put("cell_normal_right", style);
        
        
        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_RIGHT);
        style.setAlignment(HorizontalAlignment.RIGHT);
        style.setWrapText(true);
        style.setDataFormat(df.getFormat("d-mmm"));
        styles.put("cell_normal_date", style);

        style = createBorderedStyle(wb);
//        style.setAlignment(CellStyle.ALIGN_LEFT);
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setIndention((short)1);
        style.setWrapText(true);
        styles.put("cell_indented", style);

        style = createBorderedStyle(wb);
        style.setFillForegroundColor(IndexedColors.BLUE.getIndex());
//        style.setFillPattern(CellStyle.SOLID_FOREGROUND);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        styles.put("cell_blue", style);
*/
        return styles;
    }

    private static CellStyle createBorderedStyle(HSSFWorkbook wb){
        CellStyle style = wb.createCellStyle();
        /*
//        style.setBorderRight(CellStyle.BORDER_THIN);
        style.setBorderRight(BorderStyle.THIN);
        style.setRightBorderColor(IndexedColors.BLACK.getIndex());
//        style.setBorderBottom(CellStyle.BORDER_THIN);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBottomBorderColor(IndexedColors.BLACK.getIndex());
//        style.setBorderLeft(CellStyle.BORDER_THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setLeftBorderColor(IndexedColors.BLACK.getIndex());
//        style.setBorderTop(CellStyle.BORDER_THIN);
        style.setBorderTop(BorderStyle.THIN);
        style.setTopBorderColor(IndexedColors.BLACK.getIndex());
        */
        return style;
    }


}
