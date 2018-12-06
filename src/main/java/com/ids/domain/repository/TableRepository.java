package com.ids.domain.repository;

import com.ids.domain.model.ClientTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<ClientTable, Long> {
    ClientTable findByTableNumber(String number);

}
