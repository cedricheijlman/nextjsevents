import { EventList } from "../../components/events/eventList";
import { EventSearch } from "../../components/events/eventSearch";
import { getAllEvents } from "../../dummy-data";
import styles from "../../styles/AllEventsPage.module.css";

const allEvents = getAllEvents();

const AllEventsPage = () => {
  return (
    <div className={styles.container}>
      <EventSearch />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;
