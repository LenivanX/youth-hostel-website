package com.leni.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leni.app.entity.TariffEntity;

@Repository
public interface TariffRepo extends JpaRepository<TariffEntity, Integer> {

}
