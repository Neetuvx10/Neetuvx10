import React from "react";
import { motion } from "framer-motion";

const resumeVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

const Resume = () => {
  return (
    <motion.section
      className="resume-section"
      initial="hidden"
      animate="visible"
      variants={resumeVariants}
    >
      <h2>Resume</h2>
      <h3>Education</h3>
      <ul>
        <li><strong>Master of Science in Computer Science</strong> - George Mason University (Expected May 2025)</li>
        <li><strong>Bachelor of Science in Computer Science and Engineering</strong> - Sapthagiri College of Engineering, India (May 2023)</li>
      </ul>
      <h3>Technical Skills</h3>
      <p>Python, C++, Java, R, TensorFlow, Keras, PyTorch, etc.</p>
    </motion.section>
  );
};

export default Resume;
