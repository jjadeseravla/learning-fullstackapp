//package com.jade.learningspringboot;
//
//import com.jade.learningspringboot.controller.UserController;
//import com.jade.learningspringboot.model.User;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@SpringBootTest
//class LearningSpringBootApplicationTests {
//
//	@Test
//	void contextLoads() {
//	}
//
//}

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
		import java.util.UUID;

		import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class LearningSpringBootApplicationTests {

	@Autowired
	private UserController userController;

	@Test
	void itShouldFetchAllUsers() {
		List<User> users = userController.fetchUsers(null);
		assertThat(users).hasSize(1);
		//System.out.println("sdfsfs" + users.get(1));

		UUID userLiamId = UUID.randomUUID();
		User liam = new User(userLiamId,
				"Liam",
				User.Gender.MALE,
				37);

		users.add(liam);
		assertThat(users.get(1)).isEqualToIgnoringGivenFields(liam, "userId");
		assertThat(users.get(1).getUserId()).isInstanceOf(UUID.class);
		assertThat(users.get(1).getUserId()).isNotNull();
	}

}

