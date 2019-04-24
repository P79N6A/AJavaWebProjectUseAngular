package com.boe.idm.project.utils;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.apache.log4j.Logger;
import org.jcodec.api.FrameGrab;
import org.jcodec.api.JCodecException;
import org.jcodec.common.DemuxerTrack;
import org.jcodec.common.NIOUtils;
import org.jcodec.common.SeekableByteChannel;
import org.jcodec.common.model.Picture;
import org.jcodec.containers.mp4.demuxer.MP4Demuxer;
import org.jcodec.scale.AWTUtil;

public class VidioThumbnailUtils {
	
	private static Logger log = Logger.getLogger(VidioThumbnailUtils.class);
	
	private VidioThumbnailUtils() {}
	
	public static void getImageFromFrame(File videoFile) {
		String fileName = videoFile.getAbsolutePath();
		String baseName = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.lastIndexOf("."));
		String savePath = fileName.substring(0, fileName.lastIndexOf("\\"));
		double frameNumber = 0d;

		try {
			SeekableByteChannel bc = NIOUtils.readableFileChannel(videoFile);
			MP4Demuxer dm = new MP4Demuxer(bc);
			DemuxerTrack vt = dm.getVideoTrack();
			frameNumber = vt.getMeta().getTotalDuration() / 5.0;
			log.debug(vt.getMeta().getTotalDuration());
			log.debug(frameNumber);
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		try {
			Picture frame = FrameGrab.getNativeFrame(new File(fileName), frameNumber);
			BufferedImage img = AWTUtil.toBufferedImage(frame);
			File pngFile = new File(savePath + "/" + baseName + ".png");
			if (!pngFile.exists()) {
				pngFile.createNewFile();
			}

			ImageIO.write(img, "png", pngFile);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JCodecException e) {
			e.printStackTrace();
		}
	}
	
	public static void getImageFromSec(File file){
		System.out.println("start!");
		double startSec = 17.0;
		
		Picture picture;
		try {
			picture = FrameGrab.getNativeFrame(file, startSec);
			BufferedImage img = AWTUtil.toBufferedImage(picture);
			
			String fileName = file.getAbsolutePath();
			String baseName = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.lastIndexOf("."));
			String savePath = fileName.substring(0, fileName.lastIndexOf("\\"));
			File pngFile = new File(savePath + "/" + baseName + ".png");

			if (!pngFile.exists()) {
				pngFile.createNewFile();
			}
			ImageIO.write(img, "png", pngFile);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JCodecException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}//(NIOUtils.readableFileChannel(file));

		log.debug("end!");
	}
	
//	public static void main(String[] args) {
//
//		File file = new File("C:\\DES\\FMB_1.mp4");
//		VidioThumbnailUtils app = new VidioThumbnailUtils();
//		//app.getImageFromFrame(file);
//		app.getImageFromSec(file);
//
//	}
}
