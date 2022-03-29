import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ children, link }) => {
  // if no link
  if (!link) return <button className={styles.button}>{children}</button>;

  return (
    <Link href={link && link}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
};

export default Button;
