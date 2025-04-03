package com.leni.app.controller;

import org.springframework.web.bind.annotation.RestController;

import com.leni.app.entity.TariffEntity;
import com.leni.app.service.WebServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class WebController {
    @Autowired
    WebServices service;

    @GetMapping("data/tariff")
    @CrossOrigin
    public List<TariffEntity> getTariffData() {
        return service.getTariffData();
    }

}
