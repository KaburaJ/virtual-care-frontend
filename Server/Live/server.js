const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);
const { ExpressPeerServer } = require("peer");
const url = require("url");
const cors = require('cors')
const peerServer = ExpressPeerServer(server, { // Here we are actually defining our peer server that we want to host
    debug: true,
});
const path = require("path");

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "static")));
const corsOptions = {
    origin: 'http://localhost:3000', // Change this to your React frontend URL
    credentials: true,
};

app.use(cors(corsOptions));



app.use("/peerjs", peerServer); // Now we just need to tell our application to server our server at "/peerjs".Now our server is up and running

app.get("/", (req, res) => { // On the '/' route
    res.sendFile(path.join(__dirname, "static", "index.html")); // Send our Inro page file(index.js) which in the static folder.
});

app.get("/join", (req, res) => { // Our intro page redirects us to /join route with our query strings(We reach here when we host a meeting)
    res.redirect( // When we reach /join route we redirect the user to a new unique route with is formed using Uuid 
        url.format({ // The url module provides utilities for URL resolution and parsing.
            pathname: `/join/${uuidv4()}`, // Here it returns a string which has the route and the query strings.
            query: req.query, // For Eg : /join/A_unique_Number?Param=Params. So we basically get redirected to our old_Url/join/id?params
        })
    );
});

app.get("/joinold", (req, res) => { //Our intro page redirects us to /joinold route with our query strings(We reach here when we join a meeting)
    res.redirect(
        url.format({
            pathname: req.query.meeting_id,
            query: req.query,
        })
    );
});

app.get("/join/:rooms", (req, res) => { // When we reach here after we get redirected to /join/join/A_unique_Number?params
    res.render("room", { roomid: req.params.rooms, Myname: req.query.name }); // we render our ejs file and pass the data we need in it
}); // i.e we need the roomid and the username

io.on("connection", (socket) => {
    socket.on("join-room", (roomId, id, myname) => {
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-connected", id, myname); // Use socket.broadcast.to to emit to others in the room

        socket.on("messagesend", (message) => {
            console.log(message);
            io.to(roomId).emit("createMessage", message);
        });

        socket.on("tellName", (myname) => {
            console.log(myname);
            socket.broadcast.to(roomId).emit("AddName", myname); // Use socket.broadcast.to to emit to others in the room
        });

        socket.on("disconnect", () => {
            socket.broadcast.to(roomId).emit("user-disconnected", id); // Use socket.broadcast.to to emit to others in the room
        });
    });
});


server.listen(process.env.PORT || 5030); // Listen on port 3030.
