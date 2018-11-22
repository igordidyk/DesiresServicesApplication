package com.ids.web.controller;

import com.ids.service.EmployeeService;
import com.ids.web.dto.EmployeeDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin")
@Slf4j
@RequiredArgsConstructor
public class AdminController {

    private final EmployeeService employeeService;

    @GetMapping
    public String toAdmin(){
        return "admin";
    }

    @PostMapping("/addEmployee")
    public String add(@RequestParam String fullName, @RequestParam String phone){
        employeeService.addEmployee(new EmployeeDTO(fullName.split(" ")[0], fullName.split(" ")[1], phone));
        log.info("Employee:  {} - {} was added", fullName, phone);
        return "redirect:/admin#workers-list";
    }



}
