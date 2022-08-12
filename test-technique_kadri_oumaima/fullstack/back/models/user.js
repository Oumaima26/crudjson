const yup = require('yup');
const userSchema = yup.object({
    first_name: yup.string(),
    last_name: yup.string(),
    mail: yup.string().email(),
    company: yup.string(),
    phone_number: yup.string(),
    location: yup.object({
        address: yup.string(),
        city: yup.string(),
        zipcode: yup.number().integer()
    }),
    card: yup.object({
        id: yup.number().integer(),
        expiration: yup.string(),
        cvc2: yup.number().integer()
    }).nullable(),
})

const userPostSchema = yup.object({
    body: userSchema,
    params: yup.object({})
})

const userPutSchema = yup.object({
    body: userSchema,
    params: yup.object({
        uid: yup.string().required()
    })
})

const userDeleteSchema = yup.object({
    body : yup.object({}).nullable(),
    params: yup.object({
        uid: yup.string().required()
    })
})

module.exports = {
    userSchema,
    userPostSchema,
    userPutSchema,
    userDeleteSchema
};
