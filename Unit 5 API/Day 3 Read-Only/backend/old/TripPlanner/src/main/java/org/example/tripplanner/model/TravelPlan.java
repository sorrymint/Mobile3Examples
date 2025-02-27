package org.example.tripplanner.model;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
@Table(name = "travel_plans")
public class TravelPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "destination")
    private String destination;

    @Column(name = "trip_name")
    private String tripName;

    @Column(name = "cost")
    private double cost;

    @Column(name = "description")
    private String desc;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "travel_plan_id")
    private List<ThingToSee> thingsToSee;

}


