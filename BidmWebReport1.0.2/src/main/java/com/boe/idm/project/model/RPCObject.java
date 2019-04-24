package com.boe.idm.project.model;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * Get/Set으로 지정된 Bean 객체의 Get 부분을 읽어 값을 Invocation 하는 클래스
 * Get 메소드는 반드시 get 으로 사용되어야 값을 볼 수 있다.
 * 
 * @author illmare
 *
 */
public class RPCObject implements Serializable {

	private static final long serialVersionUID = 2819376368283205580L;
	private final String RPCObjectName = RPCObject.class.getName();
	
	public String toString(){
		
		StringBuffer method_text = new StringBuffer();
		
		Class<?> _class = this.getClass();
		Method[] _methods = _class.getDeclaredMethods();

		method_text.append( this.getClass() + "'s value of variables [\n" );
		method_text.append( getMethodNameAndValue(_methods) );
		method_text.append( callSuperClass(_class) );
		method_text.append( "]" );
		
		return method_text.toString();
	}
	
	private StringBuffer callSuperClass(Class<?> _class) {
		
		StringBuffer method_text = new StringBuffer();
		
		Class<?> _superClass = _class.getSuperclass();
		
		if(_superClass != null) {
			
			String _superClassName = _superClass.getName();
			if(_superClassName.indexOf(RPCObjectName) < 0){
				//Method[] _superClassMethods = _superClass.getDeclaredMethods();
				Method[] _superClassMethods = _superClass.getMethods();
				method_text.append(getMethodNameAndValue(_superClassMethods));
			}
			
			//method_text.append(callSuperClass(_superClass));
		} 		
		return method_text;
	}

	public StringBuffer getMethodNameAndValue(Method[] _methods){
		
		StringBuffer method_text = new StringBuffer();
		
		Object _obj = null;
		Object[] _param = null;
		String _methodName;
		int _pos;

		for(int i = 0; i < _methods.length; i++) {
			_methodName = _methods[i].getName();
			_pos = _methodName.indexOf("get");
	
			if( _pos == 0 && _methods[i].getParameterTypes().length == 0) {

				if( _methodName.indexOf("Class") <= 1 ){
					
					try {
						_obj = _methods[i].invoke(this, _param);
					} catch (IllegalArgumentException e1) {
						e1.printStackTrace();
					} catch (IllegalAccessException e1) {
						e1.printStackTrace();
					} catch (InvocationTargetException e1) {
						e1.printStackTrace();
					}
					
					if( _obj != null ) {
						method_text.append(_methodName + " : " + _obj + ",\n");
					}
				}
			}
		}
		
		return method_text;
	}
}
