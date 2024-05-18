"use client";

import React from "react";
import { useParams } from "next/navigation";
import events from "./eventsData";
import styles from "./EventDetail.module.css";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <div>Событие не найдено</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{event.title}</h1>
      <p className={styles.content}>{event.content}</p>
    </div>
  );
};

export default EventDetail;
