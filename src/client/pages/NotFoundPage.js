import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Oops! I did it again!</h1>
}

export default NotFoundPage;