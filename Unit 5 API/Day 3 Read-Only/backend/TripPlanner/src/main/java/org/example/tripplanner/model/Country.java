package org.example.tripplanner.model;

public enum Country {
    PH("Philippines"),
    US("United States"),
    UK("United Kingdom"),
    FR("France"),
    DE("Germany"),
    IT("Italy"),
    ES("Spain"),
    SE("Sweden");

    private String fullName;

    Country(String fullName) {
        this.fullName = fullName;
    }

    public String getFullName() {
        return fullName;
    }
}
