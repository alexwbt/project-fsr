package com.axprojects.fsr.dto.record;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
public class PostRoundRequestDto {

    @NonNull private Integer roundIndex;

}
