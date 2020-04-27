package com.jade.learningspringboot.service;

import com.jade.learningspringboot.dao.FakeDataDao;
import com.jade.learningspringboot.dao.UserDao;
import com.jade.learningspringboot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserDao userDao;

    @Autowired //this will take fakeDao and get line 15 userDao to be instantiated
    //with our fakeDao
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public List<User> getAllUsers(Optional<String> gender ) {
        List<User> users = userDao.selectAllUsers();
        if(!gender.isPresent()) {
            return users;
        }
        //get a stream of these users
        //check whether gender is what we have
        try {
            User.Gender theGender = User.Gender.valueOf(gender.get().toUpperCase());
            //stream out the data
            return users.stream() //getting a stream of the list of users
                    .filter(user -> user.getGender().equals(theGender)) //filtering the data so its equal with the statement youve passed to the client, eg only FEMALES
                    .collect(Collectors.toList()); //collecting the results from a stream back into a list
        } catch (Exception e) {
            throw new IllegalStateException("Invalid gender", e);
        }
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
