import text from './text';

export default {
  '600': {
    ...text['600'],
    lineHeight: '24px',
  },
  '500': {
    ...text['500'],
    lineHeight: '20px',
  },
  // Default
  '400': {
    ...text['400'],
    lineHeight: '20px',
  },
  '300': {
    ...text['300'],
    lineHeight: '16px',
  },
};
