import React from "react";
import events from "./eventsData";
import styles from "./EventList.module.css";

const EventList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Исторические события в математике</h1>
      <ul className={styles.eventList}>
        {events.map((event) => (
          <li key={event.id} className={styles.eventItem}>
            <a
              href={`/articles/event/${event.id}`}
              className={styles.eventLink}
            >
              {event.title}
            </a>
            <p className={styles.eventSummary}>{event.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
