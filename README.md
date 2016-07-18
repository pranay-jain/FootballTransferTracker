# FootballTransferTracker

This is a simple web-based application that uses NodeJS with Express servers.
This app uses the Twitter Streaming API to provide football transfer rumours and updates from all around the globe. Based on your choice of team, this app provides you with tweets(at most 20 at a time) made by mostly credible sources for the transfer updates regarding your favourite team. 

This app uses Socket.io with ReactJS to provide real-time updates as the tweets are received.
The UI Elements in the app have been developed using Google's Material Design Lite Framework. 

### To set up this application on your system

Firstly, make sure you have npm and NodeJS installed on your system. You would also need a recent version of MongoDB(3.x) installed.  

1. Clone this repo using `git clone https://github.com/pranay-jain/FootballTransferTracker.git`
2. Install all the dependencies using `npm install`
3. Open the MongoDB shell and make a new database by called transfer-tweets -  `use transfer-tweets`
4. Run the Node server using either `node server.js` or simply, `npm start`
5. Open `http://localhost:3000/` to see the application running.