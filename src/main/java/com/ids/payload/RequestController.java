package com.ids.payload;

import com.ids.domain.model.Employee;
import com.ids.service.EmployeeService;
import com.ids.web.dto.EmployeeDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class RequestController {

    private final EmployeeService employeeService;

    @PostMapping("/admin/addEmployee")
    public void add(@RequestBody EmployeeDTO employee){
        employeeService.addEmployee(employee);
        log.info("Employee: {} {} - {}  added successfully!", employee.getFullName(), employee.getPhoneNumber());
    }

    @DeleteMapping("/admin/removeEmployee/{id}")
    public void delete(@PathVariable("id") Long id){
        Optional<Employee> emp = employeeService.findByEmployeeId(id);
        if (emp.isPresent()) {
            employeeService.removeEmployee(emp.get());
        }
    }

    @GetMapping("/admin/getEmployeesList")
    public List<Employee> getEmployees(){
        return employeeService.getAll();
    }

}
