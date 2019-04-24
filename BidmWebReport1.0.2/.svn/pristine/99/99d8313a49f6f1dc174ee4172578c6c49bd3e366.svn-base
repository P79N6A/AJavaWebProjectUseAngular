package com.boe.idm.project.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

/**
 * <p>이 클래스는 날짜 관련 함수를 제공합니다.</p> 
 * 
 * <blockquote>
 * <table border=0 cellspacing=3 cellpadding=0 summary="Chart shows pattern letters, date/time component, presentation, and examples.">
 *     <tr bgcolor="#ccccff">
 *         <th align=left>Letter
 *         <th align=left>Date or Time Component
 *         <th align=left>Presentation
 *         <th align=left>Examples
 *     <tr>
 *         <td><code>G</code>
 *         <td>Era designator
 *         <td><a href="#text">Text</a>
 *         <td><code>AD</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>y</code>
 *         <td>Year
 *         <td><a href="#year">Year</a>
 *         <td><code>1996</code>; <code>96</code>
 *     <tr>
 *         <td><code>M</code>
 *         <td>Month in year
 *         <td><a href="#month">Month</a>
 *         <td><code>July</code>; <code>Jul</code>; <code>07</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>w</code>
 *         <td>Week in year
 *         <td><a href="#number">Number</a>
 *         <td><code>27</code>
 *     <tr>
 *         <td><code>W</code>
 *         <td>Week in month
 *         <td><a href="#number">Number</a>
 *         <td><code>2</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>D</code>
 *         <td>Day in year
 *         <td><a href="#number">Number</a>
 *         <td><code>189</code>
 *     <tr>
 *         <td><code>d</code>
 *         <td>Day in month
 *         <td><a href="#number">Number</a>
 *         <td><code>10</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>F</code>
 *         <td>Day of week in month
 *         <td><a href="#number">Number</a>
 *         <td><code>2</code>
 *     <tr>
 *         <td><code>E</code>
 *         <td>Day in week
 *         <td><a href="#text">Text</a>
 *         <td><code>Tuesday</code>; <code>Tue</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>a</code>
 *         <td>Am/pm marker
 *         <td><a href="#text">Text</a>
 *         <td><code>PM</code>
 *     <tr>
 *         <td><code>H</code>
 *         <td>Hour in day (0-23)
 *         <td><a href="#number">Number</a>
 *         <td><code>0</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>k</code>
 *         <td>Hour in day (1-24)
 *         <td><a href="#number">Number</a>
 *         <td><code>24</code>
 *     <tr>
 *         <td><code>K</code>
 *         <td>Hour in am/pm (0-11)
 *         <td><a href="#number">Number</a>
 *         <td><code>0</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>h</code>
 *         <td>Hour in am/pm (1-12)
 *         <td><a href="#number">Number</a>
 *         <td><code>12</code>
 *     <tr>
 *         <td><code>m</code>
 *         <td>Minute in hour
 *         <td><a href="#number">Number</a>
 *         <td><code>30</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>s</code>
 *         <td>Second in minute
 *         <td><a href="#number">Number</a>
 *         <td><code>55</code>
 *     <tr>
 *         <td><code>S</code>
 *         <td>Millisecond
 *         <td><a href="#number">Number</a>
 *         <td><code>978</code>
 *     <tr bgcolor="#eeeeff">
 *         <td><code>z</code>
 *         <td>Time zone
 *         <td><a href="#timezone">General time zone</a>
 *         <td><code>Pacific Standard Time</code>; <code>PST</code>; <code>GMT-08:00</code>
 *     <tr>
 *         <td><code>Z</code>
 *         <td>Time zone
 *         <td><a href="#rfc822timezone">RFC 822 time zone</a>
 *         <td><code>-0800</code>
 * </table>
 * </blockquote>
 * 
 * @see          java.text.DateFormat
 * @see          java.text.SimpleDateFormat
 */
public class DateUtils {

	public static final long MILLIS_PER_SECOND = 1000;
	public static final long MILLIS_PER_MINUTE = 60 * MILLIS_PER_SECOND;
	public static final long MILLIS_PER_HOUR = 60 * MILLIS_PER_MINUTE;
	public static final long MILLIS_PER_DAY = 24 * MILLIS_PER_HOUR;
	
	private DateUtils() {}

	protected static final String[] patterns = { "yyyy-MM-dd HH:mm:ss.S", "yyyy-MM-dd HH:mm:ss.SSS",
			"yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM-dd HH",
			"yyyy-MM-dd", "yyyyMMddHHmmssSSS", "yyyyMMddHHmmss",
			"yyyyMMddHHmm", "yyyyMMddHH", "yyyyMMdd", "yyMMdd" };
	private static Date date;

	private static DateFormat getDateFormat(String pattern) {
		SimpleDateFormat formatter = new SimpleDateFormat(pattern);
		return formatter;
	}

	/**
	 * <p><code>java.util.Date</code>를 <code>java.util.Calendar</code>로 변환한다.</p>
	 * 
	 * @param date
	 * @return
	 */
	public static Calendar toCalendar(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar;
	}

	/**
	 * <p>현재 날짜를 가져온다.</p>
	 * <p>시/분/초는 0으로 설정된다.</p>
	 * 
	 * <pre>
	 * DateUtils.getCurrentDate() = Date@"2008-11-11 00:00:00"
	 * </pre>
	 * 
	 * @return 현재 날짜
	 * @see setTime(Date, int, int, int, int)
	 */
	public static Date getCurrentDate() {
		return setTime(new Date(), 0, 0, 0, 0);
	}
	
