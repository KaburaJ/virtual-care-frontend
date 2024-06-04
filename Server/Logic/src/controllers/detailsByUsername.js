const config = require('../config/userConfig')
const mssql = require('mssql')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
    details_by_Username: async (req, res) => {
        try {
            const user = req.body;
            const sql = await mssql.connect(config)

            if(sql.connected){
                const request = new mssql.Request(sql)
                request.input('UserName', user.UserName)

                const results = await request.execute('dbo.Details_by_Username');
                res.json(results.recordset)
            }

            
        }
        catch(e)
        {
            console.log(e);
            res.status(500).send('An error occured when getting the details of a user by username')
        }
    }
}