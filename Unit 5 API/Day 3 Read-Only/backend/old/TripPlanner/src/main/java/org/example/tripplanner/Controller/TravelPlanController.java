package org.example.tripplanner.Controller;

import org.example.tripplanner.model.TravelPlan;
import org.example.tripplanner.repository.TravelPlanRepository;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<TravelPlan>> getAllTravelPlans() {
        List<TravelPlan> travelPlans = (List<TravelPlan>) travelPlanRepository.findAll();
        return ResponseEntity.ok(travelPlans);
    }


    @GetMapping("/travelPlans/{id}")
    public TravelPlan getTravelPlansById(@PathVariable String id) {
        return travelPlanRepository.findById(id).orElse(null);
    }

//    @PostMapping("/travelPlans")
//    public TravelPlan createTravelPlan(@RequestBody TravelPlan travelPlan) {
//        return travelPlanRepository.save(travelPlan);
//    }

//    @PutMapping("/travelPlans/{id}")
//    public TravelPlan updateTravelPlan(@PathVariable String id, @RequestBody TravelPlan travelPlanDetails) {
//        Optional<TravelPlan> travelPlan = travelPlanRepository.findById(id);
//        if (travelPlan.isPresent()) {
//            TravelPlan existingTravelPlan = travelPlan.get();
//            existingTravelPlan.setTripName(travelPlanDetails.getTripName());
//            existingTravelPlan.setDestination(travelPlanDetails.getDestination());
//            existingTravelPlan.setCost(travelPlanDetails.getCost());
//            existingTravelPlan.setDesc(travelPlanDetails.getDesc());
//            existingTravelPlan.setThingsToSee(travelPlanDetails.getThingsToSee());
//            return travelPlanRepository.save(existingTravelPlan);
//        } else {
//            return null;
//        }
//    }
//
//    @DeleteMapping("/travelPlans/{id}")
//    public void deleteTravelPlan(@PathVariable String id) {
//        travelPlanRepository.deleteById(id);
//    }
}
