import React from "react";
import styles from "./EventCard.module.css";

const EventCard = ({ title, image, description, location, date }) => {
  return (
    <div className={styles.container}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{location}</p>
      <date>{date}</date>
    </div>
  );
};

export default EventCard;
