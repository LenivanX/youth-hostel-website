package com.leni.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leni.app.entity.TariffEntity;
import com.leni.app.repository.TariffRepo;

@Service
public class WebServices {
    @Autowired
    TariffRepo tariffRepo;

    public List<TariffEntity> getTariffData() {
        return tariffRepo.findAll();
    }

}
