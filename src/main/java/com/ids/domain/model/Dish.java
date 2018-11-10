package com.ids.domain.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "dish")
public class Dish extends AuditModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_id")
    private Long id;

    @Column(name = "title_of_dish",nullable = false)
    private String dishTitle;

    @Column(name = "kind_of_dishes", nullable = false)
    private String kindOfDishes;

    @Column(name = "dish_price")
    private Double price = 0d;

    @Column(name = "portion_of_dish")
    private Integer portion;

    @Column(name = "dish_order_count")
    private Integer countDishOrder;

    @Column(name = "list_dish_components", nullable = false)
    private String dishComponents;

    @Column(name = "type_of_dish", nullable = false)
    private String typeOfDish;

}
