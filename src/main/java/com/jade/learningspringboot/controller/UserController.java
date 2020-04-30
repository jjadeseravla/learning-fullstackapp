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
    public ResponseEntity<?> fetchUser(@PathVariable("userId") UUID userId) {
        //? cos i dont know if we are going to find this user or not
        Optional<User> optionalUser = userService.getUser(userId);
        return optionalUser.<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorMessage("user" + userId + " not found")));
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
    public ResponseEntity<Integer> insertNewUser(@Valid @RequestBody User user) { //@RequestBody takes the request body and map it inside this user
        int result = userService.insertUser(user);
        return getIntegerResponseEntity(result);
    }

    @PutMapping
    public ResponseEntity<Integer> updateUser(@RequestBody User user) {
        int result = userService.updateUser(user);
        return getIntegerResponseEntity(result);
    }

    @DeleteMapping(path = "{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable("userId") UUID userId) {
        int result = userService.removeUser(userId);
        return getIntegerResponseEntity(result);
    }

    private ResponseEntity<Integer> getIntegerResponseEntity(int result) {
        if(result == 1) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}




