package com.joeun.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joeun.board.dto.Comment;
import com.joeun.board.mapper.CommentMapper;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentMapper commentMapper;

    @Override
    public List<Comment> selectCommentList(int boardNo) throws Exception {

        List<Comment> commentList = commentMapper.selectCommentList(boardNo);

        return commentList;
    }
    
}
