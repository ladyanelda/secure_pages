# Secure Pages

Milestone 1 runs a Node.js and Express server that serves `public/index.html`.

## Start locally

Use Node.js 22 or newer. In this project folder, run:

```sh
npm ci
npm start
```

If your terminal cannot find Node.js or npm and you use nvm, load it first:

```sh
source "$HOME/.nvm/nvm.sh"
nvm use 24
```

Open http://localhost:3000 in your browser. You should see **Secure Pages** and
the milestone 1 message. Stop the server with **Ctrl+C** in the terminal.
To use a different port, run `PORT=3001 npm start` and open http://localhost:3001.

## How it works

1. `npm start` runs `server.js` using Node.js.
2. Express listens on port 3000 by default.
3. Opening http://localhost:3000 makes your browser send an HTTP request to
   your own computer (`localhost`) on that port.
4. Express serves `public/index.html` for `/`, and the browser displays the HTML.

The `public` folder is the web root, so `/index.html` also works. The URL does
not include `/public`. Files outside `public` are not served by this setup.

## Checks

```sh
npm run check
```

This checks JavaScript syntax. With the server running, use a second terminal:

```sh
curl -i http://localhost:3000/
curl -i http://localhost:3000/index.html
curl -i http://localhost:3000/missing-page
```

The first two should return HTTP 200 with the page HTML. The missing page should
return HTTP 404.

This milestone adds only the server and public page. Authentication, protected
pages, a database, and deployment are outside this milestone.
