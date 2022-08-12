const yup = require('yup');

const itemSchema = yup.object({
    name: yup.string().required(),
    internal_id: yup.string(),
    price: yup.number().required()
})

const itemPostSchema = yup.object({
    params: yup.object({
        uid: yup.string().required()
    }),
    body: itemSchema
})

const itemPutSchema = yup.object({
    params: yup.object({
        uid: yup.string().required(),
        iid: yup.string().required()
    }),
    body: itemSchema
})

const itemDeleteSchema = yup.object({
    params: yup.object({
        uid: yup.string().required(),
        iid: yup.string().required()
    }),
    body: yup.object({}).nullable()
})

module.exports = {
    itemSchema,
    itemPostSchema,
    itemPutSchema,
    itemDeleteSchema
};
