package com.leni.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "tariff")
public class TariffEntity {
    @Id
    Integer id;
    String locationName;
    String accomodationType;
    Integer maxAccomodation;
    Float bookingCharge;
    Float cautionMoney;
    Float userCharge;
    Float totalAmount;
}
