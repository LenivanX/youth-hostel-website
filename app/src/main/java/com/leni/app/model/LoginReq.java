package com.leni.app.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginReq {
    String username;
    String password;
}
