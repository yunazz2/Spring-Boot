package com.joeun.board.dto;

import lombok.Data;

@Data
public class Page {

    private int pageNo;           // 현재 페이지 번호
    private int size;           // 한 페이지에 보여줄 게시글 수
    private int totalPages;     // 총 페이지 수
    private long totalPosts; // 전체 게시글 수

    // 페이지 시작 인덱스를 계산하는 메소드
    public int calculateStartIdx() {
        return (pageNo - 1) * size;   // (현재 페이지 번호 - 1) * 한 페이지에 보여줄 게시글 수
    }
}
