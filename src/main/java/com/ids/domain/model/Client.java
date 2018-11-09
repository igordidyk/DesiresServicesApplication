
package com.ids.domain.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String name;

    @Column(name = "second_name", nullable = false)
    private String secondName;

    @Column(name = "phone_number",unique = true,nullable = false)
    private String phoneNumber;

    @Email
    @Column(unique = true,nullable = false)
    private String email;

    @Size(min = 8)
    @Column(nullable = false)
    private String password;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "client")
    private CartOfDishes menu;

}
