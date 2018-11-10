package com.ids.domain.repository;

import com.ids.domain.model.ClientOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<ClientOrder, Long> {
}
