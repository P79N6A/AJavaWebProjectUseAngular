package com.boe.idm.project.view;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.view.AbstractView;

import com.boe.idm.project.config.Constants;



@Component
public class FileDownloadView extends AbstractView {

	private static Logger logger = Logger.getLogger(FileDownloadView.class);
	
	@SuppressWarnings("resource")
	@Override
	protected void renderMergedOutputModel(
			Map<String, Object> model,
			HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		JSONObject fileJson = (JSONObject) model.get(Constants.FILE);
		
		//String downloadType = (String) model.get(Constants.FILE_DOWNLOAD_TYPE);
		BufferedOutputStream bos = new BufferedOutputStream(response.getOutputStream());
		BufferedInputStream bis = null;
		
		try {
				File file = new File(fileJson.get("localPath").toString());
				fileJson.put("size", (int) file.length());
				fileJson.put("name", file.getName());
				
				logger.debug("fileJson : "+fileJson.toJSONString());
				
				bis = new BufferedInputStream(new FileInputStream(fileJson.get("localPath").toString()));
				setGeneralDownloadHeader(response, fileJson);
				
				FileCopyUtils.copy(bis, bos);
			
			
//			byte[] buffer = new byte[4096];
//			int len = -1;
//			while((len = bis.read(buffer)) >= 0) {
//				bos.write(buffer, 0, len);
//			}
//			bos.flush();
//			bos.close();
//			bis.close();

			
			
		} catch (Exception e) {
			e.printStackTrace();
			bos = generalError(bos, response);
		} finally {
			if(bis != null) bis.close();
			if(bos != null){
				bos.flush();
				bos.close();
			}
		}
	}


	private BufferedOutputStream generalError(
			BufferedOutputStream bos, 
			HttpServletResponse response) throws IOException {
		response.setHeader("Content-Type", "text/plain; charset=UTF-8");
		bos.write("-1, File Not Found".getBytes());
		return bos;
	}


	private void setGeneralDownloadHeader(
			HttpServletResponse response, 
			JSONObject fileJson) throws UnsupportedEncodingException {

		response.setContentType(getContentType());
		response.setContentLength(new Integer((int)fileJson.get("size")));
		
		response.setHeader("Content-Transfer-Encoding", "binary");
		//response.addHeader("Content-Disposition", "attachment;filename=" + StringUtils.encodeStr(fileVO.getOrigFileName()));
		response.addHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileJson.get("name").toString(),"UTF-8"));
		
		//response.addHeader("Cache-control", "NO-CACHE");
		response.addHeader("Cache-Control","cache, must-revalidate");
		response.addHeader("Pragma","no-cach");
		response.addHeader("Expires","0");
		//response.setHeader("Expires", "-1;");
		 		
	}

}

