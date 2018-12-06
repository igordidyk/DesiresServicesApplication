package com.ids.web.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TableDTO {
    private String tableNumber;
    private boolean isReserved;
    private boolean isOccupied;
    private boolean isEmpty;
    private Instant dateOfReserved;
}
