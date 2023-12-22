package com.joeun.board.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Comment {
    private int commentNo;
    private int boardNo;
    private String writer;
    private String content;
    private Date regDate;
    private Date updDate;
}
