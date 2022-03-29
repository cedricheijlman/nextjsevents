import React, { Fragment } from "react";
import EventCard from "./eventCard";
import styles from "./EventList.module.css";
export const EventList = ({ items }) => {
  console.log(items);
  return (
    <div className={styles.container}>
      {items.map((item) => {
        return (
          <EventCard
            title={item.title}
            image={item.image}
            description={item.description}
            location={item.location}
            date={item.date}
          />
        );
      })}
    </div>
  );
};
