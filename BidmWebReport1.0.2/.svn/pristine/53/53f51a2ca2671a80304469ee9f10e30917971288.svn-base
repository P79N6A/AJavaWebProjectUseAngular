package com.boe.utils;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Utils {

    public static boolean isNumeric(String s) {
        if (s == null) {
            return false;
        }

        s = s.trim();
        if (s.isEmpty()) {
            return false;
        }

        Pattern pattern = Pattern.compile("-?[0-9]+(\\\\.[0-9]+)?");

        try {
            String bigStr = new BigDecimal(s).toString();
            Matcher isNum = pattern.matcher(bigStr);
            return isNum.matches();
        } catch (Exception e) {
            return false;
        }
    }
    
    
    /**
     * 把科学计数法显示出全部数字
     * @param d
     */
    public static void object2Str(Object d) {
        if (d == null) {
        }
        NumberFormat nf = NumberFormat.getInstance();
	System.out.println(nf.format(d));
	
    }

}
