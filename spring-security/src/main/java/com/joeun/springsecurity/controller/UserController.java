package com.joeun.springsecurity.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
@Controller
@RequestMapping("/user")
public class UserController {
    
    /**
     * 사용자 페이지
     * @return
     */
    // 회원 권한(ROLE_USER)을 가진 사용자만 접근 허용
    @PreAuthorize("hasRole('ROLE_USER')")
    // @Secured("ROLE_USER") // PreAuthorize와 동일
    @GetMapping(value={"/", ""})
    public String index() {

        return "user/index";
    }

    
    
    
}
