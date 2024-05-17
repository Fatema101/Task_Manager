package com.codewithproject.services.admin;

import com.codewithproject.dto.UserDto;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();
}
