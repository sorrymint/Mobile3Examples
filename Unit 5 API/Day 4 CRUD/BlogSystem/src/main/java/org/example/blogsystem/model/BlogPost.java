package org.example.blogsystem.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "blogdb")
public class BlogPost {

    @Id
    private String id;
    private String title;
    private String content;

}
