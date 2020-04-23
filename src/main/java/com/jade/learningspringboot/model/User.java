package com.jade.learningspringboot.model;

import java.util.UUID;

public class User {

    private UUID userId;
    private final String name;
    private final Gender gender;
    private final Integer age;

    public User(UUID userId, String name, Gender gender, Integer age) {
        this.userId = userId;
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public enum Gender {
        MALE,
        FEMALE
    }

    public UUID getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public Gender getGender() {
        return gender;
    }

    public Integer getAge() {
        return age;
    }

    @Override
    public String toString() {
        return "User{" +
                "uiserId=" + userId +
                ", name='" + name + '\'' +
                ", gender=" + gender +
                ", age=" + age +
                '}';
    }
}
