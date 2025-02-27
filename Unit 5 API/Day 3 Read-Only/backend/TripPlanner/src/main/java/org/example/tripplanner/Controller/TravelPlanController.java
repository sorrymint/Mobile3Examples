package org.example.tripplanner.Controller;

import org.example.tripplanner.model.TravelPlan;
import org.example.tripplanner.repository.TravelPlanRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TravelPlanController {
    private final TravelPlanRepository travelPlanRepository;

    public TravelPlanController(TravelPlanRepository travelPlanRepository) {
        this.travelPlanRepository = travelPlanRepository;
    }

    @GetMapping("/travelPlans")
    public List<TravelPlan> getAllTravelPlans() {
//        List<TravelPlan> plans = travelPlanRepository.findAll();
        return travelPlanRepository.findAll();
    }


    @GetMapping("/travelPlans/{id}")
    public TravelPlan getTravelPlansById(@PathVariable String id) {
        return travelPlanRepository.findById(id).orElse(null);
    }
}
