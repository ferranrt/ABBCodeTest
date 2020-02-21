This is an assignment performed by Ferran Romero for ABB.

## Install

Run in the project directory after clone: <br>
`npm install`

Open one separate terminal and run: <br>
`node src/server.js`

Now you have a server sending every X miliseconds a broadcast using Websockets protocol. <br>

In the project directory,run (it serves an development instance): <br>
`npm start`

If you want to build a production instance you must run:
`npm build` and host on your local WS.

## TO DO

- [ ] Implement props validation in every component.
- [ ] Use a better key for maps rendering (now using index).
- [ ] Server not broadcasting, sending individual hosts connected.
- [ ] Fix every feature header on top, now scrolls with the content.
- [ ] Implement the scroll button as in assignment instead of scrolling overflow.
- [ ] XXL-sized features table must appear in two columns
- [ ] Dockerize.
