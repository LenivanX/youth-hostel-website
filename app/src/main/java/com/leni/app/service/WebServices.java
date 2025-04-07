package com.leni.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leni.app.entity.TariffEntity;
import com.leni.app.entity.UserEntity;
import com.leni.app.model.AddUserReq;
import com.leni.app.repository.TariffRepo;
import com.leni.app.repository.UserRepo;

@Service
public class WebServices {
    @Autowired
    TariffRepo tariffRepo;
    @Autowired
    UserRepo userRepo;

    public List<TariffEntity> getTariffData() {
        return tariffRepo.findAll();
    }

    public String addUser(AddUserReq req) {
        UserEntity user = new UserEntity();
        user.setFirstName(req.getFirstName());
        user.setMiddleName(req.getMiddleName());
        user.setLastName(req.getLastName());
        user.setGender(req.getGender());
        user.setAddress(req.getAddress());
        user.setMobNo(req.getMobNo());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());
        user.setUsername(req.getUsername());
        userRepo.saveAndFlush(user);
        return "added";
    }

    public List<String> getUsernames() {
        Optional<List<String>> opUserList = userRepo.findAllUsers();
        if (!opUserList.isPresent()) {
            return new ArrayList<>();
        } else {
            return opUserList.get();
        }
    }

}
