package com.jade.learningspringboot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.UUID;

public class User {

    private final UUID userId;

    @NotNull(message = "name required")
    private final String name;

    @NotNull
    private final Gender gender;

    @NotNull
    @Max(value = 112)
    @Min(value = 0)
    private final Integer age;

    public User(
            @JsonProperty("userId") UUID userId,
                @JsonProperty("name") String name,
                @JsonProperty("gender") Gender gender,
                @JsonProperty("age") Integer age) {
        this.userId = userId;
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    public static User newUser(UUID userId, User user) {
      return new User(userId,
              user.getName(),
              user.getGender(),
              user.getAge());
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

    @JsonIgnore
    public Integer getAge() {
        return age;
    }

    public int getDateofBirth() {
        return LocalDate.now().minusYears(age).getYear();
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
