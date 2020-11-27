import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  if (process.env.NODE_ENV !== 'development')
    console.log = () => {};
  return <AppProvider>{element}</AppProvider>;
};

// with Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