	public static String getCurrentTimeStamp() {		
		return DateUtils.toString(getCurrentTime(), "yyyy-MM-dd HH:mm:ss.SSS");
	}
	
	public static String getDateTimeStamp(Date date) {		
		return DateUtils.toString(date, "yyyy-MM-dd HH:mm:ss.SSS");
	}

	/**
	 * <p>현재 시간을 가져온다.</p>
	 * 
	 * @return 현재 시간
	 */
	public static Date getCurrentTime() {
		return new Date();
	}

	// ----------------------------------------------------------------------
	// Date형으로 변환하기
	// ----------------------------------------------------------------------

	/**
     * <p>년, 월, 일, 시, 분, 초를 입력받아 날짜형(Date)으로 변환한다.</p>
     * 
     * @param year 년
     * @param month 월(1-12)
     * @param day 일
     * @param hour 시
     * @param min 분
     * @param sec 초
     * @return
     */
	public static Date toDate(int year, int month, int day, int hour,
			int minute, int second) {
		Calendar calendar = Calendar.getInstance();
		calendar.set(year, month - 1, day, hour, minute, second);
		calendar.set(Calendar.MILLISECOND, 0);
		return calendar.getTime();
	}

	 /**
	 * <p>년, 월, 일, 시, 분을 입력받아 날짜형(Date)으로 변환한다.(0초로 설정된다)</p>
     * 
	 * @param year 년
	 * @param month 월(1-12)
	 * @param day 일
	 * @param hour 시
	 * @param minute 분
	 * @return
	 */
	public static Date toDate(int year, int month, int day, int hour, int minute) {
		return toDate(year, month, day, hour, minute, 0);
	}

	/**
	 * <p>년, 월, 일, 시을 입력받아 날짜형(Date)으로 변환한다.(0시 0분 0초로 설정된다)</p>
     * 
	 * @param year 년
	 * @param month 월(1-12)
	 * @param day 일
	 * @return
	 */
	public static Date toDate(int year, int month, int day) {
		return toDate(year, month, day, 0, 0, 0);
	}

	/**
	 * <p>문자열을 입력받아 패턴에 맞게 날짜형(Date)으로 변환하여 반환한다.</p>
	 * <p>(변환을 실패할때는 기본  날짜를 반환한다.<)/p>
	 * 
	 * <pre>
	 * DateUtils.toDate("2008-11-11 06:15:00", "yyyy-MM-dd HH:mm:ss", *)                      = Date@"2008-11-11 06:15:00"
	 * DateUtils.toDate("Time is Gold", "yyyy-MM-dd HH:mm:ss", toDate("2008-11-11 06:15:00")) = Date@"2008-11-11 06:15:00"
	 * DateUtils.toDate(null, *, toDate("2008-11-11 06:15:00"))                               = Date@"2008-11-11 06:15:00"
	 * </pre>
	 * 
	 * @param dateStr
	 * @param pattern
	 * @param defaultDate 기본 날짜
	 * @return
	 */
	public static Date toDate(String dateStr, String pattern, Date defaultDate) {
		if (dateStr == null) {
			return defaultDate;
		}
		try {
			DateFormat dateFormat = getDateFormat(pattern);
			Date date = getDateFormat(pattern).parse(dateStr);
			if (dateStr.equals(dateFormat.format(date))) {
				return date;
			}
		} catch (ParseException e) {
		}
		return defaultDate;
	}

	/**
	 * <p>문자열을 입력받아 패턴에 맞게 날짜형(Date)으로 변환하여 반환한다.</p>
	 * 
	 * <pre>
	 * DateUtils.toDate("2008-11-11 06:15:00", "yyyy-MM-dd HH:mm:ss") = Date@"2008-11-11 06:15:00"
	 * DateUtils.toDate("Time is Gold", "yyyy-MM-dd HH:mm:ss")        = ParseException
	 * DateUtils.toDate(null, *)                                      = ParseException
	 * </pre>
	 * 
	 * @param dateStr
	 * @param pattern
	 * @return
	 * @throws ParseException 변환을 실패할때 발생
	 */
	public static Date toDate(String dateStr, String pattern)
			throws ParseException {
		if (dateStr == null) {
			return null;
		}
		DateFormat dateFormat = getDateFormat(pattern);
		Date date = dateFormat.parse(dateStr);
		if (dateStr.equals(dateFormat.format(date))) {
			return date;
		} else {
			throw new ParseException("Out of bound date", 0);
		}
	}

