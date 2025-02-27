package org.example.tripplanner.model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;


@Getter
@Setter
@Document(collection = "travelPlans")
public class TravelPlan {
    @Id
    private String id;

    @Field("destination")
    private Country destination;

    @Field("trip_name")
    private String tripName;

    @Field("cost")
    private double cost;

    @Field("desc")
    private String desc;

    @Field("things_to_see")
    private List<ThingToSee> thingsToSee;

    public String getDestination() {
        return destination.getFullName();
    }
}

