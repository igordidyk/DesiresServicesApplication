package com.ids.domain.model;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "client_tables")
public class ClientTable extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_tables_id")
    private Long id;

    @Column(name = "number_of_table",unique = true)
    private String tableNumber;

    private boolean isReserved;

    private boolean isOccupied;

    private boolean isEmpty;

    @Column(name = "date_of_reservation",nullable = false)
    private Instant dateOfReserved;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_id", nullable = false)
    @Builder.Default
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "employee_id", nullable = false)
    @Builder.Default
    private Employee employee;

}
