import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const container = (stagger, delay) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const item = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.8, ease: EASE },
  },
};

const StaggerText = ({
  children,
  delay = 0,
  divideBy = "word",
  className = "",
}) => {
  if (typeof children !== "string") {
    if (typeof children === "number" || typeof children === "boolean") {
      children = String(children);
    } else {
      console.warn("StaggerText only supports plain text/string children.");
      return <>{children}</>;
    }
  }

  const text = children;
  const parts = divideBy === "letter" ? text.split("") : text.split(" ");
  const stagger = divideBy === "letter" ? 0.03 : 0.08;

  return (
    <motion.span
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      style={{ display: "inline-block" }}
      className={className}
    >
      {parts.map((part, i) => (
        <span
          key={i}
          style={{ 
            display: "inline-block", 
            overflow: "hidden", 
            position: "relative",
            verticalAlign: "top" 
          }}
        >
          <motion.span
            variants={item}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {divideBy === "letter"
              ? part === " "
                ? "\u00A0"
                : part
              : part + "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default StaggerText;
