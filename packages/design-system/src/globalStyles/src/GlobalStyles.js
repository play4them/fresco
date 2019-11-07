import React from 'react';
import { Global } from '@emotion/core';
import css from '@styled-system/css';

const GlobalStyles = () => (
  <Global
    styles={css({
      '*': { boxSizing: 'border-box' },
      body: {
        m: 0,
        fontFamily: 'ui',
        color: 'black',
      },
      table: { borderCollapse: 'collapse' },
    })}
  />
);

export default GlobalStyles;
