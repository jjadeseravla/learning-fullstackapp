package com.jade.learningspringboot.service;

import com.jade.learningspringboot.dao.FakeDataDao;
import com.jade.learningspringboot.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

class UserServiceTest {

    //need to inject FakeDataDao
    @Mock
    private FakeDataDao mockFakeDataDao;

    //need an instance of userService
    private UserService userService;

    @BeforeEach
    void setUp() {
        //instantiate mock
        MockitoAnnotations.initMocks(this);
        userService = new UserService(mockFakeDataDao);
    }

    @Test
    void shouldGetAllUsers() {
        UUID userLiamId = UUID.randomUUID();
        User liam = new User(userLiamId,
                "Liam",
                User.Gender.MALE,
                37);

        //return a list of users
        List<User> users = new ArrayList<>();
                users.add(liam);

//        ImmutableList<User> users = new ImmutableList.Builder<User>()
//            .add(liam)
//            .build();

        given(mockFakeDataDao.selectAllUsers()).willReturn(users);

        List<User> allUsers = userService.getAllUsers();

        assertThat(allUsers).hasSize(1);

        User user = allUsers.get(0);

        assertUserFields(user);
    }

    @Test
    void shouldGetUser() {
        UUID userLiamId = UUID.randomUUID();
        User liam = new User(userLiamId,
                "Liam",
                User.Gender.MALE,
                37);

        given(mockFakeDataDao.selectUserByUserId(userLiamId)).willReturn(Optional.of(liam));
        Optional<User> optionalLiam = userService.getUser(userLiamId);

        assertThat(optionalLiam.isPresent()).isTrue();
        
        //assertThat(optionalLiam.get()).isEqualToComparingFieldByField(liam);
        User user = optionalLiam.get();
        assertUserFields(user);
    }

    @Test
    void shouldUpdateUser() {
    }

    @Test
    void removeUser() {
    }

    @Test
    void insertUser() {
    }

    private void assertUserFields(User user) {
        assertThat(user.getAge()).isEqualTo(37);
        assertThat(user.getName()).isEqualTo("Liam");
        assertThat(user.getGender()).isEqualTo(User.Gender.MALE);
        assertThat(user.getUserId()).isNotNull();
    }
}
