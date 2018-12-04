package com.ids.service;

import com.ids.domain.model.Employee;
import com.ids.domain.repository.EmployeeRepository;
import com.ids.web.dto.EmployeeDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(EmployeeDTO dto){
        employeeRepository.save(Employee.builder()
                                        .fullName(dto.getFullName())
                                        .phoneNumber(dto.getPhoneNumber())
                                        .build());
    }
    @Transactional
    public List<Employee> getAll(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> findByEmployeeId(Long id){
        return employeeRepository.findById(id);
    }

    @Modifying(clearAutomatically = true)
    public void removeEmployee(Employee emp){
        employeeRepository.delete(emp);
    }


}
