import React from "react";
import Button from "../ui/button";
import styles from "./EventSearch.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

export const EventSearch = () => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const router = useRouter();

  // event search handler
  const submitHandler = (e) => {
    e.preventDefault();

    const fullPath = `events/${yearInputRef.current.value}/${monthInputRef.current.value}`;

    router.push(fullPath);
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      <div className={styles.options}>
        <div>
          <label htmlFor="year">Year</label>
          <select ref={yearInputRef} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select ref={monthInputRef} id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Septemer</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};
