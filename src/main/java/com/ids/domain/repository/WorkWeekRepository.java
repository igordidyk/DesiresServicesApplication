package com.ids.domain.repository;

import com.ids.domain.model.WorkWeek;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkWeekRepository extends JpaRepository<WorkWeek, Long> {
}
