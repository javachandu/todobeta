package com.in28minutes.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BsicAuthenticationController {	
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean(){
		return new AuthenticationBean("You are authenticated");
	}	
}