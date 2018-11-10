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
@Table(name = "work_week")
public class WorkWeek extends AuditModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "work_week_id")
    private Long id;

    @Column(name = "start_of_the_week",nullable = false)
    private Instant startOfTheWeek;

    @Column(name = "end_of_the_week",nullable = false)
    private Instant endOfTheWeek ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "stuff_id", nullable = false)
    private Stuff stuff;

}
