package com.ids.web.controller;

import com.ids.security.SecurityConstants;
import com.ids.security.constants.JWTConstants;
import com.ids.service.ClientService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class AuthController implements SecurityConstants, JWTConstants {

    private final ClientService clientService;


    @PostMapping("/sign-up")
    public String singUp(){
        return "index";
    }



//    @GetMapping("/")
//    public String home() {
//        return "/home";
//    }
//
//    @GetMapping("/admin")
//    public String admin() {
//        return "/admin";
//    }

//    @GetMapping("/user")
//    public String user() {
//        return "/user";
//    }
//

//    private Long getIdFromToken(String token) {
//        Claims body = Jwts.parser().setSigningKey(SECRET.getBytes())
//                .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
//                .getBody();
//
//        return Long.parseLong(body.get(USER_ID).toString());
//    }


}
