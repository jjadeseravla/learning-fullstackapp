package com.jade.learningspringboot.controller;

import com.jade.learningspringboot.model.User;
import com.jade.learningspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/users")
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

    @GetMapping(path = "{userId}") //a value that we will pass in the path
    public ResponseEntity<?> fetchUser(@PathVariable("userId") UUID userId) {
        //? cos i dont know if we are going to find this user or not
        Optional<User> optionalUser = userService.getUser(userId);
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage("user" + userId + " not found"));
    }

    class ErrorMessage {

        String errorMessage;

        public ErrorMessage(String errorMessage) {
            this.errorMessage = errorMessage;
        }

        public String getErrorMessage() {
            return errorMessage;
        }

        public void setErrorMessage(String errorMessage) {
            this.errorMessage = errorMessage;
        }
    }
}




