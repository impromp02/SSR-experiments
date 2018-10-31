import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import searialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>);
  
  const helmet = Helmet.renderStatic();
  return `
    <html>
      <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INIT_STORE = ${searialize(store.getState())}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};

export default renderer;