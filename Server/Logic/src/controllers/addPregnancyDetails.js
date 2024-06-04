const config = require('../config/userConfig')
const mssql = require('mssql')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
    addPregnancyDetails: async (req, res) => {
        try {
            const user = req.session.user;
            const user_details = req.body;
            const sql = await mssql.connect(config)

            if(sql.connected){
                const request = new mssql.Request(sql)
                request.input('UserProfileID', user_details.UserProfileID)
                request.input('UserID', user.UserID)
                request.input('DueDate', user_details.DueDate)
                request.input('StartWeight', user_details.StartWeight)
                request.input('CurrentWeight', user_details.CurrentWeight)
                request.input('Bookings', user_details.Bookings)


                const results = await request.execute('dbo.AddPregnancyDetails');
                res.json(results.recordset)
            }

            
        }
        catch(e)
        {
            console.log(e);
            res.status(500).send('An error occured when adding the pregnancy details of a user')
        }
    }
}