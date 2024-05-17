package com.codewithproject.dto;

import com.codewithproject.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Data
public class TaskDTO {

    private Long id;
    private String title;
    private String description;
    private Date dueDate;
    private String priority;
    private String taskStatus;
    private Long employeeId;
    private String employeeName;
}
