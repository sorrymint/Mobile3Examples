package org.example.tripplanner.repository;

import org.example.tripplanner.model.Country;
import org.example.tripplanner.model.TravelPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TravelPlanRepository extends MongoRepository<TravelPlan, String> {
    List<TravelPlan> findByDestinationIn(List<Country> countries);
}
