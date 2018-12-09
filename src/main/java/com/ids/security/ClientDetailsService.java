package com.ids.security;

import com.ids.domain.model.Client;
import com.ids.domain.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
@RequiredArgsConstructor
public class ClientDetailsService implements UserDetailsService {
    private  final ClientRepository clientRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Client client = clientRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        return new ClientPrincipal(client.getEmail(), client.getPassword(), emptyList(), client);
    }
}
