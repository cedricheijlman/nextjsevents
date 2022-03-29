import React from "react";
import styles from "./EventCard.module.css";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "../ui/button";
import Link from "next/link";

const EventCard = ({ title, image, location, date, id }) => {
  const path = `events/${id}`;

  // date format
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // location format
  const formattedAddress = location.replace(", ", "\n");
  return (
    <div className={styles.container}>
      <img src={image} />
      <div className={styles.info}>
        <h2>{title}</h2>

        <div className={styles.infoBox}>
          <EventIcon />
          <time className={styles.icon}>{humanReadableDate}</time>
        </div>
        <div className={styles.infoBox}>
          <LocationOnIcon />
          <address className={styles.icon}>{formattedAddress}</address>
        </div>
        <div className={styles.buttonBox}>
          <Button>
            <Link href={`/events/${id}`}>Explore Event</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
