const Joi = require('joi')

const userSchema = Joi.object({
    FirstName: Joi.string().required(),
	LastName: Joi.string().required(),
	UserName: Joi.string().required(),
	UserEmail: Joi.string().email({ minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
    UserPassword: Joi.string().pattern(new RegExp("^[A-Za-z0-9]")).required(),
    UserCPassword: Joi.ref('UserPassword'),
	UserPhoneNumber: Joi.string().required()
}).with('UserPassword', 'UserCPassword')

module.exports = userSchema;
