//package com.jade.learningspringboot.clientproxy;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class ClientProxyConfig {
//
//    @Value("${users.api.url.v1}")
//    private String usersApiUrlV1;
//
//    @Bean //so spring creates an instance of this proxy to autowire wherever i want
//   //use resteasyclient api to provide a client to our api(userresourceresteasy)
//  //the target has to be url of our endpoint(from our property file)
//  // then we create a proxy using web target.  userresourcev1 is a mirror of our controller
//    public UserResourceV1 getUserResourceV1() {
//        ResteasyClient client = new RestEasyClientBuilder().build();
//        ResteasyWebTarget target = client.target(usersApiUrlV1);
//        UserResourceV1 proxy = target.proxy(UserResourceV1.class);
//        return proxy;
//    }
//}
