import React from "react";
import styles from "../../styles/EventDetailsPage.module.css";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const EventInfo = ({ event }) => {
  // date format
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // location format
  const formattedAddress = event.location.replace(", ", "\n");
  return (
    <>
      <h2 className={styles.title}>{event.title}</h2>
      <div className={styles.eventInfo}>
        <img src={event.image} height={200} width={200} alt={"not working"} />
        <div>
          <div className={styles.info}>
            <EventIcon />
            <p>{humanReadableDate}</p>
          </div>
          <div className={styles.info}>
            <LocationOnIcon />
            <p>{formattedAddress}</p>
          </div>
        </div>
      </div>
      <p className={styles.description}>{event.description}</p>
    </>
  );
};
