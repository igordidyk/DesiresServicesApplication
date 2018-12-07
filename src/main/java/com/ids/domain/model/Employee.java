package com.ids.domain.model;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "employee")
public class Employee extends AuditModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Long id;

    @Column(name = "full_name",nullable = false)
    private String fullName;

    @Column(name = "phone_number", unique = false, nullable = false)
    private String phoneNumber;

//    @Column(name = "email_employee",nullable = false)
//    private String email;
//
//    @Column(name = "password_employee", unique = false, nullable = false)
//    private String password;

}
