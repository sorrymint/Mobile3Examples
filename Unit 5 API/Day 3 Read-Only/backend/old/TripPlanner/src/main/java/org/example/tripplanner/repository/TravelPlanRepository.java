package org.example.tripplanner.repository;

import org.example.tripplanner.model.Country;
import org.example.tripplanner.model.TravelPlan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface TravelPlanRepository extends CrudRepository<TravelPlan, String> {
    List<TravelPlan> findByDestinationIn(List<Country> countries);
}
