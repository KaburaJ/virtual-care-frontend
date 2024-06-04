const express = require('express');
require('dotenv').config();
const session = require("express-session");
const { v4 } = require("uuid")
const sql = require('mssql');
const config = require('../Auth/src/config/userConfig')
const RedisStore = require('connect-redis').default;
const {createClient} = require("redis")
const userDetailsRoutes = require('../Logic/src/routers/userDetailsRoutes')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,      
    optionSuccessStatus:200
}))


async function startApp(){
try {
    const pool = await sql.connect(config)
    console.log("App Connected to database");

//     const redisClient =  createClient();
//     redisClient.connect()
//     console.log("Connected to Redis")
    
//     const redisStore = new RedisStore({
//         client: redisClient,
//         prefix: ''
//     })
//     const oneDay = 60 * 60 * 1000 * 24;
// app.use((req, res, next)=>{req.pool = pool; next()})
// app.use(session({
//     store: redisStore,
//     secret: process.env.SECRET,
//     saveUninitialized: false,
//     genid: ()=>v4(),
//     resave: false,
//     rolling: true,
//     unset: 'destroy',
//     cookie:{
//         httpOnly: true,
//         maxAge: oneDay,
//         secure: false,
//         domain: 'localhost'
//     }
// }))

app.use('/', userDetailsRoutes)

app.get('/', (req, res) => {
  res.send('Virtual Care');
});

const port = 5003;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});


} catch (error) {
    console.log("Error connecting to database")
    console.log(error)
}
}

startApp();



