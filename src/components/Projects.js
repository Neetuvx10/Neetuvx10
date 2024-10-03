import React from "react";
import { motion } from "framer-motion";

const projectsVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.5 } }
};

const Projects = () => {
  return (
    <motion.section
      className="projects-section"
      initial="hidden"
      animate="visible"
      variants={projectsVariants}
    >
      <h2>AI & ML Projects</h2>
      <ul>
        <motion.li>Real-Time Object Detection System - YOLOv5 and Faster R-CNN (90% accuracy)</motion.li>
        <motion.li>Abnormal Event Detection in Video Surveillance - 98% accuracy using CNN</motion.li>
        <motion.li>Climate Modeling and Prediction - LSTM & XGBoost for weather forecasting</motion.li>
      </ul>
    </motion.section>
  );
};

export default Projects;
