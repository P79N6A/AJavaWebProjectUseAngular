package com.boe.idm.project.utils;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Array;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.context.support.MessageSourceAccessor;

import com.boe.idm.project.config.Constants;


public class StringUtils {

	public static final String NULL = "null"; //$NON-NLS-1$
	public static final char[] WORD_SEPARATORS = {'_', '-', '@', '$', '#', ' '};
	public static final int INDEX_NOT_FOUND = -1;
	
	private StringUtils() {}
	
	/**
	 * <p>문자(char)가 단어 구분자('_', '-', '@', '$', '#', ' ')인지 판단한다.</p>
	 * 
	 * @param c 문자(char)
	 * @return 단어 구분자이면 true, 아니면 false를 반환한다.
	 */
	public static boolean isWordSeparator(char c) {
		for (int i = 0; i < WORD_SEPARATORS.length; i++) {
			if (WORD_SEPARATORS[i] == c) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * <p>문자(char)가 단어 구분자(wordSeparators)인지 판단한다.</p>
	 * <p>단어 구분자가 <code>null</code>이면 false를 반환한다.</p>
	 * 
	 * @param c 문자(char)
	 * @param wordSeparators 단어 구분자
	 * @return 단어 구분자이면 true, 아니면 false를 반환한다.
	 */
	public static boolean isWordSeparator(char c, char[] wordSeparators) {
		if (wordSeparators == null) {
			return false;
		}
		for (int i = Constants.ZERO; i < wordSeparators.length; i++) {
			if (wordSeparators[i] == c) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * <p>문자열(String)을 카멜표기법으로 표현한다.</p>
	 * 
	 * <pre>
	 * StringUtils.camelString("ITEM_CODE", true)  = "ItemCode"
	 * StringUtils.camelString("ITEM_CODE", false) = "itemCode"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param firstCharacterUppercase 첫문자열을 대문자로 할지 여부
	 * @return 카멜표기법으로 표현환 문자열
	 */
	public static String camelString(String str, boolean firstCharacterUppercase) {
		if (str == null) {
			return null;
		}
		
		StringBuffer sb = new StringBuffer();
		
		boolean nextUpperCase = false;
		for (int i = Constants.ZERO; i < str.length(); i++) {
			char c = str.charAt(i);
			
			if (isWordSeparator(c)) {
				if (sb.length() > Constants.ZERO) {
					nextUpperCase = true;
				}
			} else {
				if (nextUpperCase) {
					sb.append(Character.toUpperCase(c));
					nextUpperCase = false;
				} else {
					sb.append(Character.toLowerCase(c));
				}
			}
		}
		
		if (firstCharacterUppercase) {
			sb.setCharAt(0, Character.toUpperCase(sb.charAt(0)));
		}
		return sb.toString();
	}
	
	/**
	 * <p>입력 받은 문자를 반복숫자만큼 붙여서 만든다.</p>
	 * 
	 * <pre>
	 * StringUtils.repeat(null, *)   = null
	 * StringUtils.repeat("", -1)    = ""
	 * StringUtils.repeat("", 2)     = ""
	 * StringUtils.repeat("han", -1) = ""
	 * StringUtils.repeat("han", 0)  = ""
	 * StringUtils.repeat("han", 2)  = "hanhan"
	 * </pre>
	 * 
	 * @param str
	 * @param repeat 반복숫자
	 * @return
	 */
	public static String repeat(String str, int repeat) {
		if (str == null) {
			return null;
		}
		if (repeat < Constants.ONE) {
			return Constants.BLANK;
		}
		int inputLen = str.length();
		if (inputLen == Constants.ZERO || repeat == Constants.ONE) {
			return str;
		}
		int outputLen = inputLen * repeat;
		if (inputLen == Constants.ONE) {
			char ch = str.charAt(Constants.ZERO);
			char[] output = new char[outputLen];
			for (int i = Constants.ZERO; i < outputLen; i++) {
				output[i] = ch;
			}
			return new String(output);
		} else {
			StringBuilder output = new StringBuilder((int) Math.min((outputLen*110L)/100, Integer.MAX_VALUE));
			for (int i = Constants.ZERO; i < repeat; i++) {
				output.append(str);
			}
			return output.toString();
		}
	}
	
	// ----------------------------------------------------------------------
	// 공백/여백문자  검사, 제거, 치환
	// ----------------------------------------------------------------------
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한후, 공백("")이거나 <code>null</code>인 검사한다.</p>
	 * 
	 * <pre>
	 * StringUtils.isBlank(null)    = true
	 * StringUtils.isBlank("")      = true
	 * StringUtils.isBlank("   ")   = true
	 * StringUtils.isBlank("han")   = false
	 * StringUtils.isBlank(" han ") = false
	 * </pre> 
	 * 
	 * @param str 문자열
	 * @return
	 */
	public static boolean isBlank(String str) {
		if (str == null) {
			return true;
		}
		int strLen = str.length();
		if (strLen > Constants.ZERO) {
			for (int i = Constants.ZERO; i < strLen; i++) {
				if (Character.isWhitespace(str.charAt(i)) == false) {
					return false;
				}
			}
		}
		return true;
	}
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한후, 공백("")이 아니거나 <code>null</code>이 아닌지 검사한다.</p>
	 * 
	 * <pre>
	 * StringUtils.isNotBlank(null)    = false
	 * StringUtils.isNotBlank("")      = false
	 * StringUtils.isNotBlank("   ")   = false
	 * StringUtils.isNotBlank("han")   = true
	 * StringUtils.isNotBlank(" han ") = true
	 * </pre> 
	 * 
	 * @param str 문자열
	 * @return
	 */
	public static boolean isNotBlank(String str) {
		return !isBlank(str);
	}
	
	/**
	 * <p>문자열(String)이 공백("")이거나 <code>null</code>인 검사한다.</p>
	 * 
	 * <pre>
	 * StringUtils.isEmpty(null)    = true
	 * StringUtils.isEmpty("")      = true
	 * StringUtils.isEmpty("   ")   = false
	 * StringUtils.isEmpty("han")   = false
	 * StringUtils.isEmpty(" han ") = false
	 * </pre>
	 * 
	 * 
	 * @param str 검사할 문자열
	 * @return
	 */
	public static boolean isEmpty(String str) {
		return str == null || str.length() == Constants.ZERO;
	}
	
	/**
	 * <p>문자열(String)이 공백("")이 아니거나 <code>null</code>이 아닌지 검사한다.</p>
	 * 
	 * <pre>
	 * StringUtils.isNotEmpty(null)    = false
	 * StringUtils.isNotEmpty("")      = false
	 * StringUtils.isNotEmpty("   ")   = true
	 * StringUtils.isNotEmpty("han")   = true
	 * StringUtils.isNotEmpty(" han ") = true
	 * </pre>
	 * 
	 * @param str 검사할 문자열
	 * @return
	 */
	public static boolean isNotEmpty(String str) {
		return !isEmpty(str);
	}
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한다.</p>
	 * 
	 * <pre>
	 * StringUtils.trim(null)    = null
	 * StringUtils.trim("")      = ""
	 * StringUtils.trim("   ")   = ""
	 * StringUtils.trim("han")   = "han"
	 * StringUtils.trim(" han ") = "han"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return
	 */
	public static String trim(String str) {
		return str == null ? null : str.trim();
	}
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한 후 공백("")이거나 <code>null</code>이면 <code>null</code>을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.trimToNull(null)    = null
	 * StringUtils.trimToNull("")      = null
	 * StringUtils.trimToNull("   ")   = null
	 * StringUtils.trimToNull("han")   = "han"
	 * StringUtils.trimToNull(" han ") = "han"
	 * </pre>
	 *
	 * @param str 문자열
	 * @return
	 */
	public static String trimToNull(String str) {
		return isBlank(str) ? null : trim(str);
	}
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한 후 공백("")이거나 <code>null</code>이면 공백("")을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.trimToEmpty(null)    = ""
	 * StringUtils.trimToEmpty("")      = ""
	 * StringUtils.trimToEmpty("   ")   = ""
	 * StringUtils.trimToEmpty("han")   = "han"
	 * StringUtils.trimToEmpty(" han ") = "han"
	 * </pre>
	 *
	 * @param str 문자열
	 * @return
	 */
	public static String trimToEmpty(String str) {
		return isBlank(str) ? Constants.BLANK : trim(str);
	}
	
	/**
	 * <p>문자열(String)이 <code>null</code>이면 기본문자열을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.defaultIfNull(null, "")    = ""
	 * StringUtils.defaultIfNull("", "")      = ""
	 * StringUtils.defaultIfNull("   ", "")   = "   "
	 * StringUtils.defaultIfNull("han", "")   = "han"
	 * StringUtils.defaultIfNull(" han ", "") = " han "
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param defaultStr 기본문자열
	 * @return
	 */
	public static String nullToString(String str, String defaultStr) {
		return str == null ? defaultStr : str;
	}
	
	/**
	 * <p>문자열(String)이 <code>null</code>이면 공백문자열을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.defaultIfNull(null)    = ""
	 * StringUtils.defaultIfNull("")      = ""
	 * StringUtils.defaultIfNull("   ")   = "   "
	 * StringUtils.defaultIfNull("han")   = "han"
	 * StringUtils.defaultIfNull(" han ") = " han "
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return
	 */
	public static String nullToString(String str) {
		return nullToString(str, Constants.BLANK);
	}
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한후, 공백("")이거나 <code>null</code>이면, 기본문자열을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.defaultIfBlank(null, "")    = ""
	 * StringUtils.defaultIfBlank("", "")      = ""
	 * StringUtils.defaultIfBlank("   ", "")   = ""
	 * StringUtils.defaultIfBlank("han", "")   = "han"
	 * StringUtils.defaultIfBlank(" han ", "") = " han "
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param defaultStr 기본문자열
	 * @return
	 */
	public static String nullToBlank(String str, String defaultStr) {
		return isBlank(str) ? defaultStr : str;
	}
	
	/**
	 * <p>문자열(String)의 좌우 여백문자(white space)를 제거한후, 공백("")이거나 <code>null</code>이면, 공백문자열을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.defaultIfBlank(null)    = ""
	 * StringUtils.defaultIfBlank("")      = ""
	 * StringUtils.defaultIfBlank("   ")   = ""
	 * StringUtils.defaultIfBlank("han")   = "han"
	 * StringUtils.defaultIfBlank(" han ") = " han "
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return
	 */
	public static String nullToBlank(String str) {
		return nullToBlank(str, Constants.BLANK);
	}
	
	
	// ----------------------------------------------------------------------
	// 문자열 비교
	// ----------------------------------------------------------------------
	/**
	 * <p>두 문자열(String)이 일치하면 <code>true</code>을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.equals(null, null)   = true
	 * StringUtils.equals(null, "")     = false
	 * StringUtils.equals("", null)     = false
	 * StringUtils.equals(null, "han")  = false
	 * StringUtils.equals("han", null)  = false
	 * StringUtils.equals("han", "han") = true
	 * StringUtils.equals("han", "HAN") = false
	 * </pre>
	 * 
	 * @see java.lang.String#equals(Object)
	 * @param str1 첫번째 문자열
	 * @param str2 두번째 문자열
	 * @return 문자열(String)이 일치하면 <code>true</code>
	 */
	public static boolean equals(String str1, String str2) {
		return str1 == null ? str2 == null : str1.equals(str2);
	}
	
	/**
	 * <p>대소문자를 무시한, 두 문자열(String)이 일치하면 <code>true</code>을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.equalsIgnoreCase(null, null)   = true
	 * StringUtils.equalsIgnoreCase(null, "")     = false
	 * StringUtils.equalsIgnoreCase("", null)     = false
	 * StringUtils.equalsIgnoreCase(null, "han")  = false
	 * StringUtils.equalsIgnoreCase("han", null)  = false
	 * StringUtils.equalsIgnoreCase("han", "han") = true
	 * StringUtils.equalsIgnoreCase("han", "HAN") = true
	 * </pre>
	 * 
	 * @see java.lang.String#equalsIgnoreCase(String)
	 * @param str1 첫번째 문자열
	 * @param str2 두번째 문자열
	 * @return 대소문자를 무시한 문자열(String)이 일치하면 <code>true</code>
	 */
	public static boolean equalsIgnoreCase(String str1, String str2) {
		return str1 == null ? str2 == null : str1.equalsIgnoreCase(str2);
	}
	
	/**
	 * <p>문자열이 접두사로 시작하는지를 판단한다.</p>
	 * 
	 * <pre>
	 * StringUtils.startsWith(null, *)    = false
	 * StringUtils.startsWith(*, null)    = false
	 * StringUtils.startsWith("han", "h") = true
	 * StringUtils.startsWith("han", "a") = false
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param prefix 접두사
	 * @return
	 */
	public static boolean startsWith(String str, String prefix) {
		if (str == null || prefix == null) {
			return false;
		}
		return str.startsWith(prefix);
	}
	
	/**
	 * <p>문자열 offset 위치부터 접두사로 시작하는지를 판단한다.</p>
	 * 
	 * <pre>
	 * StringUtils.startsWith(null, *, 0)    = false
	 * StringUtils.startsWith(*, null, 0)    = false
	 * StringUtils.startsWith("han", "h", 0) = true
	 * StringUtils.startsWith("han", "a", 0) = false
	 * StringUtils.startsWith("han", "a", 1) = true
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param prefix 접두사
	 * @param offset 비교 시작 위치
	 * @return
	 */
	public static boolean startsWith(String str, String prefix, int offset) {
		if (str == null || prefix == null) {
			return false;
		}
		return str.startsWith(prefix, offset);
	}
	
	/**
	 * <p>문자열이 접미사로 끝나는지를 판단한다.</p>
	 * 
	 * <pre>
	 * StringUtils.endsWith(null, *)    = false
	 * StringUtils.endsWith(*, null)    = false
	 * StringUtils.endsWith("han", "h") = false
	 * StringUtils.endsWith("han", "n") = true
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param prefix 접두사
	 * @return
	 */
	public static boolean endsWith(String str, String suffix) {
		if (str == null || suffix == null) {
			return false;
		}
		return str.endsWith(suffix);
	}

	/**
	 * <p>문자열(String)에 검색문자열(String)이 포함되어 있는지 검사한다.</p>
	 * 
	 * <pre>
	 * StringUtils.contains(null, *)    = false
	 * StringUtils.contains(*, null)    = false
	 * StringUtils.contains("han", "")  = true
	 * StringUtils.contains("han", "h") = true
	 * StringUtils.contains("han", "H") = false
	 * </pre>
	 * 
	 * @see java.lang.String#indexOf(String)
	 * @param str 문자열
	 * @param searchStr 검색문자열
	 * @return 문자열(String)에 검색 문자열이 포함되어 있을때 <code>true</code>,
	 *  문자열(String)에 검색 문자열이 포함되어 있지 않을때나, 문자열 또는 검색문자열이 <code>null</code>일때 <code>false</code>
	 */
	public static boolean contains(String str, String searchStr) {
		//System.out.println("####################### call ~~~~~~~~~~~~~~~ str : "+str + " , searchStr : "+searchStr);
		if (str == null || searchStr == null) {
			//System.out.println("false");
			return false;
		}
		
		return str.indexOf(searchStr) > INDEX_NOT_FOUND;
	}
	
	
	
	// ----------------------------------------------------------------------
	// 대/소문자 변환
	// ----------------------------------------------------------------------
	/**
	 * <p>문자열(String)을 대문자로 변환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.toUpperCase(null)  = null
	 * StringUtils.toUpperCase("han") = "HAN"
	 * StringUtils.toUpperCase("hAn") = "HAN"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return 대문자로 변환한 문자열
	 */
	public static String toUpperCase(String str) {
		if (str == null) {
			return null;
		}
		return str.toUpperCase();
	}
	
	/**
	 * <p>시작 인덱스부터 종료 인덱스까지 대문자로 변환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.toUpperCase(null, *, *)  = null
	 * StringUtils.toUpperCase("han", 0, 1) = "Han"
	 * StringUtils.toUpperCase("han", 0, 2) = "HAn"
	 * StringUtils.toUpperCase("han", 0, 3) = "HAN"
	 * </pre>
	 * 
	 * @param str
	 * @param beginIndex
	 * @param endIndex
	 * @return
	 */
	public static String toUpperCase(String str, int beginIndex, int endIndex) {
		if (str == null) {
			return null;
		}
		StringBuilder sb = new StringBuilder();
		if (beginIndex < Constants.ZERO) {
			beginIndex = Constants.ZERO;
		}
		if (endIndex > str.length()) {
			endIndex = str.length();
		}
		if (beginIndex > Constants.ZERO) {
			sb.append(str.substring(Constants.ZERO, beginIndex));
		}
		sb.append(str.substring(beginIndex, endIndex).toUpperCase());
		if (endIndex < str.length()) {
			sb.append(str.substring(endIndex));	
		}
		return sb.toString();
	}
	
	/**
	 * <p>문자열(String)을 소문자로 변환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.toLowerCase(null)  = null
	 * StringUtils.toLowerCase("han") = "han"
	 * StringUtils.toLowerCase("hAn") = "han"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return 소문자로 변환한 문자열
	 */
	public static String toLowerCase(String str) {
		if (str == null) {
			return null;
		}
		return str.toLowerCase();
	}
	
	/**
	 * <p>시작 인덱스부터 종료 인덱스까지 소문자로 변환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.toLowerCase(null, *, *)  = null
	 * StringUtils.toLowerCase("HAN", 0, 1) = "hAN"
	 * StringUtils.toLowerCase("HAN", 0, 2) = "haN"
	 * StringUtils.toLowerCase("HAN", 0, 3) = "han"
	 * </pre>
	 * 
	 * @param str
	 * @param beginIndex
	 * @param endIndex
	 * @return
	 */
	public static String toLowerCase(String str, int beginIndex, int endIndex) {
		if (str == null) {
			return null;
		}
		StringBuilder sb = new StringBuilder();
		if (beginIndex < Constants.ZERO) {
			beginIndex = Constants.ZERO;
		}
		if (endIndex > str.length()) {
			endIndex = str.length();
		}
		if (beginIndex > Constants.ZERO) {
			sb.append(str.substring(Constants.ZERO, beginIndex));
		}
		sb.append(str.substring(beginIndex, endIndex).toLowerCase());
		if (endIndex < str.length()) {
			sb.append(str.substring(endIndex));	
		}
		return sb.toString();
	}
	
	/**
	 * <p>대문자는 소문자로 변환하고 소문자는 대문자로 변환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.swapCase(null)  = null
	 * StringUtils.swapCase("Han") = "hAN"
	 * StringUtils.swapCase("hAn") = "HaN"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return
	 */
	public static String swapCase(String str) {
		if (str == null) {
			return null;
		}
		char[] charArray = str.toCharArray();
		for (int i = Constants.ZERO; i < charArray.length; i++) {
			if (Character.isLowerCase(charArray[i])) {
				charArray[i] = Character.toUpperCase(charArray[i]);
			} else {
				charArray[i] = Character.toLowerCase(charArray[i]);
			}
		}
		
		return new String(charArray);
	}

	/**
	 * 문자열(String)의 첫번째 문자를 대문자로 변환한다.
	 * 
	 * <pre>
	 * StringUtils.capitalize(null)  = null
	 * StringUtils.capitalize("Han") = "Han"
	 * StringUtils.capitalize("han") = "Han"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return 첫번째 문자를 대문자로 변환한 문자열
	 */
	public static String capitalize(String str) {
		if (str == null) {
			return null;
		}
		char[] charArray = str.toCharArray();
		if (charArray.length > Constants.ZERO) {
			charArray[Constants.ZERO] = Character.toUpperCase(charArray[Constants.ZERO]);
		}
		return new String(charArray);
	}
	
	/**
	 * 문자열(String)의 첫번째 문자를 소문자로 변환한다.
	 * 
	 * <pre>
	 * StringUtils.uncapitalize(null)  = null
	 * StringUtils.uncapitalize("han") = "han"
	 * StringUtils.uncapitalize("HAN") = "hAN"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @return 첫번째 문자를 대문자로 변환한 문자열
	 */
	public static String uncapitalize(String str) {
		if (str == null) {
			return null;
		}
		char[] charArray = str.toCharArray();
		if (charArray.length > Constants.ZERO) {
			charArray[Constants.ZERO] = Character.toLowerCase(charArray[Constants.ZERO]);
		}
		return new String(charArray);
	}
	
	// ----------------------------------------------------------------------
	// 문자열 배열 결합/분리
	// ----------------------------------------------------------------------
	/**
	 * <p>문자열 배열을 하나의 문자열로 결합시킨다.</p>
	 * <p>배열의 문자열 중에 <code>null</code>과 공백("")은 무시한다.</p>
	 * 
	 * <pre>
	 * StringUtils.compose(null, *)               = ""
	 * StringUtils.compose(["h", "a", "n"], ".")  = "h.a.n"
	 * StringUtils.compose([null, "a", "n"], ".") = "a.n"
	 * StringUtils.compose(["", "a", "n"], ".")   = "a.n"
	 * StringUtils.compose(["h", "", "n"], ".")   = "h.n"
	 * StringUtils.compose(["  ", "a", "n"], ".") = "  .a.n"
	 * </pre>
	 * 
	 * @param strArray 문자열 배열
	 * @param separator 구분자
	 * @return 구분자로 결합한 문자열
	 */
	public static String compose(String[] strArray, char separator) {
		StringBuilder sb = new StringBuilder();
		if (strArray != null) {
			for (int i = Constants.ZERO; i < strArray.length; i++) {
				if (StringUtils.isEmpty(strArray[i])) {
					sb.append(Constants.BLANK);
				} else {
					if (sb.length() > Constants.ZERO) {
						sb.append(separator);
					}
					sb.append(strArray[i]);
				}
			}
		}
		return sb.toString();
	}
	
	/**
	 * <p>문자열 배열을 하나의 문자열로 결합시킨다.</p>
	 * <p>배열의 문자열 중에 <code>null</code>과 공백("")은 무시한다.</p>
	 * 
	 * <pre>
	 * StringUtils.compose(null, *)               = ""
	 * StringUtils.compose(["h", "a", "n"], ".")  = "h.a.n"
	 * StringUtils.compose([null, "a", "n"], ".") = "a.n"
	 * StringUtils.compose(["", "a", "n"], ".")   = "a.n"
	 * StringUtils.compose(["h", "", "n"], ".")   = "h.n"
	 * StringUtils.compose(["  ", "a", "n"], ".") = "  .a.n"
	 * </pre>
	 * 
	 * @param strArray 문자열 배열
	 * @param separator 구분자
	 * @return 구분자로 결합한 문자열
	 */
	public static String compose(String[] strArray, String separator) {
		StringBuilder sb = new StringBuilder();
		if (strArray != null) {
			for (int i = Constants.ZERO; i < strArray.length; i++) {
				if (StringUtils.isEmpty(strArray[i])) {
					sb.append(Constants.BLANK);
				} else {
					if (sb.length() > Constants.ZERO) {
						sb.append(separator);
					}
					sb.append(strArray[i]);
				}
			}
		}
		return sb.toString();
	}
	
	/**
	 * <p>문자열 배열을 하나의 문자열로 결합시킨다.</p>
	 * <p>배열의 문자열 중에 <code>null</code>과 공백("")도 포함한다.</p>
	 * 
	 * <pre>
	 * StringUtils.join(null, *)               = ""
	 * StringUtils.join(["h", "a", "n"], '-')  = "h-a-n"
	 * StringUtils.join([null, "a", "n"], '-') = "-a-n"
	 * StringUtils.join(["", "a", "n"], '-')   = "-a-n"
	 * StringUtils.join(["h", "", "n"], '-')   = "h--n"
	 * StringUtils.join(["  ", "a", "n"], '-') = "  -a-n"
	 * </pre>
	 * 
	 * @param strArray 문자열 배열
	 * @param separator 구분자
	 * @return 구분자로 결합한 문자열
	 */
	public static String join(String[] strArray, char separator) {
		StringBuilder sb = new StringBuilder();
		if (strArray != null) {
			boolean isFirst = true;
			for (int i = Constants.ZERO; i < strArray.length; i++) {
				if (isFirst) {
					isFirst = false;
				} else {
					sb.append(separator);
				}
				if (StringUtils.isEmpty(strArray[i])) {
					sb.append(Constants.BLANK);
				} else {
					sb.append(strArray[i]);
				}
			}
		}
		return sb.toString();
	}
	
	/**
	 * <p>문자열 배열을 하나의 문자열로 결합시킨다.</p>
	 * <p>배열의 문자열 중에 <code>null</code>과 공백("")도 포함한다.</p>
	 * 
	 * <pre>
	 * StringUtils.join(null, *)               = ""
	 * StringUtils.join(["h", "a", "n"], "-")  = "h-a-n"
	 * StringUtils.join([null, "a", "n"], "-") = "-a-n"
	 * StringUtils.join(["", "a", "n"], "-")   = "-a-n"
	 * StringUtils.join(["h", "", "n"], "-")   = "h--n"
	 * StringUtils.join(["  ", "a", "n"], "-") = "  -a-n"
	 * </pre>
	 * 
	 * @param strArray 문자열 배열
	 * @param separator 구분자
	 * @return 구분자로 결합한 문자열
	 */
	public static String join(String[] strArray, String separator) {
		StringBuilder sb = new StringBuilder();
		if (strArray != null) {
			boolean isFirst = true;
			for (int i = Constants.ZERO; i < strArray.length; i++) {
				if (isFirst) {
					isFirst = false;
				} else {
					sb.append(separator);
				}
				if (StringUtils.isEmpty(strArray[i])) {
					sb.append(Constants.BLANK);
				} else {
					sb.append(strArray[i]);
				}
			}
		}
		return sb.toString();
	}
	
	/**
	 * <p>문자열을 구분자로 나누어서, 문자열 배열로 만든다.</p>
	 * <p>배열의 문자열 중에 <code>null</code>과 공백("")도 포함한다.</p>
	 * 
	 * <pre>
	 * StringUtils.split("h-a-n", '-') = ["h", "a", "n"]
	 * StringUtils.split("h--n", '-')  = ["h", "", "n"]
	 * StringUtils.split(null, *)      = null
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return 구분자로 나누어진 문자열 배열
	 */
	public static String[] split(String str, char separator) {
		return split(str, new String(new char[]{separator}));
	}
	
	/**
	 * <p>문자열을 구분자로 나누어서, 문자열 배열로 만든다.</p>
	 * <p>배열의 문자열 중에 <code>null</code>과 공백("")도 포함한다.</p>
	 * 
	 * <pre>
	 * StringUtils.split("h-a-n", "-") = ["h", "a", "n"]
	 * StringUtils.split("h--n", "-")  = ["h", "", "n"]
	 * StringUtils.split(null, *)      = null
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return 구분자로 나누어진 문자열 배열
	 */
	public static String[] split(String str, String separator) {
		if (str == null) {
			return null;
		}
		StrTokenizer tokenizer = new StrTokenizer(str, separator);
		return tokenizer.toArray();
	}
	
	// ----------------------------------------------------------------------
	// 문자열 자르기
	// ----------------------------------------------------------------------
	/**
	 * <p>문자열(String)을 해당 길이(<code>length</code>) 만큼, 왼쪽부터 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.left(null, *)    = null
	 * StringUtils.left(*, -length) = ""
	 * StringUtils.left("", *)      = *
	 * StringUtils.left("han", 0)   = ""
	 * StringUtils.left("han", 1)   = "h"
	 * StringUtils.left("han", 11)  = "han"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param length 길이
	 * @return
	 */
	public static String left(String str, int length) {
		if (str == null) {
			return null;
		}
		if (length < Constants.ZERO) {
			return Constants.BLANK;
		}
		if (str.length() <= length) {
			return str;
		}
		return str.substring(Constants.ZERO, length);
	}
	
	/**
	 * <p>문자열(String)을 해당 길이(<code>length</code>) 만큼, 오른쪽부터 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.right(null, *)    = null
	 * StringUtils.right(*, -length) = ""
	 * StringUtils.right("", *)      = *
	 * StringUtils.right("han", 0)   = ""
	 * StringUtils.right("han", 1)   = "n"
	 * StringUtils.right("han", 11)  = "han"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param length 길이
	 * @return
	 */
	public static String right(String str, int length) {
		if (str == null) {
			return null;
		}
		if (length < Constants.ZERO) {
			return Constants.BLANK;
		}
		if (str.length() <= length) {
			return str;
		}
		return str.substring(str.length() - length);
	}
	
	/**
	 * <p>문자열(String)을 시작 위치(<code>beginIndex</code>)부터 길이( <code>length</code>) 만큼 자른다.</p>
	 * 
	 * <p>시작 위치(<code>beginIndex</code>)가 음수일 경우는 0으로 자동 변환된다.</p>
	 * 
	 * <pre>
	 * StringUtils.mid(null, *, *)    = null
	 * StringUtils.mid(*, *, -length) = ""
	 * StringUtils.mid("han", 0, 1)   = "h"
	 * StringUtils.mid("han", 0, 11)  = "han"
	 * StringUtils.mid("han", 2, 3)   = "n"
	 * StringUtils.mid("han", -2, 3)  = "han"
	 * </pre> 
	 * 
	 * @param str 문자열
	 * @param beginIndex 위치(음수일 경우는 0으로 자동 변환된다.)
	 * @param length 길이
	 * @return
	 */
	public static String mid(String str, int beginIndex, int length) {
		if (str == null) {
			return null;
		}
		if (length < Constants.ZERO || beginIndex > str.length()) {
			return Constants.BLANK;
		}
		if (beginIndex < Constants.ZERO) {
			beginIndex = Constants.ZERO;
		}
		if (str.length() <= (beginIndex + length)) {
			return str.substring(beginIndex);
		}
		return str.substring(beginIndex, beginIndex + length);
	}
	
	/**
	 * <p>시작 인덱스부터 문자열을 자는다.</p>
	 * <p>시작 인덱스가 0보다 작거나, 문자열의 총길이보다 크면 공백("")을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.substring(null, *)    = null
	 * StringUtils.substring("", *)      = ""
	 * StringUtils.substring("han", 1)   = "an"
	 * StringUtils.substring("han", 615) = ""
	 * StringUtils.substring("han", -1)  = ""
	 * </pre> 
	 * 
	 * @param str
	 * @param beginIndex 시작 인덱스(0부터 시작)
	 * @return
	 */
	public static String substring(String str, int beginIndex) {
		if (str == null){
			return null;
		}
		
		if (beginIndex < Constants.ZERO) {
			return Constants.BLANK;
		}
		
		if (beginIndex > str.length()) {
			return Constants.BLANK;
		}
		
		return str.substring(beginIndex);
	}


	/**
	 * <p>시작 인덱스부터 끝 인덱스까지 문자열을 자는다.</p>
	 * <p>시작 인덱스또는 끝 인덱스가  0보다 작으면 공백("")을 반환한다.</p>
	 * 
	 * <pre>
	 * StringUtils.substring(null, *, *)    = null
	 * StringUtils.substring("", *, *)      = ""
	 * StringUtils.substring("han", 1, 2)   = "a"
	 * StringUtils.substring("han", 1, 3)   = "an"
	 * StringUtils.substring("han", 1, 615) = "an"
	 * StringUtils.substring("han", -1, *)  = ""
	 * StringUtils.substring("han", *, -1)  = ""
	 * </pre> 
	 * 
	 * @param str
	 * @param beginIndex
	 * @param endIndex
	 * @return
	 */
	public static String substring(String str, int beginIndex, int endIndex) {
		if (str == null){
			return null;
		}
		
		if (beginIndex < Constants.ZERO || endIndex < Constants.ZERO) {
			return Constants.BLANK;
		}
		
		if (endIndex > str.length()) {
			endIndex = str.length();
		}
		
		if (beginIndex > endIndex || beginIndex > str.length()) {
			return Constants.BLANK;
		}
		
		return str.substring(beginIndex, endIndex);
	}
	
	
	/**
	 * <p>처음 발견한 구분자의 위치까지 문자열을 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.substringBefore(null, *)       = null
	 * StringUtils.substringBefore("", *)         = ""
	 * StringUtils.substringBefore("han", null)   = "han"
	 * StringUtils.substringBefore("han", "")     = ""
	 * StringUtils.substringBefore("hanhan", "a") = "h"
	 * StringUtils.substringBefore("hanhan", "g") = "hanhan"
	 * </pre> 
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return
	 */
	public static String substringBefore(String str, String separator) {
		if (isEmpty(str) || separator == null) {
			return str;
		}
        if (separator.length() == Constants.ZERO) {
            return Constants.BLANK;
        }
		int endIndex = str.indexOf(separator);
		if (endIndex == INDEX_NOT_FOUND) {
			return str;
		}
		return str.substring(0, endIndex);
	}
	
	
	/**
	 * <p>마지막으로 발견한 구분자의 위치까지 문자열을 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.substringBeforeLast(null, *)       = null
	 * StringUtils.substringBeforeLast("", *)         = ""
	 * StringUtils.substringBeforeLast("han", null)   = "han"
	 * StringUtils.substringBeforeLast("han", "")     = "han"
	 * StringUtils.substringBeforeLast("hanhan", "a") = "hanh"
	 * StringUtils.substringBeforeLast("hanhan", "g") = "hanhan"
	 * </pre> 
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return
	 */
	public static String substringBeforeLast(String str, String separator) {
		if (isEmpty(str) || isEmpty(separator)) {
			return str;
		}
		int endIndex = str.lastIndexOf(separator);
		if (endIndex == INDEX_NOT_FOUND) {
			return str;
		}
		return str.substring(Constants.ZERO, endIndex);
	}

	
	/**
	 * <p>처음 발견한 구분자의 위치 다음부터 문자열을 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.substringAfter(null, *)       = null
	 * StringUtils.substringAfter("", *)         = ""
	 * StringUtils.substringAfter("han", null)   = ""
	 * StringUtils.substringAfter("han", "")     = "han"
	 * StringUtils.substringAfter("hanhan", "a") = "nhan"
	 * StringUtils.substringAfter("hanhan", "g") = ""
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return
	 */
	public static String substringAfter(String str, String separator) {
		if (isEmpty(str)) {
			return str;
		}
		if (separator == null) {
			return Constants.BLANK;
		}
		int beginIndex = str.indexOf(separator);
		if (beginIndex == INDEX_NOT_FOUND) {
			return Constants.BLANK;
		}
		beginIndex = beginIndex + separator.length();
		if (beginIndex == str.length()) {
			return Constants.BLANK;
		}
		return str.substring(beginIndex);
	}
	
	/**
	 * <p>마지막으로 발견한 구분자의 위치 다음부터 문자열을 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.substringAfterLast(null, *)       = null
	 * StringUtils.substringAfterLast("", *)         = ""
	 * StringUtils.substringAfterLast("han", null)   = ""
	 * StringUtils.substringAfterLast("han",     "") = ""
	 * StringUtils.substringAfterLast("hanhan", "a") = "n"
	 * StringUtils.substringAfterLast("hanhan", "g") = ""
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return
	 */
	public static String substringAfterLast(String str, String separator) {
		if (isEmpty(str)) {
			return str;
		}
		if (isEmpty(separator)) {
			return Constants.BLANK;
		}
		int beginIndex = str.lastIndexOf(separator);
		if (beginIndex == INDEX_NOT_FOUND) {
			return Constants.BLANK;
		}
		beginIndex = beginIndex + separator.length();
		if (beginIndex == str.length()) {
			return Constants.BLANK;
		}
		return str.substring(beginIndex);
	}
	
	/**
	 * <p>시작 문자부터 끝 문자열까지 자른다.</p>
	 * 
	 * <pre>
	 * StringUtils.substringBetween(null, *, *)       = null
	 * StringUtils.substringBetween(*, null, *)       = null
	 * StringUtils.substringBetween(*, *, null)       = null
	 * StringUtils.substringBetween("h<a>n", "<", ">") = "a"
	 * StringUtils.substringBetween("h<a><b>n", "<", ">") = "a"
	 * </pre>
	 * 
	 * @param str 문자열
	 * @param separator 구분자
	 * @return
	 * @since 1.1
	 */
    public static String substringBetween(String str, String open, String close) {
		if (str == null || open == null || close == null) {
			return null;
		}
		
		int start = str.indexOf(open);
		if (start != INDEX_NOT_FOUND) {
			int end = str.indexOf(close, start + open.length());
			if (end != INDEX_NOT_FOUND) {
				return str.substring(start + open.length(), end);
			} else {
				// 끝이 없으면 null이 좋을까, 끝까지가 좋을까...
			}
		}
		return null;
	}
    
    /**
     * <p>입력한 문자열을 한줄의 최대 길이만큼, 여러 줄로 나누어 반환한다.</p>
     * <p>공백(" ")을 기준으로 줄 바꿈을 시도한다.</p>
     * 
     * @param str
     * @param maxLineLength 한줄의 최대 길이
     * @return
     */
    public static List<String> wrap(String str, int maxLineLength) {
    	if (str == null) {
    		return null;
    	}
    	List<String> lines = new ArrayList<String>();
        if (str.length() <= maxLineLength || str.indexOf(' ') == INDEX_NOT_FOUND) {
        	// 전체 길이가 최대 길이보다 짧거나, 구분할수 있는 조건이 안되면 그대로 반환한다.
        	lines.add(str);
            return lines;
        }
        
        StringBuilder sb = new StringBuilder();
        StringTokenizer tokenzier = new StringTokenizer(str, " ");
        sb.append(tokenzier.nextToken());
        while (tokenzier.hasMoreTokens()) {
            String token = tokenzier.nextToken();
            if ( (sb.length() + token.length() + Constants.ONE) > maxLineLength) {
                lines.add(sb.toString());
                sb.setLength(Constants.ZERO);
                sb.append(token);
            } else {
                sb.append(" ");
                sb.append(token);
            }
        }

        if (sb.toString().trim().length() > Constants.ZERO) {
            lines.add(sb.toString());
        }
        return lines;
    }
	
	/**
	 * <p>문자열이 해당 길이보다 크면, 자른 후 줄임말을 붙여준다.</p>
	 * <p>길이는 기본문자들(영어/숫자등)이 1으로, 다국어(한글등)이면 2로 계산한다.</p>
	 * 
	 * <pre>
	 * StringUtils.curtail(null, *, *) = null
	 * StringUtils.curtail("abcdefghijklmnopqr", 10, null) = "abcdefghij"
	 * StringUtils.curtail("abcdefghijklmnopqr", 10, "..") = "abcdefgh.."
	 * StringUtils.curtail("한글을 사랑합시다.", 10, null)   = "한글을 사랑"
	 * StringUtils.curtail("한글을 사랑합시다.", 10, "..")   = "한글을 사.."
	 * </pre>
	 * 
	 * 
	 * @param str 문자열
	 * @param size 길이(byte 길이)
	 * @param tail 줄임말
	 * @return
	 */
	public static String curtail(String str, int size, String tail) {
		if (str == null) {
			return null;
		}
		int strLen = str.length();
		int tailLen = (tail != null) ? tail.length() : Constants.ZERO;
		int maxLen = size - tailLen;
		int curLen = Constants.ZERO;
		int index = Constants.ZERO;
		for (; index < strLen && curLen < maxLen; index++) {
			if (Character.getType(str.charAt(index)) == Character.OTHER_LETTER) {
				curLen++;
			}
			curLen++;
		}
		
		if (index == strLen) {
			return str;
		} else {
			StringBuilder result = new StringBuilder();
			result.append(str.substring(Constants.ZERO, index));
			if (tail != null) {
				result.append(tail);	
			}
			return result.toString();
		}
	}
	
	// ----------------------------------------------------------------------
	// 패딩
	// ----------------------------------------------------------------------
	/**
	 * <p>왼쪽부터 크기만큼 패딩문자로 채운다.</p>
	 * 
	 * <pre>
	 * StringUtils.leftPad("han", 5, " ")    = "  han"
	 * StringUtils.leftPad("han", 5, "123")  = "12han"
	 * StringUtils.leftPad("han", 10, "123") = "1231231han"
	 * StringUtils.leftPad("han", -1, " ")   = "han"
	 * </pre>
	 * 
	 * @param str
	 * @param size 크기
	 * @param padStr 패딩문자
	 * @return
	 */
	public static String leftPad(String str, int size, String padStr) {
		if (str == null) {
			return null;
		}
		if (isEmpty(padStr)) {
			padStr = " "; //$NON-NLS-1$
		}
		int strLen = str.length();
		int padStrLen = padStr.length();
		int padLen = size - strLen;
		if (padLen <= Constants.ZERO) {
			// 패딩할 필요가 없음
			return str;
		}
		
		StringBuilder result = new StringBuilder();
		if (padLen == padStrLen) {
			result.append(padStr);
			result.append(str);
		} else if (padLen < padStrLen) {
			result.append(padStr.substring(Constants.ZERO, padLen));
			result.append(str);
		} else {
			char[] padding = padStr.toCharArray();
			for (int i = Constants.ZERO; i < padLen; i++) {
				result.append(padding[ i % padStrLen]);
			}
			result.append(str);
		}
		return result.toString();
	}
	
	/**
	 * <p>오른쪽부터 크기만큼 패딩문자로 채운다.</p>
	 * 
	 * <pre>
	 * StringUtils.rightPad("han", 5, " ")    = "han  "
	 * StringUtils.rightPad("han", 5, "123")  = "han12"
	 * StringUtils.rightPad("han", 10, "123") = "han1231231"
	 * StringUtils.rightPad("han", -1, " ")   = "han"
	 * </pre>
	 * 
	 * @param str
	 * @param size 크기
	 * @param padStr 패딩문자
	 * @return
	 */
	public static String rightPad(String str, int size, String padStr) {
		if (str == null) {
			return null;
		}
		if (isEmpty(padStr)) {
			padStr = " "; //$NON-NLS-1$
		}
		int strLen = str.length();
		int padStrLen = padStr.length();
		int padLen = size - strLen;
		if (padLen <= Constants.ZERO) {
			// 패딩할 필요가 없음
			return str;
		}
		
		StringBuilder result = new StringBuilder();
		if (padLen == padStrLen) {
			result.append(str);
			result.append(padStr);
		} else if (padLen < padStrLen) {
			result.append(str);
			result.append(padStr.substring(Constants.ZERO, padLen));
		} else {
			result.append(str);
			char[] padding = padStr.toCharArray();
			for (int i = Constants.ZERO; i < padLen; i++) {
				result.append(padding[ i % padStrLen]);
			}
		}
		return result.toString();
	}
	
	/**
	 * 	null이면 true를 반환하다. 단 공백일때는 false를 반환한다.
	 * 
	 * 	@param str null인지 확인하고 싶은 String 값
	 * 	@return null이면 true반환, 아니면 false 반환
	 */
	public static boolean isNull(String str) {
		if (str == null) {
			return true;
		} else {
			return false;
		}
	}
		
	/**
	 *  null이거나 공백일때 true를 반환하다.
	 *  
	 *  @param str null인지 공백인지 확인하고 싶은 String 값
	 *  @return null이거나 공백이면 true반환, 아니면 false 반환
	 */
	public static boolean isNullOrSpace(String str) {
		if (str == null || str.trim().length() == Constants.ZERO) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * 요청한 str 의 값을 확인하여 null 인 경우 빈 스트링값을 반환 
	 * 
	 * @param str
	 * @return
	 */
	public static String null2String(String str) {
		if (str == null) {
			return Constants.BLANK;
		}
		return str;
	}
	
	/**
	 * 요청한 값이 null 인 경우 두번째 값을 반환
	 * 
	 * @param obj
	 * @param str
	 * @return
	 */
	public static String null2String(Object obj, String str) {
		if (obj == null) return str;
		else if (obj instanceof String) return (String)obj;
		else return obj.toString();
	}
	

	/**
	 * 요청 obj를 int 형으로 변환하여 반환.
	 * 요청한 값이 null 인 경우 두번째 값을 반환
	 * 
	 * @param obj
	 * @param i
	 * @return
	 */
	public static int null2Int(Object obj, int i) {
		if (obj == null) return i;
		else if (obj instanceof String) {
			try{
				return Integer.parseInt(null2String((String) obj, "0"));
			}catch (Exception e) {
				return 0;
			}
		}
		else if (obj instanceof Integer) return ((Integer) obj).intValue();
		else return i;
	}

	public static int null2Int(Object obj) {
		return null2Int(obj, Constants.ZERO);
	}
	
	/**
	 * 구분자로 연결된 id 문자열을 list로 변경
	 * @param id
	 * @return
	 */
	public static List<String> stringToList(String str, String del) {
		List<String> list = new ArrayList<String>();
		String[] idList = str.split(del);
		
		list = Arrays.asList(idList);
		return list;
	}
	

	/**
	  * BASE64 Decoder
	  */
	public static String base64Decode(String str) {
		String result = Constants.BLANK;
		try {
			Decoder decoder = Base64.getDecoder();
			byte[] decodeByte = decoder.decode(str);
			result = new String(decodeByte);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return result;
	} 
	
	/**
	 * 객체가 비었는지(null, 빈문자열, 빈배열) 체크
	 * @param object
	 * @return
	 */
	public static boolean isEmpty(Object object){
		
		if(object == null)
			return true;
		
		if(object instanceof String){
			String str = (String) object;
			return str.length() == Constants.ZERO;
		}
		
		/*if(object instanceof Collection){
			Collection collection = (Collection) object;
			return collection.size() == 0;
		}*/
		
		if(object.getClass().isArray()){
			if(Array.getLength(object) == Constants.ZERO){
				return true;
			}
		}
		
		return false;
	}

	/**
	 * 숫자, 영대/소 문자만 포함되었는지를 확인
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isPlainText(String str){
		
		String regex = Constants.PLAIN_TEXT_REGEX;
		
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(str);
		
		return m.matches();
	}

	/*public static String decodeStr(String str){
		
		if(str != null){
			try {
				return new String(str.getBytes(Constants.ISO_8859_1), Constants.UTF_8);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return Constants.BLANK;
	} */
	
	public static String encodeURI2UTF8Str(String str){
		
		if(str != null){
			try {
				return new String(URLEncoder.encode(str, Constants.UTF_8));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return Constants.BLANK;
	}
	
	public static String decodeISO2UTF8Str(String str){
		
		if(str != null){
			try {
				return new String(str.getBytes(Constants.ISO_8859_1), Constants.UTF_8);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return Constants.BLANK;
	}
	
	public static String decodeURI2UTF8Str(String str){
		
		if(str != null){
			try {
				return new String(URLDecoder.decode(str, Constants.UTF_8));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return Constants.BLANK;
	}	
	
//	public static void main(String... args){
//		//String str = "/customerMng/customer";
//		
//		//System.out.println(str.substring(0, str.indexOf("/", 1)));
//		String str = "[61,\"cert2\", [\"usr\",\"uc-id\"] ]\t[[\"device-type\",\"device-id\"],[\"token\"]]";
//		String[] strArray = str.split("\t");
//		JSONArray myjson;
//		for(int j=0;j<strArray.length;j++) {
//			System.out.println("["+j+"] : "+strArray[j]);
//			try {
//				myjson = new JSONArray(strArray[j]);
//				
//				for(int i=0 ; i< myjson.length(); i++) {
//					System.out.println("get("+i+") => "+myjson.get(i));
//				}
//				
//			} catch (JSONException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
		
		
		
		

		
		
//		try {
//			Long.parseLong("00[0");
//		} catch(Exception e){
//			e.printStackTrace();
//		}

//	}


	
	
	public static String msgUtil(MessageSourceAccessor message, String _message, String... str) {
		String[] strArray = str;

		StringBuffer sb = new StringBuffer();
		sb.append( message.getMessage(_message, strArray ) );
		
		System.out.println(" ---> The message is { " + sb.toString() +  " }");
		
		return sb.toString();
	}
	
	public static int strLength(String str){
		if(str !=null){
			return str.length();
		}
		return 0; 
	}
	
	/**
	 * userGroupId=1&tenantCode=2 형태의 String을 map으로 변환 한다.
	 * 
	 * @param descyptStr
	 * @return
	 */
	public static Map<String, String> parametersToMap(String descyptStr) {
		
		List<String> parameterList = Arrays.asList(StringUtils.split(descyptStr, Constants.COOKIE_DELIM));
		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		String[] _tmp = new String[2];
		for(String _str : parameterList){
			
			if( _str.indexOf(Constants.EQUAL) > Constants.MINUS_ONE ) {
				_tmp = StringUtils.split(_str, Constants.EQUAL);
				
				resultMap.put(_tmp[Constants.ZERO], _tmp[Constants.ONE]);
			} 			
		}
		return resultMap;
	}
	
	public static String mapToParamters(Map<String, String> map) {
		
		StringBuffer returnStringBuffer = new StringBuffer();
		
		if( map != null ){
			for(String _tmp : map.keySet()){
				returnStringBuffer.append(_tmp);
				returnStringBuffer.append(Constants.EQUAL);
				returnStringBuffer.append(map.get(_tmp));
				
				returnStringBuffer.append(Constants.COOKIE_DELIM);
			}
			
			returnStringBuffer.deleteCharAt(returnStringBuffer.length()-1);
		}

		return returnStringBuffer.toString();
	}	

	public static String mapToParamtersWithConcat(Map<String, String> map, String concat) {
		
		StringBuffer returnStringBuffer = new StringBuffer();
		
		if( map != null ){
			for(String _tmp : map.keySet()){
				returnStringBuffer.append(_tmp);
				returnStringBuffer.append(Constants.EQUAL);
				returnStringBuffer.append(map.get(_tmp));
				
				returnStringBuffer.append(concat);
			}
			
			returnStringBuffer.deleteCharAt(returnStringBuffer.length()-1);
		}

		return returnStringBuffer.toString();
	}	
	
	/**
	 * a|123|b|1234|c|asfdsdf 를 a=123, b=1234, c=asdfsdf 형식의 map으로 구성한다.
	 * 수가 맞지 않을 경우 마지막은 버린다 값으로 처리한다.
	 * 
	 * @param descyptStr
	 * @return
	 */
	public static Map<String, String> delimStrToMap(String delimStr) {

		Map<String, String> resultMap = new HashMap<String, String>();
		
		if( delimStr != null) {
			String [] arrays = StringUtils.split(delimStr, Constants.DELIM);
			int len = arrays.length;
	
			if((len > Constants.ONE) && ((len % Constants.TWO) == Constants.ONE) ){
				len -= Constants.ONE;
			}
	
			for(int i = Constants.ZERO; i < len; i = i + Constants.TWO){
				resultMap.put(arrays[i], arrays[i+Constants.ONE]);			
			}
		}
		return resultMap;
	}

	/**
	 * 주어진 문자를 2진수 형태의 문자로 변환, padding 수 만큼은 0으로 채운다.
	 * 
	 * @param target
	 * @param padding
	 * @return
	 */
	public static String convertToBinary(String target, int padding) {

		int _binary = StringUtils.null2Int(target, Constants.ZERO);

		return StringUtils.rightPad(
				new StringBuffer(Integer.toBinaryString(_binary)).reverse().toString(), 
				padding, Constants.STRING_ZERO);
	}
	
	/**
	 * 주어진 문자를 유닉스 시간으로 변경 하여 스트링으로 리턴.
	 * 
	 * @param inputStringTime format yyyyMMddHHmmss
	 * @param 
	 * @return 
	 */
	public static String convertToUnixTime(String inputStringTime) {
		String returnValue="";
		if(inputStringTime != null && !inputStringTime.equals("")){
			DateFormat dfm = new SimpleDateFormat("yyyyMMddHHmmss");
			try {
				//이날짜를 => 유닉스 시간으로 변경  년월일시분  까지의 데이터가 넘어오므로 초 때문에 00 을 붙힘
				Date a = dfm.parse(inputStringTime+"00");
				long unixTime = a.getTime()/1000;
				returnValue = unixTime+"";
			} catch (ParseException e) {
				
				e.printStackTrace();
			}
		}
		return returnValue;
	}
	/**
	 * 주어진 유닉스 시간 문자를 일반 시간으로 변경 하여 스트링으로 리턴.
	 * 
	 * @param inputStringTime format unix time
	 * @param 
	 * @return 
	 */
	public static String convertFromUnixTimeToDate(String inputStringUnixTime) {
		
		String returnValue="";
		if(inputStringUnixTime != null && !inputStringUnixTime.equals("")){
			DateFormat dfm = new SimpleDateFormat("yyyyMMddHHmmss");
			returnValue = dfm.format(new Date(new Long(inputStringUnixTime)*1000))+"";
		}
		return returnValue;
	}
	public static String ttsEncode(String str){
		
		if(str != null){
			try {
				return new String(str.getBytes(Constants.KSC5601), Constants.ISO_8859_1);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return Constants.BLANK;
	}	
	
	public static String strNumberFormat(String value){
		if(value==null)return null;
		
		return String.format("%,d", Integer.parseInt(value));
	}
	
	/**
	 * 
	 * @param token
	 * @param flag
	 * @param start
	 * @param end
	 * @return
	 * @description range 방식
	 */
	public static String getMaskPattern(String token, String flag, int start, int end){
		String txt1 = token.substring(0, start);
		String txt2 = token.substring(end, token.length() );
		
		String mask = "";
		int patternSize = end - start;
		for(int i=0; i<patternSize; i++){
			mask += flag;
		}		
		return txt1 + mask + txt2; 
	}
	
	/**
	 * 
	 * @param token
	 * @param flag
	 * @param idxList
	 * @return
	 * @description 자리 index 마스킹
	 */
	public static String getMaskPattern(String token, String flag, List<Integer> idxList){
		String mask = "";
		int size = token.length();
		for(int i=0; i<size; i++){
			mask += (idxList.indexOf(i) > -1) ? flag : token.charAt(i);						
		}		
		return mask;
	}
	
}

