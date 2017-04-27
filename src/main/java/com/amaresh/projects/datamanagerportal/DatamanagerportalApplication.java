package com.amaresh.projects.datamanagerportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class DatamanagerportalApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatamanagerportalApplication.class, args);
	}
	
	  @RequestMapping("/")
	    public String showLogin(Model model) {
	        return "index_new";
	    }
}