package com.axprojects.fsr.repository.record;

import com.axprojects.fsr.entity.Round;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface RoundRepository extends JpaRepository<Round, Long> {

    @Modifying
    @Transactional
    @Query(
        value = "insert into round (round_index) values (:roundIndex)",
        nativeQuery = true
    )
    void saveRound(@Param("roundIndex") Integer roundIndex);

}
