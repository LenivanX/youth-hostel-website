package com.leni.app.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.leni.app.entity.BookingsEntity;

@Repository
public interface BookingsRepo extends JpaRepository<BookingsEntity, Integer> {
    @Query(value = "select * from bookings where location_id=?1 and ((start_date between ?2 and ?3) or (end_date between ?2 and ?3))", nativeQuery = true)
    Optional<List<BookingsEntity>> isBookingAllowed(Integer locationId, Date startDate, Date endDate);
}