	/**
	 * <p>문자열을 입력받아 날짜형(Date)으로 변환한다.</p>
	 * 
	 * <pre>
	 * DateUtils.toDate(null)                  = null
	 * DateUtils.toDate("2008-11-11")          = Date@"2008-11-11 00:00:00"
	 * DateUtils.toDate("2008-11-11 06:15:00") = Date@"2008-11-11 06:15:00"
	 * </pre>
	 * 
	 * <h4>지원하는형식</h4>
	 * <ul>
	 * 	<li>yyyy-MM-dd HH:mm:ss.SSS
	 * 	<li>yyyy-MM-dd HH:mm:ss
	 * 	<li>yyyy-MM-dd HH:mm
	 * 	<li>yyyy-MM-dd HH
	 * 	<li>yyyy-MM-dd
	 * 	<li>yyyyMMddHHmmssSSS
	 * 	<li>yyyyMMddHHmmss
	 * 	<li>yyyyMMddHHmm
	 * 	<li>yyyyMMddHH
	 * 	<li>yyyyMMdd
	 * </ul>
	 * @param dateStr
	 * @return
	 * @throws IllegalArgumentException 지원하지 않는 형식일 경우
	 */
	public static Date toDate(String dateStr) throws IllegalArgumentException {
		if (dateStr == null) {
			return null;
		}
		dateStr = StringUtils.trim(dateStr);
		int dateStrLen = dateStr.length();
		date = null;
		for (String pattern : patterns) {
			if (dateStrLen == pattern.length()) {
				DateFormat dateFormat = getDateFormat(pattern);
				try {
					date = dateFormat.parse(dateStr);
					if (dateStr.equals(dateFormat.format(date))) {
						return date;
					} else {
						date = null;
					}
				} catch (ParseException e) {
					date = null;
				}
			}
		}
		if (date == null) {
			throw new IllegalArgumentException("Illegal Argument Date Strin");
		}
		return date;
	}

	// ----------------------------------------------------------------------
	// 패턴에 의한 변환
	// ----------------------------------------------------------------------

	/**
	 * <p>패턴에 의거한 날짜나 시간을 숫자(int)형으로 반환한다.</p>
	 * <p>패턴과 일치한 값이 존재하지 않으면 0을 반환한다.</p>
	 * 
	 * <pre>
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "yyyy") = 2008
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "MM")   = 7
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "dd")   = 19
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "HH")   = 6
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "mm")   = 15
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "ss")   = 0
	 * DateUtils.toNumber(toDate("2008-07-19 06:15:00"), "SSS")  = 0
	 * </pre>
	 * 
	 * @param date 날짜
	 * @param pattern 값을 가져올 패턴(yyyy, MM, dd, HH, mm, ss SSS)
	 * @return 패턴의 값
	 * @throws NumberFormatException
	 * @throws IllegalArgumentException 형식에 맞지 않는 패턴일 경우
	 */
	public static int toNumber(Date date, String pattern)
			throws IllegalArgumentException, NumberFormatException {
		return Integer.parseInt(toString(date, pattern));
	}

	/**
	 * <p>패턴에 의거한 날짜나 시간을 문자열(String)로 반환한다.</p>
	 * 
	 * <pre>
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "yyyyMMdd") = "20081124"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "yyyy")     = "2008"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "MM")       = "07"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "dd")       = "19"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "HH")       = "06"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "mm")       = "15"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "ss")       = "00"
	 * DateUtils.toString(toDate("2008-07-19 06:15:00"), "SSS")      = "000"
	 * </pre>
	 * 
	 * @param date 날짜
	 * @param pattern 값을 가져올 패턴(yyyy, MM, dd, HH, mm, ss, SSS)
	 * @return 패턴의 값
	 * @throws IllegalArgumentException 형식에 맞지 않는 패턴일 경우
	 */
	public static String toString(Date date, String pattern)
			throws IllegalArgumentException {
		return getDateFormat(pattern).format(date);
	}

	// ----------------------------------------------------------------------
	// get
	// ----------------------------------------------------------------------

	/**
	 * <p>필드에 해당하는 값을 가져온다.</p>
	 * 
	 * @param date
	 * @param field Calendar Field
	 * @return
	 */
	public static int get(Date date, int field) {
		return toCalendar(date).get(field);
	}

/**
	 * <p>날짜의 년을 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.YEAR)</code>
	 */
	public static int getYear(Date date) {
		return get(date, Calendar.YEAR);
	}

	/**
	 * <p>날짜의 월(1-12)을 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.MONTH) + 1</code>
	 */
	public static int getMonth(Date date) {
		return get(date, Calendar.MONTH) + 1;
	}

	/**
	 * <p>날짜의 주를 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.WEEK_OF_YEAR)</code>
	 */
	public static int getWeek(Date date) {
		return get(date, Calendar.WEEK_OF_YEAR);
	}

	/**
	 * <p>날짜의 일을 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.DAY_OF_MONTH)</code>
	 */
	public static int getDay(Date date) {
		return get(date, Calendar.DAY_OF_MONTH);
	}

	/**
	 * <p>날짜의 시를 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.HOUR_OF_DAY)</code>
	 */
	public static int getHour(Date date) {
		return get(date, Calendar.HOUR_OF_DAY);
	}

	/**
	 * <p>날짜의 분을 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.MINUTE)</code>
	 */
	public static int getMinute(Date date) {
		return get(date, Calendar.MINUTE);
	}

	/**
	 * <p>날짜의 초를 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.SECOND)</code>
	 */
	public static int getSecond(Date date) {
		return get(date, Calendar.SECOND);
	}

	/**
	 * <p>날짜의 1/1000초를 가져온다.</p>
	 * 
	 * @param date
	 * @return <code>Calendar.get(Calendar.MILLISECOND)</code>
	 */
	public static int getMillisecond(Date date) {
		return get(date, Calendar.MILLISECOND);
	}

	// ----------------------------------------------------------------------
	// set
	// ----------------------------------------------------------------------

