import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { Request, Response } from 'express';

// import our main App component
import App from '../../src/App';

const path = require('path');
const fs = require('fs');

export default (req: Request, res: Response) => {

  const filePath = path.resolve(__dirname, '..', 'dist', 'index.html');

  fs.readFile(filePath, 'utf8', (err: any, htmlData: string) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }    

    const html: string = ReactDOMServer.renderToString(
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    );

    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}<p>SSR WORKS</p></div>`
      )
    );
  });
};
