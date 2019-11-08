import React from 'react';
import * as Reach from '@reach/tabs';
import css from '@styled-system/css';

import { Box } from '../../box';
import { Heading } from '../../typography';

// For some reason arrow keys aren't working and I can't explain why. Look into this further.
// https://reacttraining.com/reach-ui/tabs

const Tab = ({ children, isSelected, ...rest }) => (
  <Reach.Tab
    data-playground-id="tab"
    css={css({
      position: 'relative',
      height: 48,
      m: 0,
      mb: '-1px',
      p: 0,
      border: 0,
      bg: 'transparent',
      appearance: 'none',
      cursor: 'pointer',
      ':not(:first-of-type)': {
        ml: 'spacing.5',
      },
    })}
    {...rest}
  >
    <Heading
      data-playground-id="tab.label"
      as="span"
      size={400}
      lineHeight="48px"
      textAlign="center"
      color={isSelected ? 'gray.9' : 'gray.7'}
    >
      {children}
    </Heading>
    <Box
      data-playground-id="tab.highlight"
      as="span"
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      height="1px"
      bg="gray.9"
      opacity={isSelected ? 1 : 0}
    />
  </Reach.Tab>
);

const Tabs = ({ data, ...rest }) => {
  return (
    <Reach.Tabs data-playground-id="tabs" {...rest}>
      {/* Tabs */}
      <Reach.TabList
        data-playground-id="tabs.list"
        css={css({
          display: 'flex',
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'gray.1',
        })}
      >
        {data.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </Reach.TabList>
      {/* Panels */}
      <Reach.TabPanels data-playground-id="tabs.panels">
        {data.map((tab, index) => (
          <Reach.TabPanel data-playground-id="tabs.panels.item" key={index}>
            {tab.content}
          </Reach.TabPanel>
        ))}
      </Reach.TabPanels>
    </Reach.Tabs>
  );
};

export default Tabs;