	/**
	 * <p>날짜의 해당 필드값을 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param field
	 * @param value
	 * @return
	 */
	protected static Date set(Date date, int field, int value) {
		Calendar calendar = toCalendar(date);
		calendar.set(field, value);
		return calendar.getTime();
	}

	/**
	 * <p>년을 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 *  
	 * @param date
	 * @param value
	 * @return
	 */
	public static Date setYear(Date date, int value) {
		return set(date, Calendar.YEAR, value);
	}

	/**
	 * <p>월을 설정한다.<code>Calendar.set(Calendar.MONTH, value - 1)</code></p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param value 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
	 * @return
	 */
	public static Date setMonth(Date date, int value) {
		return set(date, Calendar.MONTH, value  - 1);
	}

	/**
	 * <p>일을 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param value
	 * @return
	 */
	public static Date setDay(Date date, int value) {
		return set(date, Calendar.DAY_OF_MONTH, value);
	}

	/**
	 * <p>시를 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param value
	 * @return
	 */
	public static Date setHour(Date date, int value) {
		return set(date, Calendar.HOUR_OF_DAY, value);
	}

	/**
	 * <p>분을 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param value
	 * @return
	 */
	public static Date setMinute(Date date, int value) {
		return set(date, Calendar.MINUTE, value);
	}

	/**
	 * <p>초를 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param value
	 * @return
	 */
	public static Date setSecond(Date date, int value) {
		return set(date, Calendar.SECOND, value);
	}

	/**
	 * <p>1/1000초를 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param value
	 * @return
	 */
	public static Date setMillisecond(Date date, int value) {
		return set(date, Calendar.MILLISECOND, value);
	}

	/**
	 * <p>시간을 설정한다.</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date 설정할 날짜
	 * @param hour 시
	 * @param minute 분
	 * @param second 초
	 * @param millisecond 1/1000초
	 * @return
	 */
	public static Date setTime(Date date, int hour, int minute, int second,
			int millisecond) {
		Calendar calendar = toCalendar(date);
		calendar.set(Calendar.HOUR_OF_DAY, hour);
		calendar.set(Calendar.MINUTE, minute);
		calendar.set(Calendar.SECOND, second);
		calendar.set(Calendar.MILLISECOND, millisecond);
		return calendar.getTime();
	}

	/**
	 * 
	 * <p>시간을 설정한다.(millisecond을 0으로 설정한다.)</p>
	 * <p>(입력한 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date 설정할 날짜
	 * @param hour 시
	 * @param minute 분
	 * @param second 초
	 * @return
	 */
	public static Date setTime(Date date, int hour, int minute, int second) {
		return setTime(date, hour, minute, second, 0);
	}

	// ----------------------------------------------------------------------
	// add
	// ----------------------------------------------------------------------

	/**
	 * <p>날짜의 해당 필드값을 더한다.</p>
	 * <p>)입력받은 날짜는 변하지 않는다.)</p>
	 * 
	 * @param date
	 * @param field
	 * @param amount
	 * @return
	 */
	protected static Date add(Date date, int field, int amount) {
		Calendar calendar = toCalendar(date);
		calendar.add(field, amount);
		return calendar.getTime();
	}

	/**
	 * <p>년을 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addYears(Date date, int amount) {
		return add(date, Calendar.YEAR, amount);
	}

	/**
	 * <p>월을 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addMonths(Date date, int amount) {
		return add(date, Calendar.MONTH, amount);
	}

	/**
	 * <p>일을 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addDays(Date date, int amount) {
		return add(date, Calendar.DAY_OF_MONTH, amount);
	}

	/**
	 * <p>시을 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addHours(Date date, int amount) {
		return add(date, Calendar.HOUR_OF_DAY, amount);
	}

	/**
	 * <p>분을 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addMinutes(Date date, int amount) {
		return add(date, Calendar.MINUTE, amount);
	}

	/**
	 * <p>초를 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addSeconds(Date date, int amount) {
		return add(date, Calendar.SECOND, amount);
	}

	/**
	 * <p>1/1000초를 추가한다.</p>
	 * 
	 * @param date
	 * @param amount
	 * @return
	 */
	public static Date addMilliseconds(Date date, int amount) {
		return add(date, Calendar.MILLISECOND, amount);
	}

	// ----------------------------------------------------------------------
	// 기타
	// ----------------------------------------------------------------------

	/**
	 * <p>해당 일을 기준으로 명시된 요일의 다음 날짜를 계산한다.</p>
	 * 
	 * <pre>
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.SUNDAY)   = "2008-07-20 06:15:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.MONDAY)   = "2008-07-21 06:15:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.SATURDAY) = "2008-07-26 06:15:00"
	 * </pre>
	 * 
	 * @param date
	 * @param dayOfWeek SUNDAY=1, MONDAY=2, ... SATURDAY=7
	 * @return
	 */
	public static Date getNextDate(Date date, int dayOfWeek) {
		Calendar cal = toCalendar(date);
		int amount = (7 - cal.get(Calendar.DAY_OF_WEEK)) + dayOfWeek;
		cal.add(Calendar.DAY_OF_MONTH, amount);
		return cal.getTime();
	}

