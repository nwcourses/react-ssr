import express from 'express';
import path from 'path';
import fs from 'fs/promises';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/app.mjs';

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', async(req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./html/index.html');
    try {
        const data = await fs.readFile(indexFile, 'utf8');
        res.send(
            data.replace("<div id='root'></div>", `<div id="root">${app}</div>`)
        );
    }catch(err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
