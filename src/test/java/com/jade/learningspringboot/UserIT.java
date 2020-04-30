package com.jade.learningspringboot;

		import com.jade.learningspringboot.controller.UserController;
		import com.jade.learningspringboot.model.User;
		import org.junit.jupiter.api.Test;
		import org.junit.runner.RunWith;
		import org.springframework.beans.factory.annotation.Autowired;
		import org.springframework.boot.test.context.SpringBootTest;
		import org.springframework.test.context.junit4.SpringRunner;

		import java.util.List;
		import java.util.UUID;

		import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class UserIT {

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

//	@Test
//	public void shouldInsertUser() {
//		//given
//		UUID userLiamId = UUID.randomUUID();
//		User liam = new User(userLiamId,
//				"Liam",
//				User.Gender.MALE,
//				37);
//		//when
//		userController.insertNewUser(liam);
//
//		//then
//		ResponseEntity<?> responseEntity = userController.fetchUser(userLiamId);
//
//	}

	@Test
	public void shouldFetchUsersByGender() {
		//Given
		UUID userLiamId = UUID.randomUUID();
		User liam = new User(userLiamId,
				"Liam",
				User.Gender.MALE,
				37);
		//When
		userController.insertNewUser(liam);
		List<User> females = userController.fetchUsers("female");

		//Then
		assertThat(females).extracting("userId").doesNotContain(liam.getUserId());
		assertThat(females).extracting("name").doesNotContain(liam.getName());
		assertThat(females).extracting("age").doesNotContain(liam.getAge());

		List<User> males = userController.fetchUsers("male");

		assertThat(males).extracting("userId").contains(liam.getUserId());
		assertThat(males).extracting("name").contains(liam.getName());
		assertThat(males).extracting("age").contains(liam.getAge());

	}


}

