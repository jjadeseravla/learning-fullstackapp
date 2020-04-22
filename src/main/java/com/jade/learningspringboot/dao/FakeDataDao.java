package com.jade.learningspringboot.dao;

import com.jade.learningspringboot.model.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class FakeDataDao implements UserDao {

    private static Map<UUID, User> db;

    static {
        UUID userId = UUID.randomUUID();
        db = new HashMap<>();
        db.put(userId,
                new User(userId,
                        "Jade",
                        User.Gender.FEMALE,
                        29));
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User getUser(UUID userId) {
        return null;
    }

    @Override
    public int updateUser(User user) {
        return 0;
    }

    @Override
    public int removeUser(UUID userId) {
        return 0;
    }

    @Override
    public int insertUser(User user) {
        return 0;
    }
}
