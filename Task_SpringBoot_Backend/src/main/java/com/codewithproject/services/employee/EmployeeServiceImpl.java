package com.codewithproject.services.employee;

import com.codewithproject.dto.TaskDTO;
import com.codewithproject.entities.Task;
import com.codewithproject.entities.User;
import com.codewithproject.repositories.TaskRepository;
import com.codewithproject.utils.JwtUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final TaskRepository taskRepository;
    private final JwtUtil jwtUtil;

    @Override
    public List<TaskDTO> getTasksByUserID() {
        User user = jwtUtil.getLoggedInUser();
        if (user != null) {
            return taskRepository.findAllByUserId(user.getId())
                    .stream()
                    .sorted(Comparator.comparing(Task::getDueDate).reversed())
                    .map(Task::getTaskDTO)
                    .collect(Collectors.toList());
        }
        throw  new EntityNotFoundException("User Not Found");
    }
}
