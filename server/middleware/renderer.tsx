import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Request, Response } from 'express';
import obtainHtml from '../htmlFile';

// import our main App component
import App from '../../src/App';

export default (req: Request, res: Response) => {
  if (req.get('Sec-Fetch-Dest') !== 'document') {
    return res.sendStatus(204);
  }

  const html: string = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <App />
    </StaticRouter>
  );

  return res.send(obtainHtml(html));
};
