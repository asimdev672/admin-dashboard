import React from "react";
import CompA5 from "./CompA5";
import CompA6 from "./CompA6";
import CompA7 from "./CompA7";
import CompA8 from "./CompA8";
import CompA9 from "./CompA9";
import CompA10 from "./CompA10";
import CompA4 from "./CompA4";
export default function MainAccessControl() {
  return (
    <>
      <h3
        className="text-center my-3"
        style={{ fontWeight: "700", color: "#024264" }}
      >
        Access Control
      </h3>
      <CompA4 /> <br />
      <CompA5 /> <br />
      <CompA6 /> <br />
      <CompA7 /> <br />
      <CompA8 /> <br />
      <CompA9 /> <br />
      <CompA10 /> <br />
    </>
  );
}
