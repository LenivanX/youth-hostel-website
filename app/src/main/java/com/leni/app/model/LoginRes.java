package com.leni.app.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginRes {
    Integer userId;
    String firstName;
    String middleName;
    String lastName;
    String gender;
    String address;
    String mobNo;
    String email;
    String username;
}
