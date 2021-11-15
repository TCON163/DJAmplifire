package com.example.djamplifire.service;


import com.example.djamplifire.model.Token;
import com.example.djamplifire.repository.TokenRepository;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;


@Service
public class TokenService {

    @Autowired
    private TokenRepository tokenRepository;


    private OkHttpClient okHttpClient = new OkHttpClient();



    public Token getAcessToken(String code){


        RequestBody body = new FormBody.Builder().add("code",code).add("").build();











    }


}
