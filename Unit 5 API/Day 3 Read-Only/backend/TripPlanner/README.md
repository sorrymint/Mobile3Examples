# Part 3 Day 4 Optional

This example was made to be used as API for Mobile 3 class. This example can also be used in Java 3.
//TODO update Seeding JSON files data

## Set up DB

Create Database called `TripPlanner`. Call the collection `travelPlans`

Import data from JSON file. 

## How to use API

1. Test the GET endpoint for all travel plans:

```
curl http://localhost:8080/travelPlans
```

2. Test the GET endpoint for travel plans from specific countries:
   Get US and PH

```
curl http://localhost:8080/travelPlans/countries?countries=PH&countries=US
```

Get just US

```
curl http://localhost:8080/travelPlans/countries?countries=US
```
