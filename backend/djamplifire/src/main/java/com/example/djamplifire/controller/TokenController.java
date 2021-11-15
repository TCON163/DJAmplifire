package com.example.djamplifire.controller;


import com.example.djamplifire.model.Token;
import com.example.djamplifire.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
public class TokenController {

    @Autowired
    private TokenService tokenService;

    @CrossOrigin
    @GetMapping("/callback")
    public Token callback(@PathVariable String code){





    }
}
