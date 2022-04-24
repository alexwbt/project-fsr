package com.axprojects.fsr.service;

import com.axprojects.fsr.dto.record.PostItemRequestDto;
import com.axprojects.fsr.entity.Round;
import com.axprojects.fsr.repository.record.ItemRepository;
import com.axprojects.fsr.repository.record.RoundRepository;
import com.axprojects.fsr.repository.record.TurnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class RecordService {

    RoundRepository roundRepository;
    TurnRepository turnRepository;
    ItemRepository itemRepository;

    @Autowired
    public RecordService(RoundRepository roundRepository, TurnRepository turnRepository, ItemRepository itemRepository) {
        this.roundRepository = roundRepository;
        this.turnRepository = turnRepository;
        this.itemRepository = itemRepository;
    }

    public Round getRound(Long id) {
        var round = roundRepository.findById(id);
        if (!round.isPresent())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid round id");
        return round.get();
    }

    public void createRound(Integer roundIndex) {
        roundRepository.saveRound(roundIndex);
    }

    public void createTurn(String stockName, Long roundId) {
        var round = roundRepository.findById(roundId);
        if (!round.isPresent())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid round id");
        turnRepository.saveTurn(stockName, roundId);
    }

    public void createItem(PostItemRequestDto item) {
        var turn = turnRepository.findById(item.getTurnId());
        if (!turn.isPresent())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid turn id");
        itemRepository.saveItem(
            item.getTurnId(),
            item.getType().ordinal(),
            item.getDate(),
            item.getHold(),
            item.getPrice(),
            item.getTotal()
        );
    }

}
