import { HTMLObtainer } from './types';

export default ({ content }: HTMLObtainer): string => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>React Typescript SSR App</title>
            <script defer type="application/javascript" src="client.js"></script>
        </head>
        <body>
            <div id="root">
                ${content}
            </div>
        </body>
        </html>
    `;
};
