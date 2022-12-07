package com.solera.JavaAssestment1;

import com.solera.JavaAssestment1.controllers.MyClassController;
import com.solera.JavaAssestment1.enitities.MyClass;
import com.solera.JavaAssestment1.services.MyClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaAssestment1Application implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(JavaAssestment1Application.class, args);
	}

	@Autowired
	private MyClassService myClassService;

	@Override
	public void run(String... args) throws Exception {
		for(int i =1; i<2; i++){
			//myClassService.createEntity(new MyClass("Name"+i, "Surname"+i, "12345678"+i, "email@email.com"+i));
		}
	}
}
