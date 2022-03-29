import styles from "../../styles/EventDetailsPage.module.css";
const eventDetailsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.eventInfo}>
        <h2 className={styles.title}>Title Event</h2>
        <p>Description</p>
      </div>
    </div>
  );
};

export default eventDetailsPage;
