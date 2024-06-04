const express = require('express');
const {userDetails} = require('../controllers/userDetails');
const {profileSettings} = require('../controllers/profileSettings');
const { updateProfileSettings } = require('../controllers/updateProfile');
const {addPregnancyDetails} = require('../controllers/addPregnancyDetails');
const {details_by_Username} = require('../controllers/detailsByUsername');
const userDetailsRoutes = express.Router()

userDetailsRoutes.post('/user/details', userDetails)
userDetailsRoutes.get('/user/details/username', details_by_Username)
userDetailsRoutes.post('/user/profile/settings', profileSettings)
userDetailsRoutes.post('/user/profile/settings/update', updateProfileSettings)
userDetailsRoutes.post('/user/pregnancy/settings', addPregnancyDetails)
userDetailsRoutes.get('/users')

module.exports = userDetailsRoutes;