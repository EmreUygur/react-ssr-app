import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Request, Response, NextFunction } from 'express';

// import our main App component
import App from '../../src/App';

const path = require('path');
const fs = require('fs');

export default (_req: Request, res: Response, _next: NextFunction) => {
  console.log(_req);

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'dist', 'index.html');

  fs.readFile(filePath, 'utf8', (err: any, htmlData: string) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    // render the app as a string
    const html: string = ReactDOMServer.renderToString(<App />);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}<p>SSR WORKS</p></div>`
      )
    );
  });
};
