import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../src/App';
import appRoutes from '../src/router';
import htmlObtainer from './htmlObtainer';

const fs = require('fs');
const path = require('path');

const distDir: string = path.resolve(__dirname, '..', 'dist');

appRoutes.forEach((route) => {
  const content: string = ReactDOMServer.renderToString(
    <StaticRouter location={route.path}>
      <App />
    </StaticRouter>
  );

  const filePath = distDir + route.path;

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }

  console.log((filePath.match(new RegExp('/', 'g')) || []).length);

  fs.writeFile(
    `${distDir}${route.path}/index.html`,
    htmlObtainer({ content }),
    (error: any) => {
      if (error) {
        console.log(
          `Something went wrong while creating static file for route: ${route.path}`
        );
        console.log(error);

        return;
      }
      console.log(`Created static html file for ${route.path}`);
    }
  );
});
