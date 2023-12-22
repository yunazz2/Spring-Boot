package com.joeun.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.joeun.board.dto.Comment;

@Mapper
public interface CommentMapper {

    public List<Comment> selectCommentList(int boardNo) throws Exception;
    
}
