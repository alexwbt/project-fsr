package com.axprojects.fsr.dto.record;

import lombok.Data;
import lombok.NonNull;

@Data
public class PostTurnRequestDto {

    @NonNull private String stockName;
    @NonNull private Long roundId;

}
