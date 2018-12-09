package com.ids.payload;

import com.ids.domain.model.Employee;
import com.ids.service.EmployeeService;
import com.ids.service.TableService;
import com.ids.web.dto.EmployeeDTO;
import com.ids.web.dto.TableDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class RequestController {

    private final EmployeeService employeeService;
    private final TableService tableService;

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

    @PostMapping("/admin/reserved/{dateOfReserved}")
    public void saveTable(@PathVariable("dateOfReserved") String date, @RequestBody TableDTO dto){
        log.info("Table: {}", dto);
        if(dto.getDateOfReserved()==null || dto.getDateOfReserved().equals("")){
            dto.setDateOfReserved(Instant.now());
        }
        else {
            dto.setDateOfReserved(Instant.parse(date));
        }
        tableService.save(dto);
    }



}
