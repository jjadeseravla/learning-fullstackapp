package com.jade.learningspringboot.model;

import java.util.UUID;

public class User {

    private final UUID uiserId;
    private final String name;
    private final Gender gender;
    private final Integer age;

    public User(UUID uiserId, String name, Gender gender, Integer age) {
        this.uiserId = uiserId;
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    enum Gender {
        MALE,
        FEMALE
    }

    public UUID getUiserId() {
        return uiserId;
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
                "uiserId=" + uiserId +
                ", name='" + name + '\'' +
                ", gender=" + gender +
                ", age=" + age +
                '}';
    }
}
