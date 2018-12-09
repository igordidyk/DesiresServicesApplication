package com.ids.security;

import com.ids.domain.model.Client;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

class ClientPrincipal extends User {

    @Getter
    private final Client client;

    ClientPrincipal(String username,
                      String password,
                      Collection<? extends GrantedAuthority> authorities,
                      Client client) {
        super(username, password, authorities);
        this.client = client;
    }
}
