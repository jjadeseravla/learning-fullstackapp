//package com.jade.learningspringboot.controller;
//package com.jade.learningspringboot.resource;
//
//import com.jade.learningspringboot.model.User;
//import com.jade.learningspringboot.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import javax.ws.rs.Path;
//import javax.ws.rs.QueryParam;
//import java.util.List;
//import java.util.Optional;
//
//@Path("/api/v1/users")
//public class UserControllerResteasy {
//
//    private UserService userService;
//
//    @Autowired
//    public UserControllerResteasy(UserService userService) {
//        this.userService = userService;
//    }
//
//    public List<User> fetchUsers(@QueryParam("gender") String gender) {
//        return userService.getAllUsers(Optional.ofNullable(gender));
//    }
//}
