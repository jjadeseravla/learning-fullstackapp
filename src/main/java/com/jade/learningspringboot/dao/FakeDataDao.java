package com.jade.learningspringboot.dao;

import com.jade.learningspringboot.model.User;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository //because the purpose of this class is to get some data from a repo(or db in this case)
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
    public List<User> selectAllUsers() {

        return new ArrayList<>(db.values());
    }

    @Override
    public Optional<User> selectUserByUserId(UUID userId) {
        //letting you know it may return null of no user with that id
        return Optional.ofNullable(db.get(userId));
    }

    @Override
    public int updateUser(User user) {
        db.put(user.getUserId(), user);
        return 1;
    }

    @Override
    public int deleteUserByUserId(UUID userId) {
        db.remove(userId);
        return 1;
    }

    @Override
    public int insertUser(UUID userId, User user) {
        db.put(userId, user);
        return 1;
    }
}
