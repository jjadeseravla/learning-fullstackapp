package com.jade.learningspringboot.dao;

import com.jade.learningspringboot.model.User;

import java.util.*;

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

        return new ArrayList<>(db.values());
    }

    @Override
    public User getUser(UUID userId) {

        return db.get(userId);
    }

    @Override
    public int updateUser(User user) {
        db.put(user.getUserId(), user);
        return 1;
    }

    @Override
    public int removeUser(UUID userId) {
        db.remove(userId);
        return 1;
    }

    @Override
    public int insertUser(UUID userId, User user) {
        db.put(userId, user);
        return 1;
    }
}
