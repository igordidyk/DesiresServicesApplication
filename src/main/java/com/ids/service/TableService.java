package com.ids.service;

import com.ids.domain.model.ClientTable;
import com.ids.domain.repository.TableRepository;
import com.ids.web.dto.TableDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TableService {

    private final TableRepository tableRepository;

    @Transactional
    public void save(TableDTO dto){
        tableRepository.save(ClientTable.builder()
                                .tableNumber(dto.getTableNumber())
                                .isEmpty(dto.isEmpty())
                                .isOccupied(dto.isOccupied())
                                .isEmpty(dto.isEmpty())
                                .dateOfReserved(dto.getDateOfReserved())
                                .build());
    }

    public ClientTable findByTableNumber(String number){
        return tableRepository.findByTableNumber(number);
    }

}
