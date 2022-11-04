import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../src/App';
import appRoutes from '../src/router';
import htmlObtainer from './htmlObtainer';

appRoutes.forEach((route) => {
  const html: string = ReactDOMServer.renderToString(
    <StaticRouter location={route.path}>
      <App />
    </StaticRouter>
  );

  console.log(htmlObtainer({ content: html }));
});
