import React, { useEffect, useRef } from "react";
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';

const projects = [
  {
    title: "Chat App using React",
    description:
      "A React Chat App is a real-time messaging application built using React.js for the frontend, which allows users to send and receive messages instantly. Typically, it also integrates with Node.js and WebSocket (or libraries like Socket.io) for enabling real-time communication between users.",
    image: Project1,
    link: "https://github.com/Haneef4128/React-Chat-APP",
  },
  {
    title: "Home Price Prediction using Linear Regression",
    description:
      "A Home Price Prediction using Linear Regression project typically involves developing a machine learning model that predicts the price of a home based on various features such as the size of the house, number of bedrooms, location, age of the property, and other relevant factors.",
    image: Project2,
    link: "https://github.com/Haneef4128/Home-Price-Prediction-using-Linear-Regression",
  },
  {
    title: "Human Action Recognition using Vision Transformer(ViT)",
    description:
      "Human Action Recognition using Vision Transformers (ViT) is a computer vision task that involves identifying and classifying human actions from video data. The objective is to develop a model that can recognize various actions or activities performed by humans, such as walking, running, sitting, or dancing, from visual input.",
    image: Project3,
    link: "https://github.com/Haneef4128/Human-Action-Recognition-VIT",
  },
  {
    title: "Spotify ETL Project using Python and AWS",
    description:
      "Spotify ETL Project using Python and AWS is an end-to-end data pipeline project designed to extract, transform, and load (ETL) large-scale music-related data from the Spotify API into an AWS-based infrastructure. This project is a great way to automate the collection and processing of music data, as well as gain insights into trends, preferences, and usage patterns.",
    image: Project4,
    link: "https://github.com/Haneef4128/Spotify-ETL-Project-using-Python-and-AWS",
  },
];

const Project = () => {
  const projectCards = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
      }
    );

    projectCards.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      projectCards.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="projects-section" id="project">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectCards.current[index] = el)}
            className="project-card"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
