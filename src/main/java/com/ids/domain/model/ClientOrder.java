package com.ids.domain.model;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "client_orders")
public class ClientOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_orders_id")
    private Long id;

    @Column(name = "order_number",unique = true,nullable = false)
    private Integer orderNumber;

    @Column(name = "dish_price")
    private Double dishPrice = 0d;

    @Column(name = "amount_of_dishes")
    private Integer amountOfDishes;

    @Column(name = "name_of_dishes",nullable = false)
    private String nameOfDishes;

    @Column(name = "order_from",nullable = false)
    private String orderFrom;

    @Column(name = "kind_of_payment",nullable = false)
    private String kindOfPayment;

    @Column(name = "total_price", nullable = false)
    private Double totalPrice = 0d;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "stuff_id", nullable = false)
    private Stuff stuff;

}
