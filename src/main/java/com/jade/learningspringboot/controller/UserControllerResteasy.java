package com.jade.learningspringboot.controller;
//package com.jade.learningspringboot.resource;

import com.jade.learningspringboot.model.User;
import com.jade.learningspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Component
@Path("/api/v1/users")
public class UserControllerResteasy {

    private UserService userService;

    @Autowired
    public UserControllerResteasy(UserService userService) {
        this.userService = userService;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> fetchUsers(@QueryParam("gender") String gender) {
        return userService.getAllUsers(Optional.ofNullable(gender));
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{userId}")
    public Response fetchUser(@PathParam("userId") UUID userId){
        Optional<User> userOptional = userService.getUser(userId);
        if (userOptional.isPresent()) {
            return Response.ok(userOptional.get()).build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(new Error("user " + userId + " was not found"))
                .build();
    }


    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response insertNewUser(User user) {
        int result = userService.insertUser(user);
        return getIntegerResponseEntity(result);
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateUser(User user) {
        int result = userService.updateUser(user);
        return getIntegerResponseEntity(result);
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{userId}")
    public Response deleteUser(@PathParam("userId") UUID userId) {
        int result = userService.removeUser(userId);
        return getIntegerResponseEntity(result);
    }

    private Response getIntegerResponseEntity(int result) {
        if(result == 1) {
            return Response.ok().build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }
}
