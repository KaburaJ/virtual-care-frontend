const config = require('../config/userConfig')
const mssql = require('mssql')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
    profileSettings: async (req, res) => {
        try {
            const user = req.session.user;
            const user_details = req.body;
            const sql = await mssql.connect(config)

            if(sql.connected){
                const request = new mssql.Request(sql)
                request.input('UserID', user.UserID)
                request.input('ProfileImage', user_details.ProfileImage)
                request.input('UserBirthday', user_details.UserBirthday)
                request.input('UserAbout', user_details.UserAbout)

                const results = await request.execute('dbo.CreateProfile');
                res.json(results.recordset)
            }

            
        }
        catch(e)
        {
            console.log(e);
            res.status(500).send('An error occured when setting up the profile of a user')
        }
    }
}