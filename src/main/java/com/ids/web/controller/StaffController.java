package com.ids.web.controller;

import com.ids.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/staff")
@RequiredArgsConstructor
public class StaffController {

    private final EmployeeService employeeService;

    @GetMapping
    public String toAdmin(Model model){
        model.addAttribute("employees", employeeService.getAll());
        return "staff";
    }

}
