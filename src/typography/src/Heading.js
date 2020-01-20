import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { compose, variant } from 'styled-system';

import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from '../../systemProps';

const Heading = styled('h2', { shouldForwardProp })(
  variant({
    prop: 'size',
    scale: 'headings',
  }),
  compose(
    COMMON,
    BORDER,
    TYPOGRAPHY,
    LAYOUT,
    POSITION,
    FLEX,
    GRID
  )
);

Heading.defaultProps = {
  'data-fresco-id': 'typography.heading',
  mt: 0,
  mb: 0,
  size: 500,
};

export default Heading;
