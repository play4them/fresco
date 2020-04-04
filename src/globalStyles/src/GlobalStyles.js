import React from "react";
import { Global } from "@emotion/core";
import css from "@styled-system/css";

const GlobalStyles = () => (
  <Global
    styles={css({
      "*": { boxSizing: "border-box" },
      body: {
        m: 0,
        overflowX: "hidden",
        overflowY: "scroll",
        fontFamily: "ui",
        color: "gray.9",
        bg: "gray.0",
      },
      table: { borderCollapse: "collapse" },
    })}
  />
);

export default GlobalStyles;
