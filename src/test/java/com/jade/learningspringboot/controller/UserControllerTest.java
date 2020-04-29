package com.jade.learningspringboot.controller;

import com.jade.learningspringboot.LearningSpringBootApplication;
import com.jade.learningspringboot.model.User;
import com.jade.learningspringboot.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Optional;
import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willReturn;

//@SpringBootTest(classes = LearningSpringBootApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    UUID mockUserId = UUID.randomUUID();
    User mockUser = new User(mockUserId, "Phil", User.Gender.MALE, 40);

    String exampleUserJson = "{\"name\":\"Phil\",\"gender\":\"MALE\",\"dateofBirth\":\"1980\"}";

//    @Test
//    public void shouldGetAllUsers() {
////        Mockito.when(
////              userService.getAllUsers(Mockito.verify(mockUser.)))
////                      .thenReturn(mockUser);
//        given(userService.getAllUsers(Optional.of(User.Gender))).willReturn(Optional.of(mockUser));
//    }
    //how to i mock an optional????



    @Test
    public void shouldPostAUser() throws Exception {
//        UUID mockUserId2 = UUID.randomUUID();
//        User mockUser2 = new User(mockUserId2, "Joanne", User.Gender.FEMALE, 35);

   //     Mockito.when(
//                userService.insertUser(mockUser2).thenReturn(1);
 //       )
        given(userService.insertUser(mockUser)).willReturn(1);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/api/v1/users")
                .accept(MediaType.APPLICATION_JSON).content(exampleUserJson)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        MockHttpServletResponse response = result.getResponse();

        assertEquals(HttpStatus.CREATED.value(), response.getStatus());

        assertEquals("http://localhost/api/v1/users",
                response.getHeader(HttpHeaders.LOCATION));
    }

}
