package com.boe.idm.project.utils;

import java.io.UnsupportedEncodingException;
import java.security.Key;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import org.apache.log4j.Logger;

public class EncryptionUtil {

	private static Logger log = Logger.getLogger(EncryptionUtil.class);
	
	private static Key secretKey;


	public static void setKey(String myKey){
	    try {
	        secretKey = new SecretKeySpec(myKey.getBytes("UTF-8"), "AES");
	    }
	    catch (UnsupportedEncodingException e) {
	        e.printStackTrace();
	    }
	}

	public static String encrypt(String strToEncrypt, String secret){
	    try
	    {
	        setKey(secret);
	        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5PADDING");
	        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
	        return Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
	    }
	    catch (Exception e)
	    {
	    	log.error("Error while encrypting: " + e.toString());
	    }
	    return null;
	}

	public static String decrypt(String strToDecrypt, String secret){
	    try
	    {
	        setKey(secret);
	        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5PADDING");
	        cipher.init(Cipher.DECRYPT_MODE, secretKey);
	        return new String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
	    }
	    catch (Exception e)
	    {
	        System.out.println("Error while decrypting: " + e.toString());
	    }
	    return null;
	}
//	public static void main(String[] args) {
//	    final String secretKey = "7061737323313233";
//	    String originalString = "Response from angular";
//	    String encryptString = EncryptionUtil.encrypt(originalString, secretKey);
//	    log.debug("encryptString : "+encryptString);
//	    //String decryptedString = Encryption.decrypt(encryptString, secretKey);
//	    String decryptedString = EncryptionUtil.decrypt("q4SsuEj8m8Hrw/iKtMqzk1f7CW1gXLNsjTHVJl3Otyw=", secretKey);
//	    
//	    log.debug("decryptedString : "+decryptedString);
//	}
 }
