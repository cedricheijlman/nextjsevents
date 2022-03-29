import React, { Fragment } from "react";
import EventCard from "./eventCard";
import styles from "./EventList.module.css";
export const EventList = ({ items }) => {
  console.log(items);
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <EventCard
            key={index}
            title={item.title}
            image={item.image}
            location={item.location}
            date={item.date}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
