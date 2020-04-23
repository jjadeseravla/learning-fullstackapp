package com.jade.learningspringboot.dao;

import com.jade.learningspringboot.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class FakeDataDaoTest {

    //need the instance of the FakeDataDao
    private FakeDataDao fakeDataDao;

    @BeforeEach
        //fresh object (fakeDataDao) for each test
    void setUp() {
        fakeDataDao = new FakeDataDao();
    }

    @Test
    void shouldSelectAllUsers() {
        List<User> users = fakeDataDao.selectAllUsers();
        assertThat(users).hasSize(1);

        User user = users.get(0);

        assertThat(user.getAge()).isEqualTo(29);
        assertThat(user.getName()).isEqualTo("Jade");
        assertThat(user.getGender()).isEqualTo(User.Gender.FEMALE);
        assertThat(user.getUserId()).isNotNull();
    }

    @Test
    void shouldSelectUserByUserId() {
        UUID userLiamId = UUID.randomUUID();
        User liam = new User(userLiamId,
                "Liam",
                User.Gender.MALE,
                37);
        fakeDataDao.insertUser(userLiamId, liam);

        assertThat(fakeDataDao.selectAllUsers()).hasSize(2);
        //assertThat(fakeDataDao.selectUserByUserId(userLiamId).isPresent());

        //liamOptional is from DB and liam is the User liam of this test
        Optional<User> liamOptional = fakeDataDao.selectUserByUserId(userLiamId);
        assertThat(liamOptional.isPresent()).isTrue();
        assertThat(liamOptional.get()).isEqualToComparingFieldByField(liam);
    }

    @Test
    void shouldNotSelectUserByRandomUserId() {
        Optional<User> optionalUserOfRandomId = fakeDataDao.selectUserByUserId(UUID.randomUUID());

        assertThat(optionalUserOfRandomId.isPresent()).isFalse();
     }



    @Test
    void updateUser() {
    }

    @Test
    void deleteUserByUserId() {
    }

    @Test
    void insertUser() {
    }
}