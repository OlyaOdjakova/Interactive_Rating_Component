import styles from "./typography.module.css";
import React from "react";

interface CardContentProps {
  title: string;
  content: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, content }) => {
  return (
    <div>
      <h2 className={styles.headerStyle}>{title}</h2>
      <p className={styles.paragraphStyle}>{content}</p>
    </div>
  );
};

export default CardContent;
