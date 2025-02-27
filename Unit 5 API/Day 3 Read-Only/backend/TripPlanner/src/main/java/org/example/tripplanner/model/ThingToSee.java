package org.example.tripplanner.model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
public class ThingToSee {
    @Field("title")
    private String title;

    @Field("desc")
    private String desc;

    @Field("add_price")
    private double addPrice;

    @Field("time_in_days")
    private int timeInDays;
}
