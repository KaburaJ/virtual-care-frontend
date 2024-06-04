const config = require('../config/userConfig')
const mssql = require('mssql')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
    userDetails: async (req, res) => {
        try {
            const user = req.body;
            const sql = await mssql.connect(config)

            if(sql.connected){
                const request = new mssql.Request(sql)
                request.input('UserID', user.UserID)

                const results = await request.execute('dbo.UserDetails');
                res.json(results.recordset)
            }

            
        }
        catch(e)
        {
            console.log(e);
            res.status(500).send('An error occured when getting the details of a user')
        }
    },
    getUsers: async (req, res) => {
        try {
            const user = req.body;
            const sql = await mssql.connect(config)

            if(sql.connected){
                const request = new mssql.Request(sql);
                request.input('UserName', user.UserName);
                const result = await request.query('SELECT * FROM Users');        
                res.json(result.recordset)
            }      
        }
        catch(e)
        {
            console.log(e);
            res.status(500).send('An error occured when getting users')
        }
    }
}