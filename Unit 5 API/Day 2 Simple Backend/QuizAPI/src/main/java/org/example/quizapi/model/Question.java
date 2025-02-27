package org.example.quizapi.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document(collection = "questions")
public class Question {
    @Id
    private String id;
    private String description;
    private List<String> options;
    private String correctAnswer;
}
