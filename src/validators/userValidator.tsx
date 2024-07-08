import Joi from "joi";

const userValidator =
    Joi.object({
        userId: Joi.number()
            .min(3)
            .max(9)
            .required()
            .messages({
                "number.min": "min value is 3",
                "number.max": "max value is 9"
            }),

        title: Joi.string()
            .pattern(/^.{7,}$/)
            .required()
            .messages({
                "string.empty": "title cannot be empty",
                "string.pattern.base": "title cannot be shorter than 7 characters"
            }),
        body: Joi.string()
            .required()
            .pattern(/^.{8,}$/)
            .messages({
                "string.empty": "this area cannot be empty",
                "string.pattern.base": "title cannot be shorter than 8 characters"
            })
    })

export default userValidator;