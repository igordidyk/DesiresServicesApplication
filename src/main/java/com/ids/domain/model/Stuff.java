package com.ids.domain.model;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "stuff")
public class Stuff extends AuditModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stuff_id")
    private Long id;

    @Column(name = "first_name",nullable = false)
    private String name;

    @Column(name = "second_name", nullable = false)
    private String secondName;

    @Column(name = "phone_number", unique = false, nullable = false)
    private String phoneNumber;

}
