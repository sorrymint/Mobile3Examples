package org.example.blogsystem.controller;

import org.example.blogsystem.model.BlogPost;
import org.example.blogsystem.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blog")
public class BlogController {

    @Autowired
    private BlogPostRepository blogPostRepository;

    @GetMapping("/posts")
    public List<BlogPost> getAllPosts() {
        return blogPostRepository.findAll();
    }

    @GetMapping("/posts/{id}")
    public BlogPost getPostById(@PathVariable String id) {
        return blogPostRepository.findById(id).orElse(null);
    }

    @PostMapping("/posts")
    public BlogPost createPost(@RequestBody BlogPost blogPost) {
        return blogPostRepository.save(blogPost);
    }

    @PutMapping("/posts/{id}")
    public BlogPost updatePost(@PathVariable String id, @RequestBody BlogPost blogPost) {
        blogPost.setId(id);
        return blogPostRepository.save(blogPost);
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<?> deletePost(@PathVariable String id) {
        Optional<BlogPost> post = blogPostRepository.findById(id);
        if (post.isPresent()) {
            blogPostRepository.delete(post.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
