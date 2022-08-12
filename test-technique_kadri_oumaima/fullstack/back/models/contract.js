const yup = require('yup');

const contractSchema = yup.object({
    uid: yup.string().required(),
    start_date: yup.number(),
    end_date: yup.number(),
    creation_date: yup.number(),
    last_update: yup.number(),
    object_type: yup.string(),
    price: yup.number(),
    item: yup.object().shape({})
})

const contractPostSchema = yup.object({
    params: yup.object({}).nullable(),
    body: contractSchema
})

const contractPutSchema = yup.object({
    params: yup.object({
        uid: yup.string().required(),
        cid: yup.string().required()
    }),
    body: contractSchema
})

const contractDeleteSchema = yup.object({
    params: yup.object({
        uid: yup.string().required(),
        cid: yup.string().required()
    })
})

module.exports = {
    contractSchema,
    contractPostSchema,
    contractPutSchema,
    contractDeleteSchema
};
