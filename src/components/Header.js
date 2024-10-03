import React from "react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Header = () => {
  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <h1>Neetu Vijayananda</h1>
      <p>MS in Computer Science | AI & ML Enthusiast</p>
    </motion.header>
  );
};

export default Header;
