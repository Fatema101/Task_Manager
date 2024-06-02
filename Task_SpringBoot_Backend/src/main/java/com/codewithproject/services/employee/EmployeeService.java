package com.codewithproject.services.employee;

import com.codewithproject.dto.TaskDTO;

import java.util.List;

public interface EmployeeService {
    List<TaskDTO> getTasksByUserID();
    TaskDTO updateTask(Long id, String status);
}
