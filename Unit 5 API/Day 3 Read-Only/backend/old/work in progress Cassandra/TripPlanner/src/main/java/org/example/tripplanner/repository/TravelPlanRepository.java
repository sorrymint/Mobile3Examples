package org.example.tripplanner.repository;

import org.example.tripplanner.model.Country;
import org.example.tripplanner.model.TravelPlan;
import org.springframework.data.cassandra.repository.CassandraRepository;

import java.util.List;

public interface TravelPlanRepository extends CassandraRepository<TravelPlan, String> {
    List<TravelPlan> findByDestinationIn(List<Country> countries);
}

