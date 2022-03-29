import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import { EventList } from "../components/events/eventList";

export default function Home() {
  // featured Events local fetch
  let featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
