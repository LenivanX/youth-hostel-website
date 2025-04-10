package com.leni.app.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddBookingReq {
    Integer locationId;
    Integer userId;
    Date startDate;
    Date endDate;
}
