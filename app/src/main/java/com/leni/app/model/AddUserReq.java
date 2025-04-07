package com.leni.app.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddUserReq {
    String firstName;
    String middleName;
    String lastName;
    String gender;
    String address;
    String mobNo;
    String email;
    String username;
    String password;
}
