package org.example.quizapi.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubmitAnswerRequest {
    private String questionId;
    private String answer;
}
