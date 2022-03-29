import React from "react";
import styles from "./EventCard.module.css";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "../ui/button";

const EventCard = ({ title, image, location, date }) => {
  return (
    <div className={styles.container}>
      <img src={image} />
      <div className={styles.info}>
        <h2>{title}</h2>

        <p>{location}</p>
        <div>
          <EventIcon />
          <date>{date}</date>
        </div>
        <div>
          <LocationOnIcon />
          <p>{location}</p>
        </div>
        <Button>Explore Event</Button>
      </div>
    </div>
  );
};

export default EventCard;
