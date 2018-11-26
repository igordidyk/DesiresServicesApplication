package com.ids.payload;

import com.ids.domain.model.Employee;
import com.ids.service.EmployeeService;
import com.ids.web.dto.EmployeeDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class RequestController {

    private final EmployeeService employeeService;

    @PostMapping("/admin/addEmployee")
    public void add(@RequestBody EmployeeDTO employee){
        employeeService.addEmployee(employee);
        log.info("Employee: {} {} - {}  added successfully!", employee.getName(), employee.getSecondName(), employee.getPhoneNumber());
    }


    @GetMapping("/admin/getEmployees")
    public List<Employee> getAll(){
        log.info("All employees in database: {}", employeeService.getAll().size() );
        return employeeService.getAll();
    }

}
