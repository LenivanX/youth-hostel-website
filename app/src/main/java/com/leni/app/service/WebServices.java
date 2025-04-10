package com.leni.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leni.app.entity.BookingsEntity;
import com.leni.app.entity.TariffEntity;
import com.leni.app.entity.UserEntity;
import com.leni.app.model.AddBookingReq;
import com.leni.app.model.AddUserReq;
import com.leni.app.model.LoginReq;
import com.leni.app.model.LoginRes;
import com.leni.app.repository.BookingsRepo;
import com.leni.app.repository.TariffRepo;
import com.leni.app.repository.UserRepo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class WebServices {
    @Autowired
    TariffRepo tariffRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    BookingsRepo bookingsRepo;

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

    public LoginRes loginReq(LoginReq req) {
        Optional<UserEntity> opUser = userRepo.findByUsername(req.getUsername());
        if (opUser.isEmpty()) {
            return null;
        }
        if (!opUser.get().getPassword().equals(req.getPassword())) {
            return null;
        }
        LoginRes res = new LoginRes();
        res.setAddress(opUser.get().getAddress());
        res.setEmail(opUser.get().getEmail());
        res.setFirstName(opUser.get().getFirstName());
        res.setGender(opUser.get().getGender());
        res.setLastName(opUser.get().getLastName());
        res.setMiddleName(opUser.get().getMiddleName());
        res.setMobNo(opUser.get().getMobNo());
        res.setUserId(opUser.get().getUserId());
        res.setUsername(opUser.get().getUsername());
        return res;
    }

    public boolean addBooking(AddBookingReq req) {
        // log.info("" + bookingsRepo.isBookingAllowed(req.getLocationId(), req.getStartDate(), req.getEndDate()).get().size());
        if (bookingsRepo.isBookingAllowed(req.getLocationId(), req.getStartDate(), req.getEndDate()).get()
                .size() > 0) {
            return false;
        }
        BookingsEntity entity = new BookingsEntity();
        entity.setLocationId(req.getLocationId());
        entity.setUserId(req.getUserId());
        entity.setStartDate(req.getStartDate());
        entity.setEndDate(req.getEndDate());
        bookingsRepo.save(entity);
        return true;
    }

}
