package com.leni.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.leni.app.entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Integer> {
    @Query(value = "select username from user", nativeQuery = true)
    Optional<List<String>> findAllUsers();

    @Query(value = "select * from user where username=:username", nativeQuery = true)
    Optional<UserEntity> findByUsername(String username);
}
