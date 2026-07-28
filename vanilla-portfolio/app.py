"""
Prajwal G N Portfolio - Python (Flask) Backend Integration
This file demonstrates how to serve the HTML/CSS/JS portfolio using Python Flask,
along with REST API endpoints for contact submission and skills/projects retrieval.
"""

from flask import Flask, render_template_string, request, jsonify
import os

app = Flask(__name__)

# Portfolio Data
SKILLS = [
    {"name": "Python 3.12", "category": "Languages", "percentage": 92},
    {"name": "JavaScript (ES6+)", "category": "Languages", "percentage": 90},
    {"name": "Java", "category": "Languages", "percentage": 82},
    {"name": "HTML5 & SEO", "category": "Frontend", "percentage": 95},
    {"name": "Tailwind CSS v4", "category": "Frontend", "percentage": 92},
    {"name": "Bootstrap", "category": "Frontend", "percentage": 88},
    {"name": "Django 5.0", "category": "Backend", "percentage": 88},
    {"name": "Flask", "category": "Backend", "percentage": 85},
    {"name": "MySQL 8.0", "category": "Database", "percentage": 86},
    {"name": "Git & GitHub", "category": "Tools", "percentage": 90},
    {"name": "Software Testing & QA", "category": "Tools", "percentage": 85}
]

PROJECTS = [
    {
        "title": "Enterprise Portfolio Platform",
        "category": "Full Stack",
        "tags": ["Python", "Django", "HTML5", "CSS3", "JavaScript", "MySQL"],
        "description": "Full-stack portfolio app built with Python Flask/Django & Vanilla JS."
    },
    {
        "title": "Task & Workflow Management System",
        "category": "Backend",
        "tags": ["Python", "Flask", "MySQL", "REST API"],
        "description": "Scalable RESTful API service with MySQL database integration."
    }
]

@app.route("/")
def home():
    """Serves the main index.html file."""
    with open("index.html", "r", encoding="utf-8") as f:
        content = f.read()
    return content

@app.route("/api/skills", methods=["GET"])
def get_skills():
    """REST API endpoint returning technical skills."""
    category = request.args.get("category")
    if category and category != "All":
        filtered = [s for s in SKILLS if s["category"] == category]
        return jsonify(filtered)
    return jsonify(SKILLS)

@app.route("/api/projects", methods=["GET"])
def get_projects():
    """REST API endpoint returning projects."""
    return jsonify(PROJECTS)

@app.route("/api/contact", methods=["POST"])
def handle_contact():
    """POST endpoint receiving contact form data."""
    data = request.json or request.form
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    
    # Process message or save to MySQL database
    print(f"Received message from {name} ({email}): {message}")
    
    return jsonify({
        "status": "success",
        "message": f"Thank you {name}, your message has been received!"
    }), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
