/**
 * @author John Doe <john.doe@mytulip.io>
 * @param schema
 * @returns {(function(*, *, *): Promise<*|undefined>)|*}
 * @callback next()
 * @description Verify request with Yup schemas
 */
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (err) {
        return res.status(403).json({ type: err.name, message: err.message });
    }
};
module.exports = validate;
