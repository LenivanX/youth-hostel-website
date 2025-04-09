package com.leni.app.controller;

import org.springframework.web.bind.annotation.RestController;

import com.leni.app.entity.TariffEntity;
import com.leni.app.model.AddUserReq;
import com.leni.app.model.LoginReq;
import com.leni.app.model.LoginRes;
import com.leni.app.service.WebServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
public class WebController {
    @Autowired
    WebServices service;

    @GetMapping("data/tariff")
    public List<TariffEntity> getTariffData() {
        return service.getTariffData();
    }

    @GetMapping("user/usernames")
    public List<String> getUsernames() {
        return service.getUsernames();
    }

    @PostMapping("user/add")
    public String addUser(@RequestBody AddUserReq req) {
        return service.addUser(req);
    }

    @PostMapping("user/login")
    public LoginRes loginReq(@RequestBody LoginReq req) {
        return service.loginReq(req);
    }

}
