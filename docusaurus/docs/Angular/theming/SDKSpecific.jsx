import React from 'react';

const SDKSpecific = ({ children, name = 'angular' }) => (
  <>{window.location.pathname.includes(`/sdk/${name}`) ? children : null}</>
);

export default SDKSpecific;
