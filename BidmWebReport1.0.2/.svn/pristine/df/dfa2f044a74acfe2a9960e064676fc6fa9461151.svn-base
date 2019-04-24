package com.boe.idm.project.utils;

import java.util.ArrayList;
import java.util.List;


/**
 * <p>날짜 패턴 토큰 클래스입니다.</p>
 * 
 * @author <a href="mailto:badnom@jarusoft.com">badnom</a>
 * @version 1.0
 * @since 1.1
 */
public class DatePatternToken {
	private Object value;
	private int count;
	
	public DatePatternToken(Object value) {
		this(value, 1);
	}
	
	public DatePatternToken(Object value, int count) {
		this.value = value;
		this.count = count;
	}
	
	public void increment() { 
		count++;
	}

	public Object getValue() {
		return value;
	}

	public int getCount() {
		return count;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof DatePatternToken) {
			DatePatternToken another = (DatePatternToken)obj;
			if (this.value.getClass() != another.value.getClass()) {
				return false;
			}
			if (this.count != another.count) {
				return false;
			}
			if (this.value instanceof StringBuffer) {
				return this.value.toString().equals(another.value.toString());
			} else {
				return this.value.equals(another.value);
			}
		}
		return false;
	}

	@Override
	public int hashCode() {
		return toString().hashCode();
	}

	@Override
	public String toString() {
		return StringUtils.repeat(value.toString(), count);
	}
	
	
	/**
	 * <p>해당 패턴을 분석하여 토큰을 만든다.</p>
	 * 
	 * @param pattern
	 * @return
	 */
	public static DatePatternToken[] getTokens(String pattern) {
		int patternLen = pattern.length();
		List<DatePatternToken> list = new ArrayList<DatePatternToken>(patternLen);
		
		DatePatternToken previous = null;
		StringBuilder buffer = null;
		boolean inQuote = false;
		for (int i = 0; i < patternLen; i++) {
			char ch = pattern.charAt(i);
			if(inQuote && ch != '\'') {
				buffer.append(ch);
				continue;
			}

			if (ch == '\'') {
				// espace 문자
				if(inQuote) {
					if (buffer.length() == 0) {
						// '' 일때 처리
						buffer.append(ch);
					}
					buffer = null;
					inQuote = false;
				} else {
					buffer = new StringBuilder();
					list.add(new DatePatternToken(buffer));
					inQuote = true;
				}
			} else if (ch == 'y' || ch == 'M' || ch == 'd' || ch == 'H' || ch == 'm' || ch == 's' || ch == 'S') {
				String value = String.valueOf(ch);
				if (previous != null && previous.getValue().equals(value)) {
					previous.increment();
				} else {
					DatePatternToken token = new DatePatternToken(value);
					list.add(token); 
					previous = token;
				}
				buffer = null;
			} else {
				if (buffer == null) {
					buffer = new StringBuilder();
					list.add(new DatePatternToken(buffer));
				}
				buffer.append(ch);
			}
		}
		return (DatePatternToken[])list.toArray(new DatePatternToken[list.size()]);
	}
	
	/**
	 * <p>패턴 존재유무를 파악하여 반환한다.</p>
	 * 
	 * @param tokens
	 * @return boolean[hasYears, hasMonths, hasDays, hasHours, hasMinutes, hasSeconds, hasMilliSeconds]
	 */
	public static boolean[] containsPattern(DatePatternToken[] tokens) {
		boolean[] result = new boolean[7];
		for (DatePatternToken token : tokens) {
			Object value = token.getValue();
			if ("y".equals(value)) {
				result[0] = true;
			} else if ("M".equals(value)) {
				result[1] = true;
			} else if ("d".equals(value)) {
				result[2] = true;
			} else if ("H".equals(value)) {
				result[3] = true;
			} else if ("m".equals(value)) {
				result[4] = true;
			} else if ("s".equals(value)) {
				result[5] = true;
			} else if ("S".equals(value)) {
				result[6] = true;
			}
		}
		return result;
	}
}

