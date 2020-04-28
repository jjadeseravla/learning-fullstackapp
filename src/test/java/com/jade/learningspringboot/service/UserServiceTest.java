package com.jade.learningspringboot.service;

import com.jade.learningspringboot.dao.FakeDataDao;
import com.jade.learningspringboot.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

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

        List<User> allUsers = userService.getAllUsers(Optional.empty());

        assertThat(allUsers).hasSize(1);

        User user = allUsers.get(0);

        assertLiamFields(user);
    }

    @Test
    void shouldGetAllUsersByGender() {
        UUID userLiamId = UUID.randomUUID();
        User liam = new User(userLiamId,
                "Liam",
                User.Gender.MALE,
                37);

        UUID userAdaId = UUID.randomUUID();
        User ada = new User(userAdaId,
                "Ada",
                User.Gender.FEMALE,
                101);

        //return a list of users
        List<User> users = new ArrayList<>();
        users.add(liam);
        users.add(ada);

        given(mockFakeDataDao.selectAllUsers()).willReturn(users);

        List<User> filteredUsers = userService.getAllUsers(Optional.of("MALE"));

        assertThat(filteredUsers).hasSize(1);
        assertLiamFields(filteredUsers.get(0));
    }

    @Test
    void shouldThrowExceptionWhenGenderIsInvalid() {
        assertThatThrownBy(() -> userService.getAllUsers(Optional.of("gibberish")))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("Invalid gender");
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
        assertLiamFields(user);
    }

    @Test
    void shouldUpdateUser() {
        UUID userLiamId = UUID.randomUUID();
        User liam = new User(userLiamId,
                "Liam",
                User.Gender.MALE,
                37);

        given(mockFakeDataDao.selectUserByUserId(userLiamId)).willReturn(Optional.of(liam));
        given(mockFakeDataDao.updateUser(liam)).willReturn(1);

        //capture what user was sent
        ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);

        int updateResult = userService.updateUser(liam);

        verify(mockFakeDataDao).selectUserByUserId(userLiamId);
        //capture what user was sent
        verify(mockFakeDataDao).updateUser(captor.capture());

        assertThat(updateResult).isEqualTo(1);

        //capture what user was sent
        User user = captor.getValue();
        assertLiamFields(user);

    }

    @Test
    void shouldRemoveUser() {
        UUID userLiamId = UUID.randomUUID();
        User liam = new User(userLiamId,
                "Liam",
                User.Gender.MALE,
                37);

        Optional<User> optionalLiam = userService.getUser(userLiamId);

        given(mockFakeDataDao.selectUserByUserId(userLiamId)).willReturn(Optional.of(liam));
        given(mockFakeDataDao.deleteUserByUserId(userLiamId)).willReturn(1);

        //ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);

        int deleteResult = userService.removeUser(userLiamId);

        assertThat(optionalLiam.isPresent()).isFalse();
        assertThat(deleteResult).isEqualTo(1);

    }

//    @Test
//    void shouldInsertUser() {
//        User liam = new User(null,
//                "Liam",
//                User.Gender.MALE,
//                37);
//
//        given(mockFakeDataDao.insertUser(any(UUID.class), eq(liam))).willReturn(1);
//
//        ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);
//
//        int insertResult = userService.insertUser(liam);
//
//        verify(mockFakeDataDao).insertUser(any(UUID.class), captor.capture());
//
//        User user = captor.getValue();
//
//        assertLiamFields(user);
//        assertThat(insertResult).isEqualTo(1);
//    }

    private void assertLiamFields(User user) {
        assertThat(user.getAge()).isEqualTo(37);
        assertThat(user.getName()).isEqualTo("Liam");
        assertThat(user.getGender()).isEqualTo(User.Gender.MALE);
        assertThat(user.getUserId()).isNotNull();
        assertThat(user.getUserId()).isInstanceOf(UUID.class);
    }
}
