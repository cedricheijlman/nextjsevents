import { useRouter } from "next/router";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import Link from "next/link";
import { getFilteredEvents } from "../../dummy-data";
import { EventList } from "../../components/events/eventList";

import styles from "../../styles/FilteredEvents.module.css";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  console.log(filterData);

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <div className={styles.container}>
          <h5>Invalid filter. Please adjust your values!</h5>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <div className={styles.container}>
          <h5>No events found for the chosen filter!</h5>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Filtered Events</h1>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default filteredEventsPage;
