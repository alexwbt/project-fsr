package com.axprojects.fsr.controller;

import com.axprojects.fsr.dto.record.PostItemRequestDto;
import com.axprojects.fsr.dto.record.PostRoundRequestDto;
import com.axprojects.fsr.dto.record.PostTurnRequestDto;
import com.axprojects.fsr.entity.Round;
import com.axprojects.fsr.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/records")
public class RecordController {

    RecordService recordService;

    @Autowired
    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping(value = "/round")
    public void postRound(@RequestBody @Validated PostRoundRequestDto request) {
        recordService.createRound(request.getRoundIndex());
    }

    @PutMapping(value = "/round")
    public void putRound(@RequestBody @Validated PostRoundRequestDto request) {
//        recordService.updateRound(request.getRoundIndex());
    }

    @GetMapping(value = "/round/{id}")
    public Round getRound(@PathVariable Long id) {
        return recordService.getRound(id);
    }

    @PostMapping(value = "/turn")
    public void postTurn(@RequestBody @Validated PostTurnRequestDto request) {
        recordService.createTurn(request.getStockName(), request.getRoundId());
    }

    @PostMapping(value = "/item")
    public void postItem(@RequestBody @Validated PostItemRequestDto request) {
        recordService.createItem(request);
    }

}
