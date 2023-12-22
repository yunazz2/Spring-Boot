package com.joeun.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.joeun.board.dto.Comment;
import com.joeun.board.service.CommentService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    // 댓글 목록
	@GetMapping("/list")
	public String list(Model model, int boardNo) throws Exception {
		
		List<Comment> commentList = commentService.selectCommentList(boardNo);
		model.addAttribute("commentList", commentList);
		return "/comment/list";
	}
    
}
