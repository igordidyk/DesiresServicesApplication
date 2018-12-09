package com.ids.web.dto;

import com.ids.domain.model.Client;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class ModelAdapter {

    public static Client getClientFromDTO(ClientDTO dto, BCryptPasswordEncoder passwordEncoder){
        return Client.builder()
                .name(dto.getName())
                .secondName(dto.getSecondName())
                .email(dto.getEmail())
                .password(passwordEncoder.encode(dto.getPassword()))
                .phoneNumber(dto.getPhoneNumber())
                .build();
    }


}
