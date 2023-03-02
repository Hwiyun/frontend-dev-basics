package ch08.controller.test;

import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/test/gb")
public class GuestbookTestController {

	// add
	public String ex01() {
		return "gb/ex01";
	}
	
	// list
	public String ex02() {
		return "gb/ex02";
	}
	
	//delete
	public String ex03() {
		return "gb/ex03";
	}

}