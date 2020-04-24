package com.jade.learningspringboot.controller;

import com.jade.learningspringboot.model.User;
import com.jade.learningspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    public UserService userService; //dependency injection

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> fetchUsers() {
        return userService.getAllUsers();
    }
}
