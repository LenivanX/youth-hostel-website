package com.leni.app.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "bookings")
public class BookingsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    Integer locationId;
    Integer userId;
    Date startDate;
    Date endDate;
    @CreationTimestamp
    Timestamp createdAt;
}
