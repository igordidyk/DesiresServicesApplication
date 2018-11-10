package com.ids.domain.repository;

import com.ids.domain.model.ClientTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<ClientTable, Long> {
}
