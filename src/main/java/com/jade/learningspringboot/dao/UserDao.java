package com.jade.learningspringboot.dao;

import com.jade.learningspringboot.model.User;

import java.util.List;
import java.util.UUID;

public interface UserDao {

    List<User> getAllUsers();

    User getUser(UUID userId);

    int updateUser(User user);

    int removeUser(UUID userId);

    int insertUser(UUID userId, User user);

}
