package org.example.tripplanner.model;

import lombok.Getter;

@Getter
public enum Country {
    PH("Philippines"),
    US("United States"),
    UK("United Kingdom"),
    FR("France"),
    DE("Germany"),
    IT("Italy"),
    ES("Spain"),
    SE("Sweden");

    private final String fullName;

    Country(String fullName) {
        this.fullName = fullName;
    }

}
