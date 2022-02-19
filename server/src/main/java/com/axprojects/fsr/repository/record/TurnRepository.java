package com.axprojects.fsr.repository.record;

import com.axprojects.fsr.entity.Turn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TurnRepository extends JpaRepository<Turn, Long> {

    @Modifying
    @Transactional
    @Query(value = "insert into turn (stock_name, round_id) values (:stockName, :roundId)", nativeQuery = true)
    void saveTurn(@Param("stockName") String stockName, @Param("roundId") Long roundId);

}
