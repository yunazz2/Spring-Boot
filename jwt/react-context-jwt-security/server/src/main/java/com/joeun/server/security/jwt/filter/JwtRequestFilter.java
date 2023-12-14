package com.joeun.server.security.jwt.filter;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.joeun.server.security.jwt.constants.JwtConstants;
import com.joeun.server.security.jwt.provider.JwtTokenProvider;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class JwtRequestFilter extends OncePerRequestFilter {    // 매 요청마다 이 필터가 걸릴 수 있도록 Once 어쩌구를 상속 받음

    private final JwtTokenProvider jwtTokenProvider;

    // 생성자
    public JwtRequestFilter(JwtTokenProvider jwtTokenProvider) {
        
        this.jwtTokenProvider = jwtTokenProvider;
    }

    // jwt 요청 필터
    // - reqeust의 headers의 Authorization에 들어있는 JWT 토큰을 꺼내서 토큰의 유효성 검사를 진행
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        
        // 헤더에서 jwt 토큰을 가져옴
        String header = request.getHeader(JwtConstants.TOKEN_HEADER);
        log.info("authorization : " + header);

        // jwt 토큰이 없으면 다음 필터로 이동
        // Bearer + {jwt}
        if(header == null || header.length() == 0 || !header.startsWith(JwtConstants.TOKEN_PREFIX)) {
            filterChain.doFilter(request, response);
            return;
        }

        // 여기까지 넘어왔다는 건 토큰이 존재한다는 뜻
        // JWT
        // Bearer + {jwt} => "Bearer " 제거
        String jwt = header.replace(JwtConstants.TOKEN_PREFIX, "");

        // 토큰 해석
        Authentication authentication = jwtTokenProvider.getAuthentication(jwt);

        // 토큰 유효성 검사
        if(jwtTokenProvider.validateToken(jwt)) {
            log.info("유효한 JWT 토큰 입니다.");
            
            // 로그인
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        // 다음 필터
        filterChain.doFilter(request, response);
        
    }


    
}
