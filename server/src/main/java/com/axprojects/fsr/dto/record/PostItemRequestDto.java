package com.axprojects.fsr.dto.record;

import com.axprojects.fsr.constant.ItemType;
import lombok.Data;
import lombok.NonNull;

@Data
public class PostItemRequestDto {

    @NonNull
    private Long turnId;
    @NonNull
    private ItemType type;
    @NonNull
    private String date;
    @NonNull
    private String hold;
    @NonNull
    private String price;
    @NonNull
    private String total;

}
