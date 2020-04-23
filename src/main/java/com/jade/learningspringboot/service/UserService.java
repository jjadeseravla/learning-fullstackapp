package com.jade.learningspringboot.service;

import com.jade.learningspringboot.dao.FakeDataDao;
import com.jade.learningspringboot.dao.UserDao;
import com.jade.learningspringboot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private UserDao userDao;

    @Autowired //this will take fakeDao and get line 15 userDao to be instantiated
    //with our fakeDao
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public List<User> getAllUsers() {
        return userDao.selectAllUsers();
    }

    public Optional<User> getUser(UUID userId) {
         return userDao.selectUserByUserId(userId);
    }

    public int updateUser(User user) {
        Optional<User> optionalUser = getUser(user.getUserId());
        if(optionalUser.isPresent()) {
            return userDao.updateUser(user);
        } else {
            return -1;
        }
    }

    public int removeUser(UUID userId) {
        Optional<User> optionalUser = getUser(userId);
        if(optionalUser.isPresent()) {
            userDao.deleteUserByUserId(userId);
            return 1;
        }
            return -1;
    }

    public int insertUser(User user) {
        UUID userId = UUID.randomUUID();
        user.setUserId(userId);
        return userDao.insertUser(userId, user);
    }

}
