package com.boe.idm.project.controller;

import java.io.File;
import java.rmi.server.UID;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.boe.idm.project.config.Constants;
import com.boe.idm.project.view.FileDownloadView;

@CrossOrigin
@RestController
@RequestMapping("/api/file")
public class FileManagementController {
	
	private final Logger logger = LoggerFactory.getLogger(FileManagementController.class);
	
	@Value("${bidm.upload.file.directory}")
	private String fileDirectory;
	
	@Autowired
	private MultipartHttpServletRequest multipartResolver;
	@Autowired
	private FileDownloadView fileDownloadView;
	
	private final int LIMIT = 100000000;
	private static Integer LOCK  = new Integer(Constants.ONE);
	private static int COUNTER = Constants.ZERO;

	
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public @ResponseBody String generalFileUpload(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {

		logger.info("------------> FileUpload Start");
		JSONObject resultJson = new JSONObject();
		
		try {
			if (! (request instanceof MultipartHttpServletRequest)) {
				response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Expected multipart request");
				logger.debug("Expected multipart request!!");
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
				resultJson.put("statusCode", HttpServletResponse.SC_BAD_REQUEST);
				resultJson.put("message", "Expected multipart request");
				
				return resultJson.toJSONString();
			 }
			
			// Make & Select Target Path
			File uploadPath = getDefaultPath();
			String uploadPathStr = uploadPath.getAbsolutePath();
			logger.debug("...uploadPath ? " + uploadPathStr);
			
			multipartResolver = (MultipartHttpServletRequest) request;
			Map<String, MultipartFile> multiFileMap = multipartResolver.getFileMap();
			
			logger.debug("...multiFileMap.size ? " + multiFileMap.size() );
			
			String origFileName;
			String origFileExt;
			
			String uid = new UID().toString().replace(Constants.COLON, Constants.UNDER_SCORE).replace(Constants.DASH, Constants.UNDER_SCORE);
			String savedFileId;
			String savedFileName;
			
			Iterator<String> it =  multipartResolver.getFileNames();
			while(it.hasNext()) {
				String filename = it.next();
				MultipartFile mfile = multiFileMap.get(filename);
						
				logger.debug("...multiFileMap mfile getOriginalFilename().length() :: " + mfile.getOriginalFilename().length());
				
				if(mfile.getOriginalFilename().length() > 50){
					logger.debug("result : {} ",Constants.FILE_UPLOAD_RESULT_FAIL);
					logger.debug("status code : {} ",HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					logger.debug("Request File Name too long, limit 50");
					resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
					resultJson.put("statusCode", HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					resultJson.put("message", "Request File Name too long, limit 50");
					
					break;
				}
				
				if( mfile.getOriginalFilename().length() > 0){
					savedFileId = uid + Constants.UNDER_SCORE + getUniqueId();
					origFileName = mfile.getOriginalFilename().replaceAll(Constants.SINGLE_SPACE, Constants.BLANK);
					origFileExt =  origFileName.substring(origFileName.lastIndexOf(Constants.DOT) + Constants.ONE);
					logger.debug("...mfile .getSize() ? "+ mfile.getSize());
					logger.debug("...mfile .origFileExt() ? "+ origFileExt);
					savedFileName = uploadPathStr + File.separator + savedFileId + Constants.DOT + origFileExt;

					resultJson.put("origFileName", origFileName);
					resultJson.put("name", savedFileId + Constants.DOT + origFileExt);
					resultJson.put("localPath", savedFileName);
					resultJson.put("size", mfile.getSize());
					
					
					File saveFile = new File(savedFileName);
					mfile.transferTo(saveFile);
					
					// insert file DB
					// TODO
					
				}
				//1 file process
				break;
			}//end while
			//fail 이 아니면 실행.
			if(resultJson.get("result") == null) {
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_SUCCESS);
				resultJson.put("statusCode", HttpServletResponse.SC_OK);
			}
			
		} catch (Exception e) {
			resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
			resultJson.put("statusCode", HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resultJson.put("message", "Internal Server Error");
			e.printStackTrace();
		}
		
		return resultJson.toJSONString();
	}
	
	@RequestMapping(value = "/download", method = RequestMethod.GET)
	public ModelAndView generalFileDownload(
			Model model,
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="localPath") String localPath,
			@RequestParam(value="fileId") String fileId
		) throws Exception {

		JSONObject fileJson = new JSONObject();
		
		
		
		if(localPath != null && !"".equals(localPath)) {
			localPath = localPath.replaceAll("\\\\", "/");
			fileJson.put("localPath", localPath);
			logger.info("localPath : "+ localPath);
		}
		else {
			fileJson.put("localPath", getDefaultPath() + "/" + fileId);
			logger.info("localPath : "+ getDefaultPath() + "/" + fileId);
		}
		
		model.addAttribute(Constants.FILE, fileJson);
		return new ModelAndView(fileDownloadView); 
	}

	
	public File getDefaultPath() {

		String basePathStr = fileDirectory;
		logger.info("basePathStr : "+basePathStr);
		// Create Second Level Directory
		File detailPath = new File(basePathStr);
		if(!detailPath.exists()){
			detailPath.mkdirs();
		}
		
		return detailPath;
	}
	public String getUniqueId() {
		
	    int current;
	    synchronized (LOCK) {
	        current = COUNTER++;
	        if(current >= LIMIT) {
	        	COUNTER = 0;
	        	current = COUNTER++;
			}
	    }
	    String id = Integer.toString(current);
	
	    if (current < LIMIT) {
	        id = ("00000000" + id).substring(id.length());
	    }
	    return id;
	}
}