	/**
	 * <p>해당 일을 기준으로 명시된 요일의 다음 날짜를 계산한다.</p>
	 * 
	 * <pre>
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.SUNDAY, false)   = "2008-07-20 06:15:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.SUNDAY, true)    = "2008-07-20 00:00:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.MONDAY, false)   = "2008-07-21 06:15:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.MONDAY, true)    = "2008-07-21 00:00:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.SATURDAY, false) = "2008-07-26 06:15:00"
	 * DateUtils.getNextDay(toDate("2008-07-19 06:15:00"), Calendar.SATURDAY, true)  = "2008-07-26 00:00:00"
	 * </pre>
	 * 
	 * @param date
	 * @param dayOfWeek SUNDAY=1, MONDAY=2, ... SATURDAY=7
	 * @param resetTime 시간 초기화 여부. <code>true</code>이면 시:분:초 0:0:0으로 설정한다.
	 * @return
	 */
	public static Date getNextDate(Date date, int dayOfWeek, boolean resetTime) {
		Calendar cal = toCalendar(date);
		if (resetTime) {
			cal.set(Calendar.HOUR_OF_DAY, 0);
			cal.set(Calendar.MINUTE, 0);
			cal.set(Calendar.SECOND, 0);
			cal.set(Calendar.MILLISECOND, 0);
		}
		int amount = (7 - cal.get(Calendar.DAY_OF_WEEK)) + dayOfWeek;
		cal.add(Calendar.DAY_OF_MONTH, amount);
		return cal.getTime();
	}

	/**
	 * <p>해당 날짜가 속한 달의 마지막 날짜를 계산한다.</p>
	 * 
	 * <pre>
	 * DateUtils.getLastDay(toDate("2008-07-19 06:15:00"), Calendar.SUNDAY)   = "2008-07-31 06:15:00"
	 * </pre>
	 * 
	 * @param date
	 * @return
	 */
	public static Date getLastDate(Date date) {
		Calendar cal = toCalendar(date);
		int amount = cal.getActualMaximum(Calendar.DAY_OF_MONTH)
				- cal.get(Calendar.DAY_OF_MONTH);
		cal.add(Calendar.DAY_OF_MONTH, amount);
		return cal.getTime();
	}

	/**
	 * <p>해당 날짜가 속한 달의 마지막 날짜를 계산한다.</p>
	 * 
	 * <pre>
	 * DateUtils.getLastDay(toDate("2008-07-19 06:15:00"), Calendar.SUNDAY, false)  = "2008-07-31 06:15:00"
	 * DateUtils.getLastDay(toDate("2008-07-19 06:15:00"), Calendar.SUNDAY, true)   = "2008-07-31 00:00:00"
	 * </pre>
	 * 
	 * @param date
	 * @param resetTime 시간 초기화 여부. <code>true</code>이면 시:분:초 0:0:0으로 설정한다.
	 * @return
	 */
	public static Date getLastDate(Date date, boolean resetTime) {
		Calendar cal = toCalendar(date);
		if (resetTime) {
			cal.set(Calendar.HOUR_OF_DAY, 0);
			cal.set(Calendar.MINUTE, 0);
			cal.set(Calendar.SECOND, 0);
			cal.set(Calendar.MILLISECOND, 0);
		}
		int amount = cal.getActualMaximum(Calendar.DAY_OF_MONTH)
				- cal.get(Calendar.DAY_OF_MONTH);
		cal.add(Calendar.DAY_OF_MONTH, amount);
		return cal.getTime();
	}

