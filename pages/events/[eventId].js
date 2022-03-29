import styles from "../../styles/EventDetailsPage.module.css";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { EventInfo } from "../../components/events/EventInfo";
const eventDetailsPage = () => {
  let router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div className={styles.container}>
      <EventInfo event={event} />
    </div>
  );
};

export default eventDetailsPage;
