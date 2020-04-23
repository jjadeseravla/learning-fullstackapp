package com.jade.learningspringboot.service;

import com.jade.learningspringboot.dao.FakeDataDao;
import com.jade.learningspringboot.dao.UserDao;
import com.jade.learningspringboot.model.User;

import java.util.List;
import java.util.UUID;

public class UserService {

    private UserDao userDao;

    public UserService() {
        this.userDao = new FakeDataDao();
    }

    public List<User> getAllUsers() {
        return null;
    }

    public User getUser(UUID userId) {
        return null;
    }

    public int updateUser(User user) {
        return 1;
    }

    public int removeUser(UUID userId) {
        return 1;
    }

    public int insertUser(UUID userId, User user) {
        return 1;
    }

}
