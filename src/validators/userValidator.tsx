import Joi from "joi";

const userValidator =
    Joi.object({
        userId: Joi.number()
            .min(1)
            .max(9)
            .required()
            .messages({
                "number.min": "min value is 1",
                "number.max": "max value is 9"
            }),

        title: Joi.string()
            .pattern(/^.{7,}$/)
            .required()
            .messages({
                "string.empty": "title cannot be empty",
                "string.pattern.base": "title must contain 7 characters"
            }),
        body: Joi.string()
            .required()
            .pattern(/^.{8,}$/)
            .messages({
                "string.empty": "this area cannot be empty",
                "string.pattern.base": "up to 8 characters"
            })
    })

export default userValidator;