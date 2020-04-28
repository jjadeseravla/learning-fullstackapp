package com.jade.learningspringboot.config;

import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@Configuration //same as @Component but it says this class is just config
@ApplicationPath("/")
public class RestEasyConfig extends Application {
}
