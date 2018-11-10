package com.ids.domain.model;

import lombok.*;

import javax.persistence.*;


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
    private Integer tableNumber;

    private boolean isReserved;

    private boolean isOccupied;

    private boolean isEmpty;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "stuff_id", nullable = false)
    private Stuff stuff;

}
