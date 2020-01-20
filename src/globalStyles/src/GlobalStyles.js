import React from "react";
import { Global } from "@emotion/core";
import css from "@styled-system/css";

import "./inter.css";

const GlobalStyles = () => (
  <Global
    styles={css({
      "*": { boxSizing: "border-box" },
      body: {
        m: 0,
        fontFamily: "ui",
        color: "gray.9"
      },
      table: { borderCollapse: "collapse" }
    })}
  />
);

export default GlobalStyles;
