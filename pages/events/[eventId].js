import styles from "../../styles/EventDetailsPage.module.css";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const eventDetailsPage = () => {
  let router = useRouter();

  const eventId = router.query.eventId;
  let event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  console.log(event.image);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{event.title}</h2>
      <div className={styles.eventInfo}>
        <img src={event.image} height={250} width={250} alt={"not working"} />
        <div>
          <div>
            <EventIcon />
          </div>
          <div>
            <LocationOnIcon />
          </div>
        </div>
      </div>
      <p>{event.description}</p>
    </div>
  );
};

export default eventDetailsPage;
