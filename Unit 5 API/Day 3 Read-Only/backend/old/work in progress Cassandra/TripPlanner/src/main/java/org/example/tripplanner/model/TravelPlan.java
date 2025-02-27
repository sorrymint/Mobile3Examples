package org.example.tripplanner.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.List;
import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
@Table("travelPlans")
public class TravelPlan {
    @PrimaryKey
    private String id;

    private Country destination;

    private String tripName;


    private double cost;


    private String desc;

    private List<ThingToSee> thingsToSee;

    public String getDestination() {
        return destination.getFullName();
    }
}

