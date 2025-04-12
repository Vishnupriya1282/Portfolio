// backend/resumeData.js

// const { default: Techstack } = require("../src/components/About/Techstack");

const resumeData = {
    name: "Edith",
    education: "B.Tech in Mathematics and Computing, IIT ROpar",
    skills: ["JavaScript", "React", "Node.js", "Python"],
    experience: "No proffesional experience but highly experienced in coding.",
    projects: [
      {
        
        title1: "Implementation of Fibonacci Heap",
        description1: "Demonstrated a Fibonacci heap for efficient priority queue operations: insertion, merging, extracting minimum keys, decreasing keys, and supporting Dijkstra’s algorithm for optimal shortest path calculations in graphs. Implemented key operations: insertion, extraction of minimum elements, key-value reduction, specific element deletion, and heap clearing.",
        
        title2: "Customer Cluster Analysis",
        description2: "This project aims to segment mall customers into different groups based on their annual income and spending score."
        
      }
    ]
  };
  
  const systemPrompt = `You are a chatbot that answers based on this resume data:
  Name: ${resumeData.name}
  Education: ${resumeData.education}
  Skills: ${resumeData.skills.join(', ')}
  Experience: ${resumeData.experience}
  Projects: ${resumeData.projects.map(p => `${p.title} - ${p.description}`).join('; ')}`;
  
  module.exports = { resumeData, systemPrompt };
  