import { Fragment } from "react";

export const Layout = (props) => {
  return (
    <Fragment>
      <h1>Header</h1>
      <main>{props.children}</main>
    </Fragment>
  );
};
