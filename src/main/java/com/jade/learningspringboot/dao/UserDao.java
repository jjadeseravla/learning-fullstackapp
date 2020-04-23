package com.jade.learningspringboot.dao;

import com.jade.learningspringboot.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    List<User> selectAllUsers();

    Optional<User> selectUserByUserId(UUID userId);

    int updateUser(User user);

    int deleteUserByUserId(UUID userId);

    int insertUser(UUID userId, User user);

}
