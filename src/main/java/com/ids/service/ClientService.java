package com.ids.service;

import com.ids.domain.model.Client;
import com.ids.domain.repository.ClientRepository;
import com.ids.web.dto.ClientDTO;
import com.ids.web.dto.ModelAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public Client singUp(ClientDTO dto){
        return clientRepository.save(ModelAdapter.getClientFromDTO(dto,bCryptPasswordEncoder));
    }

}
