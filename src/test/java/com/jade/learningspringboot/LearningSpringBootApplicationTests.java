package com.jade.learningspringboot;

import com.jade.learningspringboot.controller.UserController;
import com.jade.learningspringboot.model.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT)
class LearningSpringBootApplicationTests {

	@Autowired
	private UserController userController;

	@Test
	void itShouldFetchAllUsers() {
		List<User> users = userController.fetchUsers(null);
		assertThat(users).hasSize(1);

		User liam = new User(null,
				"Liam",
				User.Gender.MALE,
				37);

		assertThat(users.get(0)).isEqualToIgnoringGivenFields(liam, "userId");
	}

}
