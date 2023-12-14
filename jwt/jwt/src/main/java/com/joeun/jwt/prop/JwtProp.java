package com.joeun.jwt.prop;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

// 이 페이지에서는 application.propoerties에서 미리 정의해두었던 secret-key를 사용할 것
@Data
@Component
@ConfigurationProperties("com.joeun.jwt")   // com.joeun.jwt 경로 하위 속성들을 지정
public class JwtProp {

    // ✅ com.joeun.jwt.secret-key => secretKey : {인코딩 된 시크릿 키}
    private String secretKey;


}
