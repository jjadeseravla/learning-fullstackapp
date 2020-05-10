package com.jade.learningspringboot.controller;

import com.jade.learningspringboot.model.User;
import com.jade.learningspringboot.service.UserService;
import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.QueryParam;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Validated
@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    public UserService userService; //dependency injection

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> fetchUsers(@QueryParam("gender") String gender) {
        //eg if you want to find all the females you'd have the url .../users?gender=FEMALE etc
        System.out.println(gender);
        return userService.getAllUsers(Optional.ofNullable(gender));
    }

    @GetMapping(path = "{userId}") //a value that we will pass in the path
    public User fetchUser(@PathVariable("userId") UUID userId) {
        return userService.getUser(userId)
               .orElseThrow(() -> new NotFoundException("User " + userId + " not found")); //if i dont get the optional ill throw new exception
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

    @PostMapping
    public void insertNewUser(@Valid @RequestBody User user) { //@RequestBody takes the request body and map it inside this user
        userService.insertUser(user);
    }

    @PutMapping(path = "{userId}")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") UUID userId) {
        userService.removeUser(userId);
    }

    private ResponseEntity<Integer> getIntegerResponseEntity(int result) {
        if(result == 1) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}




