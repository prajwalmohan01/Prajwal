package com.prajwal.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

/**
 * Prajwal G N Portfolio - Java Spring Boot Backend REST Controller
 * Demonstrates Java OOP architecture, Spring Boot REST controllers, and JSON responses.
 */
@SpringBootApplication
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }

    // Skill Model
    public static class Skill {
        public String name;
        public String category;
        public int percentage;

        public Skill(String name, String category, int percentage) {
            this.name = name;
            this.category = category;
            this.percentage = percentage;
        }
    }

    // Contact Message Request DTO
    public static class ContactRequest {
        public String name;
        public String email;
        public String subject;
        public String message;
    }

    @GetMapping("/skills")
    public List<Skill> getSkills(@RequestParam(required = false) String category) {
        List<Skill> skills = Arrays.asList(
            new Skill("Python 3.12", "Languages", 92),
            new Skill("JavaScript (ES6+)", "Languages", 90),
            new Skill("Java", "Languages", 82),
            new Skill("HTML5 & SEO", "Frontend", 95),
            new Skill("Tailwind CSS", "Frontend", 92),
            new Skill("Django 5.0", "Backend", 88),
            new Skill("Flask", "Backend", 85),
            new Skill("MySQL 8.0", "Database", 86)
        );

        if (category != null && !category.equalsIgnoreCase("All")) {
            return skills.stream()
                .filter(s -> s.category.equalsIgnoreCase(category))
                .toList();
        }
        return skills;
    }

    @PostMapping("/contact")
    public Map<String, String> handleContact(@RequestBody ContactRequest request) {
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Thank you, " + request.name + "! Your message was processed by Java Spring Boot.");
        return response;
    }
}
