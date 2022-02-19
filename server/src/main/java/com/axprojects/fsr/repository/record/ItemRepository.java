package com.axprojects.fsr.repository.record;

import com.axprojects.fsr.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Modifying
    @Transactional
    @Query(
        value = "insert into item " +
            "(type, date, hold, price, total, turn_id) values " +
            "(:type, :date, :hold, :price, :total, :turnId)",
        nativeQuery = true
    )
    void saveItem(
        @Param("turnId") Long turnId,
        @Param("type") Integer type,
        @Param("date") String date,
        @Param("hold") String hold,
        @Param("price") String price,
        @Param("total") String total
    );

}
