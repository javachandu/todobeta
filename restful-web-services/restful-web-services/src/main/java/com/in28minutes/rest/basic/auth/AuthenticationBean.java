package com.in28minutes.rest.basic.auth;

public class AuthenticationBean {

	private Object message;

	public AuthenticationBean(String string) {
		this.message = string;
	}

	public Object getMessage() {
		return message;
	}

	public void setMessage(Object message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
