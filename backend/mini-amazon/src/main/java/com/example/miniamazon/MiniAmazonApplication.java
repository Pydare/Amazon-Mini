package com.example.miniamazon;

import com.example.miniamazon.security.jwt.AuthTokenFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MiniAmazonApplication {


	public static void main(String[] args) {
		SpringApplication.run(MiniAmazonApplication.class, args);
	}

}
