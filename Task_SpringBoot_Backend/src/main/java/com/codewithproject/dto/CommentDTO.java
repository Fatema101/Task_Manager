package com.codewithproject.dto;

import lombok.Data;

import java.util.Date;

@Data
public class CommentDTO {

    private Long id;

    private String content;
    private Date createdAt;

    private Long userId;
    private Long taskId;

    private String postedBy;
}
