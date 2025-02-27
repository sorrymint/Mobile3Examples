# Part 3 Day 4 Optional

This example was made to be used as API for Mobile 3 class. This example can also be used in Java 3.
//TODO update Seeding JSON files data

## Set up DB

Create Database called `TripPlanner`. Import data from JSON file. 

```mysql
-- Create the travel_plans table
CREATE TABLE travel_plans (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    destination VARCHAR(255),
    trip_name VARCHAR(255),
    cost DOUBLE,
    description TEXT
);

-- Create the things_to_see table
CREATE TABLE things_to_see (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    add_price DOUBLE,
    time_in_days INT,
    travel_plan_id BIGINT,
    FOREIGN KEY (travel_plan_id) REFERENCES travel_plans(id) ON DELETE CASCADE
);


```

Seed

```mysql
-- Insert Manila Adventure travel plan
INSERT INTO travel_plans (destination, trip_name, cost, description)
VALUES ('PH', 'Manila Adventure', 1200, 'Explore the vibrant city of Manila.');

-- Insert New York Experience travel plan
INSERT INTO travel_plans (destination, trip_name, cost, description)
VALUES ('US', 'New York Experience', 2000, 'Discover the bustling city of New York.');

-- Insert Rizal Park thing to see for Manila Adventure
INSERT INTO things_to_see (title, description, add_price, time_in_days, travel_plan_id)
VALUES ('Rizal Park', 'Visit the historic Rizal Park.', 0, 1, (SELECT id FROM travel_plans WHERE trip_name = 'Manila Adventure'));

-- Insert Intramuros thing to see for Manila Adventure
INSERT INTO things_to_see (title, description, add_price, time_in_days, travel_plan_id)
VALUES ('Intramuros', 'Explore the old walled city of Intramuros.', 5, 2, (SELECT id FROM travel_plans WHERE trip_name = 'Manila Adventure'));

-- Insert Statue of Liberty thing to see for New York Experience
INSERT INTO things_to_see (title, description, add_price, time_in_days, travel_plan_id)
VALUES ('Statue of Liberty', 'Visit the iconic Statue of Liberty.', 0, 1, (SELECT id FROM travel_plans WHERE trip_name = 'New York Experience'));

-- Insert Central Park thing to see for New York Experience
INSERT INTO things_to_see (title, description, add_price, time_in_days, travel_plan_id)
VALUES ('Central Park', 'Stroll around Central Park.', 10, 2, (SELECT id FROM travel_plans WHERE trip_name = 'New York Experience'));

```

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
