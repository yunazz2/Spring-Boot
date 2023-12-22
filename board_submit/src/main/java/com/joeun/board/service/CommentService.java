package com.joeun.board.service;

import java.util.List;

import com.joeun.board.dto.Comment;

public interface CommentService {

    // 댓글 목록
    public List<Comment> selectCommentList(int boardNo) throws Exception;


    
    
}
