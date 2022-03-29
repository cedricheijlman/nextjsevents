import { Fragment } from "react";
import Header from "./header";
import styles from "./Layout.module.css";

export const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};
