package com.ids.service;

import com.ids.domain.model.Employee;
import com.ids.domain.repository.EmployeeRepository;
import com.ids.web.dto.EmployeeDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public void addEmployee(EmployeeDTO dto){
        employeeRepository.save(Employee.builder()
                                        .name(dto.getName())
                                        .secondName(dto.getSecondName())
                                        .phoneNumber(dto.getPhoneNumber())
                                        .build());
    }


}
