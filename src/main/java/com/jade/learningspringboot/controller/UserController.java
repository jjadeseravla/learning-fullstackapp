package com.jade.learningspringboot.controller;

import com.jade.learningspringboot.model.User;
import com.jade.learningspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    private static final java.util.UUID UUID = ;
    public UserService userService; //dependency injection

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> fetchUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{}") //a value that we will pass in the path
    public User fetchUser(@PathVariable("userId") UUID userId) {
        return userService.getUser(userId).get(); //.get() because getUser() is an Optional
    }
}
