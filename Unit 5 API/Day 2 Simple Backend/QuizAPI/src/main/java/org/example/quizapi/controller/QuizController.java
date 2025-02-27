package org.example.quizapi.controller;

import org.example.quizapi.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/start")
    public List<Question> startQuiz() {
        return questionRepository.findAll();
    }

    //TODO single question
    //TODO add score and grading support
    //TODO add users and keep track of their score
    //TODO ignore case and trim. Fuzzy search?
    @PostMapping("/submit")
    public String submitAnswer(@RequestBody SubmitAnswerRequest request) {
        Question question = questionRepository.findById(request.getQuestionId()).orElseThrow(() -> new RuntimeException("Question not found"));
        if (request.getAnswer().equals(question.getCorrectAnswer())) {
            return "Correct!";
        } else {
            return "Incorrect. The correct answer was: " + question.getCorrectAnswer();
        }
    }

}

