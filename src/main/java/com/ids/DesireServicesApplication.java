package com.ids;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DesireServicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(DesireServicesApplication.class, args);
    }
}
