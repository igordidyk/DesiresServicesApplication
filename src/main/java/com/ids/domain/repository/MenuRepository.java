package com.ids.domain.repository;

import com.ids.domain.model.CartOfDishes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<CartOfDishes, Long> {
}
