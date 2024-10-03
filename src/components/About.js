import React from "react";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={aboutVariants}
      >
        <img src="profile.jpg" alt="Profile" className="profile-img" />
        <p>
          Hello! I’m Neetu Vijayananda, currently pursuing my Master’s in Computer Science at George Mason University. I specialize in AI, ML, and Deep Learning. With a passion for developing cutting-edge models, I enjoy applying technology to solve real-world problems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
