package org.example.blogsystem.repository;

import org.example.blogsystem.model.BlogPost;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlogPostRepository extends MongoRepository<BlogPost, String> {
}
