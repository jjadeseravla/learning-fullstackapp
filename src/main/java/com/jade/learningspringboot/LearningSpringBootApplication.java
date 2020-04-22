package com.jade.learningspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class LearningSpringBootApplication {

	public static void main(String[] args) {

		SpringApplication.run(LearningSpringBootApplication.class, args);
	}

	@RestController
	class Resource {

		@GetMapping
		Message getMessage() {
			return new Message("Hello Jade");
		}

	}

	//this message class is a model so dont need to inject as we want to create a bunch of these
	class Message {

		private final String message;


		public Message(String message) {
			this.message = message;
		}

		public String getMessage() {
			return message;
		}

		@Override
		public String toString() {
			return "Message{" +
					"message='" + message + '\'' +
					'}';
		}

	}

}