	/**
	 * <p>두 달력의 날짜(시간 무시)가 일치하는지 판단한다.</p>
	 * 
	 * @param cal1
	 * @param cal2
	 * @return
	 */
	public static boolean isSameDay(Calendar cal1, Calendar cal2) {
		if (cal1 == null) {
			return (cal2 == null);
		}
		if (cal1 == cal2) {
			return true;
		}
		return (cal1.get(Calendar.ERA) == cal2.get(Calendar.ERA)
				&& cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR) && cal1
				.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR));
	}

	/**
	 * <p>두 날짜의 날짜(시간 무시)가 일치하는지 판단한다.</p
	 * 
	 * @param date1
	 * @param date2
	 * @return
	 */
	public static boolean isSameDay(Date date1, Date date2) {
		if (date1 == null) {
			return (date2 == null);
		}
		if (date1 == date2) {
			return true;
		}
		return isSameDay(toCalendar(date1), toCalendar(date2));
	}

	// ----------------------------------------------------------------------
	// 기간 구하기
	// ----------------------------------------------------------------------

	/**
	 * <p>시작일부터 종료일까지의 기간을 ms로 계산한다.</p>
	 * 
	 * <pre>
	 * DateUtils.getBetween(toDate("2008-11-11 23:59"), toDate("2008-11-12 23:58")) = 86340000
	 * DateUtils.getBetween(toDate("2008-11-11 23:59"), toDate("2008-11-12 23:59")) = 86400000
	 * DateUtils.getBetween(null, *)                                                = 0
	 * DateUtils.getBetween(*, null)                                                = 0
	 * </pre>
	 * 
	 * @param from 시작일
	 * @param to 종료일
	 * @return 기간의 1/1000초(ms)
	 */
	public static long getBetween(Date from, Date to) {
		if (from == null || to == null) {
			return 0;
		}
		return to.getTime() - from.getTime();
	}

	/**
	 * <p>시작일부터 종료일까지의 차이를 일(day)로 계산한다.
	 * (시간 단위로 계산하기 때문에 24시간이 지나지않으면 하루로 계산하지 않는다.)</p>
	 * 
	 * <pre>
	 * DateUtils.getDaysBetween(toDate("2008-11-11"), toDate("2008-11-13"))             = 2
	 * DateUtils.getDaysBetween(toDate("2008-11-11"), toDate("2008-11-11"))             = 0
	 * DateUtils.getDaysBetween(toDate("2008-11-12"), toDate("2008-11-11"))             = -1
	 * DateUtils.getDaysBetween(toDate("2008-11-11 23:59"), toDate("2008-11-12 23:58")) = 0
	 * DateUtils.getDaysBetween(toDate("2008-11-11 23:59"), toDate("2008-11-12 23:59")) = 1
	 * DateUtils.getDaysBetween(null, *)                                                = 0
	 * DateUtils.getDaysBetween(*, null)                                                = 0
	 * </pre>
	 * 
	 * @param from 시작일
	 * @param to 종료일
	 * @return 기간의 일(day)수
	 */
	public static int getDaysBetween(Date from, Date to) {
		return (int) (getBetween(from, to) / MILLIS_PER_DAY);
	}

	/**
	 * <p>기간을 패턴에 맞게 출력한다.('0'으로 패딩을 한다)</p>
	 * 
	 * <pre>
	 * toString(100000, "dd HH:mm:ss.SSS") = "00 00:01:40.000"
	 * </pre>
	 * 
	 * @param millis 기간(millisecond)
	 * @param pattern 패턴(ddHHMmmssSSS)
	 * @return
	 * @since 1.1
	 */
	public static String toString(long millis, String pattern) {
		return toString(millis, pattern, true);
	}

	/**
	 * <p>기간을 패턴에 맞게 출력한다.</p>
	 * 
	 * <pre>
	 * toString(100000, "dd HH:mm:ss.SSS", true)  = "00 00:01:40.000"
	 * toString(100000, "dd HH:mm:ss.SSS", false) = "0 0:1:40.0"
	 * </pre>
	 * 
	 * @param millis 기간(millisecond)
	 * @param pattern 패턴(ddHHMmmssSSS)
	 * @param padWithZeros '0'을 패딩할지 여부
	 * @return
	 * @since 1.1
	 */
	public static String toString(long millis, String pattern,
			boolean padWithZeros) {
		if (pattern == null) {
			return null;
		}
		DatePatternToken[] tokens = DatePatternToken.getTokens(pattern);
		boolean[] contains = DatePatternToken.containsPattern(tokens);
		boolean hasDays = contains[2];
		boolean hasHours = contains[3], hasMinutes = contains[4], hasSeconds = contains[5];

		// 시작일과 종료일을 모르면 년수와, 달수를 계산하기 불가능하므로 0으로 설정한다.
		int years = 0;
		int months = 0;
		int days = (int) (millis / MILLIS_PER_DAY);
		
		int hours = (int) ((millis % MILLIS_PER_DAY) / MILLIS_PER_HOUR);
		int minutes = (int) ((millis % MILLIS_PER_HOUR) / MILLIS_PER_MINUTE);
		int seconds = (int) ((millis % MILLIS_PER_MINUTE) / MILLIS_PER_SECOND);
		int milliseconds = (int) (millis % MILLIS_PER_SECOND);

		if (!hasDays) {
			hours += 24 * days;
			days = 0;
		}
		if (!hasHours) {
			minutes += 60 * hours;
			hours = 0;
		}
		if (!hasMinutes) {
			seconds += 60 * minutes;
			minutes = 0;
		}
		if (!hasSeconds) {
			milliseconds += 1000 * seconds;
			seconds = 0;
		}
		return format(tokens, years, months, days, hours, minutes, seconds,
				milliseconds, padWithZeros);
	}

	/**
	 * <p>시작일부터 종료일까지의 기간을 패턴에 맞게 출력한다.('0'으로 패딩한다.)</p>
	 * 
	 * <pre>
	 * DaetUtils.toString(269644500000, 1100125141004, "yyyy-MM-dd HH:mm:ss.SSS")  = "0026-03-23 01:04:01.004";
	 * DaetUtils.toString(269644500000, 1100125141004, "MM-dd HH:mm:ss.SSS")       = "315-23 01:04:01.004";
	 * </pre>
	 * 
	 * @param startMillis 시작일
	 * @param endMillis 종료일
	 * @param pattern 패턴(yyyyMMddHHMmmssSSS)
	 * @return
	 * @since 1.1
	 */
	public static String toString(long startMillis, long endMillis,
			String pattern) {
		return toString(startMillis, endMillis, pattern, true);
	}

	/**
	 * <p>시작일부터 종료일까지의 기간을 패턴에 맞게 출력한다.</p>
	 * 
	 * <pre>
	 * DaetUtils.toString(269644500000, 1100125141004, "yyyy-MM-dd HH:mm:ss.SSS", true)  = "0026-03-23 01:04:01.004";
	 * DaetUtils.toString(269644500000, 1100125141004, "yyyy-MM-dd HH:mm:ss.SSS", false) = "26-3-23 1:4:1.4";
	 * DaetUtils.toString(269644500000, 1100125141004, "MM-dd HH:mm:ss.SSS", true)       = "315-23 01:04:01.004";
	 * </pre>
	 * 
	 * @param startMillis 시작일
	 * @param endMillis 종료일
	 * @param pattern 패턴(yyyyMMddHHMmmssSSS)
	 * @param padWithZeros '0'을 패딩할지 여부
	 * @return
	 * @since 1.1
	 */
	public static String toString(long startMillis, long endMillis,
			String pattern, boolean padWithZeros) {
		return toString(new Date(startMillis), new Date(endMillis), pattern,
				padWithZeros);
	}

	/**
	 * <p>시작일부터 종료일까지의 기간을 패턴에 맞게 출력한다.('0'으로 패딩한다.)</p>
	 * 
	 * <pre>
	 * DaetUtils.toString(toDate("1978-07-19 06:15:00.000"), toDate("2004-11-11 07:19:01.004"), "yyyy-MM-dd HH:mm:ss.SSS") = "0026-03-23 01:04:01.004";
	 * DaetUtils.toString(toDate("1978-07-19 06:15:00.000"), toDate("2004-11-11 07:19:01.004"), "MM-dd HH:mm:ss.SSS")      = "315-23 01:04:01.004";
	 * </pre>
	 * 
	 * @param startDate 시작일
	 * @param endDate 종료일
	 * @param pattern 패턴(yyyyMMddHHMmmssSSS)
	 * @return
	 * @since 1.1
	 */
	public static String toString(Date startDate, Date endDate, String pattern) {
		return toString(startDate, endDate, pattern, true);
	}

	/**
	 * <p>시작일부터 종료일까지의 기간을 패턴에 맞게 출력한다.</p>
	 *
	 * <pre>
	 * DaetUtils.toString(toDate("1978-07-19 06:15:00.000"), toDate("2004-11-11 07:19:01.004"), "yyyy-MM-dd HH:mm:ss.SSS", true)  = "0026-03-23 01:04:01.004";
	 * DaetUtils.toString(toDate("1978-07-19 06:15:00.000"), toDate("2004-11-11 07:19:01.004"), "yyyy-MM-dd HH:mm:ss.SSS", false) = "26-3-23 1:4:1.4";
	 * DaetUtils.toString(toDate("1978-07-19 06:15:00.000"), toDate("2004-11-11 07:19:01.004"), "MM-dd HH:mm:ss.SSS", true)       = "315-23 01:04:01.004";
	 * </pre>
	 * 
	 * @param startDate 시작일
	 * @param endDate 종료일
	 * @param pattern 패턴(yyyyMMddHHMmmssSSS)
	 * @param padWithZeros '0'을 패딩할지 여부
	 * @return
	 * @since 1.1
	 */
	public static String toString(Date startDate, Date endDate, String pattern,
			boolean padWithZeros) {
		if (pattern == null) {
			return null;
		}
		DatePatternToken[] tokens = DatePatternToken.getTokens(pattern);

		boolean[] contains = DatePatternToken.containsPattern(tokens);
		boolean hasYears = contains[0], hasMonths = contains[1], hasDays = contains[2];
		boolean hasHours = contains[3], hasMinutes = contains[4], hasSeconds = contains[5];

		boolean needRevert = false;
		if (startDate.compareTo(endDate) > 0) {
			Date tempDate = startDate;
			startDate = endDate;
			endDate = tempDate;
			needRevert = true;
		}

		int years = 0;
		int months = 0;
		int days = 0;
		int hours = 0;
		int minutes = 0;
		int seconds = 0;
		int milliseconds = 0;

		if (hasMonths) {
			Calendar start = toCalendar(startDate);
			Calendar end = toCalendar(endDate);

			hours = end.get(Calendar.HOUR_OF_DAY)
					- start.get(Calendar.HOUR_OF_DAY);
			minutes = end.get(Calendar.MINUTE) - start.get(Calendar.MINUTE);
			seconds = end.get(Calendar.SECOND) - start.get(Calendar.SECOND);
			milliseconds = end.get(Calendar.MILLISECOND)
					- start.get(Calendar.MILLISECOND);

			while (milliseconds < 0) {
				milliseconds += 1000;
				seconds -= 1;
			}
			while (seconds < 0) {
				seconds += 60;
				minutes -= 1;
			}
			while (minutes < 0) {
				minutes += 60;
				hours -= 1;
			}
			while (hours < 0) {
				hours += 24;
				days -= 1;
			}

			int endDay = end.get(Calendar.DAY_OF_MONTH);
			if (end.get(Calendar.YEAR) > start.get(Calendar.YEAR)) {
				years += (end.get(Calendar.YEAR) - (start.get(Calendar.YEAR) + 1));
				months += end.get(Calendar.MONTH);
				days += endDay;

				end.set(start.get(Calendar.YEAR), 11, 1);
				end.set(Calendar.DAY_OF_MONTH, end
						.getActualMaximum(Calendar.DAY_OF_MONTH));
			}

			endDay = end.get(Calendar.DAY_OF_MONTH);
			if (end.get(Calendar.MONTH) > start.get(Calendar.MONTH)) {
				months += (end.get(Calendar.MONTH) - (start.get(Calendar.MONTH) + 1));
				days += endDay;

				if (days >= start.getActualMaximum(Calendar.DAY_OF_MONTH)) {
					months++;
					days -= start.getActualMaximum(Calendar.DAY_OF_MONTH);
				}

				end.set(end.get(Calendar.YEAR), start.get(Calendar.MONTH), 1);
				end.set(Calendar.DAY_OF_MONTH, end
						.getActualMaximum(Calendar.DAY_OF_MONTH));
			}

			days += (end.get(Calendar.DAY_OF_MONTH) - start
					.get(Calendar.DAY_OF_MONTH));

			if (days >= start.getActualMaximum(Calendar.DAY_OF_MONTH)) {
				months++;
				days -= start.getActualMaximum(Calendar.DAY_OF_MONTH);
			}

			if (hasYears) {
				if (months > 11) {
					years += (months / 12);
					months = (months % 12);
				}
			} else {
				if (years != 0) {
					months += (years * 12);
					years = 0;
				}
			}
		} else {
			long period = getBetween(startDate, endDate);
			days = (int) (period / MILLIS_PER_DAY);
			hours = (int) ((period % MILLIS_PER_DAY) / MILLIS_PER_HOUR);
			minutes = (int) ((period % MILLIS_PER_HOUR) / MILLIS_PER_MINUTE);
			seconds = (int) ((period % MILLIS_PER_MINUTE) / MILLIS_PER_SECOND);
			milliseconds = (int) (period % MILLIS_PER_SECOND);
		}

		if (!hasDays) {
			hours += 24 * days;
			days = 0;
		}
		if (!hasHours) {
			minutes += 60 * hours;
			hours = 0;
		}
		if (!hasMinutes) {
			seconds += 60 * minutes;
			minutes = 0;
		}
		if (!hasSeconds) {
			milliseconds += 1000 * seconds;
			seconds = 0;
		}
		String result = format(tokens, years, months, days, hours, minutes,
				seconds, milliseconds, padWithZeros);
		return needRevert ? "-" + result : result;
	}

	/**
	 * <p>패턴에 맞게 기간을 문자열로 출력한다.</p>
	 * 
	 * @param tokens
	 * @param years
	 * @param months
	 * @param days
	 * @param hours
	 * @param minutes
	 * @param seconds
	 * @param milliseconds
	 * @param padWithZeros
	 * @return
	 * @since 1.1
	 */
	protected static String format(DatePatternToken[] tokens, int years,
			int months, int days, int hours, int minutes, int seconds,
			int milliseconds, boolean padWithZeros) {
		StringBuilder result = new StringBuilder();
		for (DatePatternToken token : tokens) {
			Object value = token.getValue();
			int count = token.getCount();
			if (value instanceof StringBuilder) {
				result.append(value.toString());
			} else {
				if ("y".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(years), count, "0") : Integer
							.toString(years));
				} else if ("M".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(months), count, "0") : Integer
							.toString(months));
				} else if ("d".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(days), count, "0") : Integer
							.toString(days));
				} else if ("H".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(hours), count, "0") : Integer
							.toString(hours));
				} else if ("m".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(minutes), count, "0") : Integer
							.toString(minutes));
				} else if ("s".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(seconds), count, "0") : Integer
							.toString(seconds));
				} else if ("S".equals(value)) {
					result.append(padWithZeros ? StringUtils.leftPad(Integer
							.toString(milliseconds), count, "0") : Integer
							.toString(milliseconds));
				}
			}
		}
		return result.toString();
	}
	/*    getCalsDate(
	 * 	  첫번쟤 param : 0:일단위:1년단위2:월단위    
	 *   두번쨰 param : 더할 일자 (단위에 따라 년/월/일 이 더해짐)
	 *   세번쨰 param : 포멧.
	 *  System.out.println("getCalsDate(0,1) : "+DateUtils.getCalsDate(0,1,"yyyy-MM-dd") );
		System.out.println("getCalsDate(2,1) : "+DateUtils.getCalsDate(2,1,"yyyy-MM-dd") );
		System.out.println("getCalsDate(2,-1) : "+DateUtils.getCalsDate(2,-1,"yyyy-MM-dd") );
		System.out.println("getCalsDate(2,-1) : "+DateUtils.getCalsDate(2,-2,"yyyy-MM-dd") );
		결과
		getCalsDate(0,1) : 2016-12-14
		getCalsDate(2,1) : 2017-01-14
		getCalsDate(2,-1) : 2016-11-14
		getCalsDate(2,-1) : 2016-10-14
	 * */
	@SuppressWarnings("static-access")
	public static String getCalsDate(int y,int z,String date_type) throws Exception{
		Calendar cal=Calendar.getInstance(Locale.KOREAN);
		TimeZone timezone=cal.getTimeZone();
		timezone=timezone.getTimeZone("Asia/Seoul");
		cal = Calendar.getInstance(timezone);
	
		cal.add(y,z); 
		Date currentTime=cal.getTime();
		SimpleDateFormat formatter=new SimpleDateFormat(date_type,Locale.KOREAN);
		String timestr=formatter.format(currentTime);
	
		return timestr;
	}
	 /**
     * 설 명 : 현재 서버의 UTC 타임을 밀리 세컨으로 돌려준다.
     */
    public static long getUTCMilliSecond() {
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
        
        return cal.getTimeInMillis();
    }
	
//	public static void main(String... args){
//		
//		Calendar calendar = Calendar.getInstance();
//		
//		System.out.println(DateUtils.toString(calendar.getTime(), "yyyy-MM-dd HH:mm:ss.SSS"));
//		
//		
//		System.out.println(getCurrentDate() + " : " + getCurrentTime());
//		System.out.println(DateUtils.toString(getCurrentTime(), "yyyy-MM-dd HH:mm:ss.SSS"));
//	}
}
